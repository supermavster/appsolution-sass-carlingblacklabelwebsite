<?php

function cerveza_aguila_destapate_page_video_record($node, $type) {
  $node->field_page['und'][0]['value'] = 'C';
  $node->field_tipo_contenido['und'][0]['value'] = $type;
  node_save($node);

  $build = array();
  $key = REQUEST_TIME;

  $token = cerveza_aguila_destapate_get_token('video-record-upload' . $key . $node->nid, FALSE);
  $next = url('destapate/video-record-upload/' . $node->nid . '/' . $key . '/' . $token);

  $build['#attached']['js'][] = array(
    'type' => 'setting',
    'data' => array(
      'cervezaAguilaDestapate' => array(
        'next' => $next,
        'time' => 40,
        'ziggeo' => variable_get('cerveza_aguila_destapate_ziggeo', 'e8507321a2091bbf95c16b244e0371cb'),
      ),
    ),
  );

  $build['#attached']['css']['https://assets-cdn.ziggeo.com/v2-stable/ziggeo.css'] = array('type' => 'external');

  $build['#attached']['js']['https://assets-cdn.ziggeo.com/v2-stable/ziggeo.js'] = array('type' => 'external');

  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapa.record.js';

  $build['content'] = array(
    '#markup' => theme('page_destapate_video_record'),
  );

  return $build;
}

function cerveza_aguila_destapate_page_video_record_upload($node, $type) {
  $build = array();

  $build['#attached']['library'][] = array('cerveza_aguila_destapate', 'jquery.ABValidator');

  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapate.content.js';

  $form = drupal_get_form('cerveza_aguila_destapate_form_video_record', $node, $_GET['videoToken']);
  $form_html = drupal_render($form);

  $url = 'https://embed-cdn.ziggeo.com/v1/applications/'. variable_get('cerveza_aguila_destapate_ziggeo', 'e8507321a2091bbf95c16b244e0371cb') . '/videos/' . $_GET['videoToken'] . '/video.mp4';
  $poster = 'https://embed-cdn.ziggeo.com/v1/applications/'. variable_get('cerveza_aguila_destapate_ziggeo', 'e8507321a2091bbf95c16b244e0371cb') . '/videos/' . $_GET['videoToken'] . '/image?force_refresh=' . REQUEST_TIME;

  $build['page'] = array(
    '#markup' => theme('page_destapate_video_record_upload', array(
      'url' => $url,
      'form' => $form_html,
      'poster' => $poster,
    )),
  );

  return $build;
}

function cerveza_aguila_destapate_form_video_record($form, &$form_state, $node, $video_token) {
  $form['nid'] = array(
    '#type' => 'value',
    '#value' => $node->nid,
  );

  $form['video_token'] = array(
    '#type' => 'value',
    '#value' => trim($video_token),
  );

  $form['wrapper'] = array(
    '#type' => 'item',
  );

  $form['wrapper']['name'] = array(
    '#type' => 'textfield',
    '#title' => 'Nombre del contenido:',
    '#attributes' => array(
      'placeholder' => 'Nombre del contenido:',
    ),
    '#required' => TRUE,
  );

  $form['wrapper']['description'] = array(
    '#type' => 'textarea',
    '#title' => 'Descripción del contenido',
    '#required' => TRUE,
  );


  $options = cerveza_aguila_destapate_taxonomy_options_array('categoria_destapate');

  $form['wrapper']['category'] = array(
    '#type' => 'select',
    '#title' => 'Elige tu categoría',
    '#options' => $options,
    '#empty_option' => 'Elige tu categoría',
    '#required' => TRUE,
  );

  $form['wrapper']['terms'] = array(
    '#type' => 'checkbox',
    '#title' => 'Acepto <a class="btn-stop-propagation" href="/destapate/terminos" target="_blank">Términos y condiciones</a> y <a class="btn-stop-propagation" href="/content/privacidad-y-cookies" target="_blank">Políticas de privacidad</a>',
    '#required' => TRUE,
  );

  $link_record = '/destapate/video-record/' . $node->nid . '/' . REQUEST_TIME . '/' . cerveza_aguila_destapate_get_token('video-record' . REQUEST_TIME . $node->nid, FALSE);

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'GUARDAR Y COMPARTIR',
    '#prefix' => l('GRABAR DE NUEVO', $link_record),
  );

  return $form;
}

function cerveza_aguila_destapate_form_video_record_validate($form, &$form_state) {
  if (!form_get_errors()) {
    $directory = 's3://destapate/record/';

    file_prepare_directory($directory, FILE_CREATE_DIRECTORY);

    $ziggeo = variable_get('cerveza_aguila_destapate_ziggeo', 'e8507321a2091bbf95c16b244e0371cb');

    $url = 'https://embed-cdn.ziggeo.com/v1/applications/'. $ziggeo . '/videos/' . $form_state['values']['video_token'] . '/video.mp4';

    $url_poster = 'https://embed-cdn.ziggeo.com/v1/applications/' . $ziggeo . '/videos/' .  $form_state['values']['video_token'] . '/image?force_refresh=' . REQUEST_TIME;

    $name = $form_state['values']['video_token'] . '_' . uniqid('_') . '_' . REQUEST_TIME;

    $destination =  $directory . $name . '.mp4';

    $destination_poster =  $directory . $name . '.jpg';

    if (!copy($url, $destination) || !copy($url_poster, $destination_poster)) {
      form_set_error('name', 'Error al subir video al servidor, debe reintentar');
    }
    else {
      $form_state['values']['file_name'] = $name;
    }
  }
}

function cerveza_aguila_destapate_form_video_record_submit($form, &$form_state) {
  try {
    $file_name = $form_state['values']['file_name'] . '.mp4';
    $destination_uri = 's3://destapate/record/' . $file_name;

    $file = file_save((object)array(
      'filename' => $file_name,
      'uri' => $destination_uri,
      'status' => FILE_STATUS_PERMANENT,
      'filemime' => file_get_mimetype($destination_uri),
    ));

    $file_name = $form_state['values']['file_name'] . '.jpg';
    $destination_uri = 's3://destapate/record/' . $file_name;

    $file_poster = file_save((object)array(
      'filename' => $file_name,
      'uri' => $destination_uri,
      'status' => FILE_STATUS_PERMANENT,
      'filemime' => file_get_mimetype($destination_uri),
    ));

    $node = node_load($form_state['values']['nid']);
    $node->title = $form_state['values']['name'];
    $node->body['und'][0]['value'] = $form_state['values']['description'];

    $node->field_archivo['und'][0]['fid'] = $file->fid;
    $node->field_archivo['und'][0]['display'] = 1;

    $node->field_thumbnail['und'][0]['fid'] = $file_poster->fid;
    $node->field_thumbnail['und'][0]['display'] = 1;

    $node->field_page['und'][0]['value'] = 'F';
    $node->field_categoria['und'][0]['tid'] = $form_state['values']['category'];
    node_save($node);

    $key = REQUEST_TIME;

    $token = cerveza_aguila_destapate_get_token('resultado' . $key . $node->nid, FALSE);
    $link = 'destapate/resultado/' . $node->nid . '/' . $key . '/' . $token;

    $form_state['redirect'] = $link;

    $url_final = url($link, array('absolute' => TRUE));

    $params = array(
      'url_final' => $url_final
    );
  
    cerveza_aguila_destapate_add_queue_datalayer(array(
      'event' => 'Crear_contenido_destapate',
      'eventCategory' => 'Crear_contenido_destapate',
      'eventAction' => 'Envio_contenido',
      'eventLabel' => 'Graba tu video',
    ));

    drupal_mail('cerveza_aguila_destapate', 'received', $node->field_correo_electronico['und'][0]['value'], NULL, $params);
  }
  catch (Exception $e) {
    drupal_set_message($e->getMessage(), 'error');
  }
}
