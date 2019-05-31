<?php
function cerveza_aguila_destapate_page_register()
{
  $build = array();

  $build['#attached']['library'][] = array('cerveza_aguila_destapate', 'jquery.ABValidator');
  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapate.register.js';

  $form = drupal_get_form('cerveza_aguila_destapate_form_register');
  $form_html = drupal_render($form);

  $build['page'] = array(
    '#markup' => theme('page_destapate_register', array(
      'form' => $form_html,
    )),
  );

  return $build;
}

function cerveza_aguila_destapate_page_select($node)
{
  $link_record = '/destapate/video-record/' . $node->nid . '/' . REQUEST_TIME . '/' . cerveza_aguila_destapate_get_token('video-record' . REQUEST_TIME . $node->nid, FALSE);
  $link_upload = '/destapate/upload/' . $node->nid . '/' . REQUEST_TIME . '/' . cerveza_aguila_destapate_get_token('upload' . REQUEST_TIME . $node->nid, FALSE);
  $link_video = '/destapate/video-link/' . $node->nid . '/' . REQUEST_TIME . '/' . cerveza_aguila_destapate_get_token('video-link' . REQUEST_TIME . $node->nid, FALSE);
  return array(
    '#markup' => theme('page_destapate_select', array(
      'link_record' => $link_record,
      'link_upload' => $link_upload,
      'link_video' => $link_video,
    )),
  );
}

function cerveza_aguila_destapate_page_upload($node, $type)
{
  $build = array();

  $build['#attached']['library'][] = array('cerveza_aguila_destapate', 'jquery.ABValidator');
  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapate.content.js';

  $node->field_page['und'][0]['value'] = 'C';
  $node->field_tipo_contenido['und'][0]['value'] = $type;
  node_save($node);

  $form = drupal_get_form('cerveza_aguila_destapate_form_upload', $node);
  $form_html = drupal_render($form);

  $build['page'] = array(
    '#markup' => theme('page_destapate_upload', array(
      'form' => $form_html,
    )),
  );

  return $build;
}

function cerveza_aguila_destapate_page_video_link($node, $type)
{
  $build = array();

  $build['#attached']['library'][] = array('cerveza_aguila_destapate', 'jquery.ABValidator');
  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapate.content.js';

  $node->field_page['und'][0]['value'] = 'C';
  $node->field_tipo_contenido['und'][0]['value'] = $type;
  node_save($node);

  $form = drupal_get_form('cerveza_aguila_destapate_form_video_link', $node);
  $form_html = drupal_render($form);

  $build['page'] = array(
    '#markup' => theme('page_destapate_video_link', array(
      'form' => $form_html,
    )),
  );

  return $build;
}

function cerveza_aguila_destapate_page_video_end($node)
{
  $build = array();
  
  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapate.result.js';
  
  $content_type = $node->field_tipo_contenido['und'][0]['value'];
  
  $type = in_array($content_type, array('U', 'VR')) ? $node->field_archivo['und'][0]['filemime'] : NULL;

  $thumbnail = url(drupal_get_path('module', 'cerveza_aguila_destapate') . '/assets/images/destapate-img-poster-desktop.png',  array('absolute' => TRUE));

  if (isset($node->field_thumbnail['und'][0]['uri'])) {
    $thumbnail = url(file_create_url($node->field_thumbnail['und'][0]['uri']), array('absolute' => TRUE));
  }
  elseif ($content_type == 'U' && $type && $type != 'video/mp4') {
    $thumbnail = url(file_create_url($node->field_archivo['und'][0]['uri']), array('absolute' => TRUE));
  }

  $url = url(current_path(), array(
    'absolute' => TRUE
  ));

  $description = $node->body['und'][0]['value'];
  $title = $node->title;

  $og_url = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'property' => 'og:url',
      'content' => $url,
    )
  );

  $og_title = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'property' => 'og:title',
      'content' => $title,
    )
  );

  $og_type = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'property' => 'og:type',
      'content' => 'article',
    )
  );

  $og_description = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'property' => 'og:description',
      'content' => $description,
    )
  );

  $description = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'property' => 'description',
      'content' => $description,
    )
  );

  $og_image = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'property' => 'og:image',
      'content' => $thumbnail,
    )
  );

  drupal_add_html_head($og_url, 'og:url');
  drupal_add_html_head($og_title, 'og:title');
  drupal_add_html_head($og_type, 'og:type');
  drupal_add_html_head($og_description, 'og:description');
  drupal_add_html_head($description, 'description');
  drupal_add_html_head($og_image, 'og:image');
  
  $build['page'] = array(
    '#markup' => theme('page_destapate_video_end', array(
      'url_shared' => url(current_path(), array('absolute' => TRUE)),
      'content_type' => $content_type,
      'type' => $type,
      'url' => $type ? url(file_create_url($node->field_archivo['und'][0]['uri']), array('absolute' => TRUE)) : $node->field_video_link['und'][0]['value'],
      'thumbnail' => $thumbnail,
    )),
  );
  
  return $build;
}

function cerveza_aguila_destapate_form_register($form, &$form_state)
{
  $form['name'] = array(
    '#type' => 'textfield',
    '#title' => 'Nombres',
    '#attributes' => array(
      'placeholder' => 'Nombres',
    ),
    '#required' => TRUE,
  );

  $form['lastname'] = array(
    '#type' => 'textfield',
    '#title' => 'Apellidos',
    '#attributes' => array(
      'placeholder' => 'Apellidos',
    ),
    '#required' => TRUE,
  );

  $options = array(
    'CC' => 'Cédula de Ciudadania',
    'CE' => 'Cédula Extranjeria',
    'PASS' => 'Pasaporte',
  );

  $form['wdocument'] = array(
    '#type' => 'item',
  );

  $form['wdocument']['type'] = array(
    '#type' => 'select',
    '#title' => 'Documento de identidad',
    '#options' => $options,
    '#empty_option' => 'Documento de identidad',
    '#required' => TRUE,
  );

  $form['wdocument']['document'] = array(
    '#type' => 'textfield',
    '#title' => 'Número de documento',
    '#attributes' => array(
      'placeholder' => 'Número de documento',
    ),
    '#required' => TRUE,
  );

  $form['wdate'] = array(
    '#type' => 'item',
  );

  $form['wdate']['title'] = array(
    '#type' => 'item',
    '#markup' => '<label>FECHA NACIMIENTO</label>'
  );

  $form['wdate']['day'] = array(
    '#type' => 'select',
    '#title' => 'Día',
    '#options' => drupal_map_assoc(range(1, 31)),
    '#empty_option' => 'Día',
    '#required' => TRUE,
  );

  $form['wdate']['month'] = array(
    '#type' => 'select',
    '#title' => 'Mes',
    '#options' => drupal_map_assoc(range(1, 12)),
    '#empty_option' => 'Mes',
    '#required' => TRUE,
  );

  $form['wdate']['year'] = array(
    '#type' => 'select',
    '#title' => 'Año',
    '#options' => drupal_map_assoc(range(date('Y') - 118, date('Y') - 18)),
    '#empty_option' => 'Año',
    '#required' => TRUE,
  );

  $options = array(
    'Femenino' => 'Femenino',
    'Masculino' => 'Masculino',
  );

  $form['gender'] = array(
    '#type' => 'select',
    '#title' => 'Género',
    '#options' => $options,
    '#empty_option' => 'Género',
    '#required' => TRUE,
  );

  $options = cerveza_aguila_destapate_taxonomy_options_array('ciudades_colombia');

  $form['city'] = array(
    '#type' => 'select',
    '#title' => 'Ciudad',
    '#options' => $options,
    '#empty_option' => 'Ciudad',
    '#required' => TRUE,
  );

  $form['email'] = array(
    '#type' => 'textfield',
    '#title' => 'Correo Electrónico',
    '#attributes' => array(
      'placeholder' => 'Correo Electrónico',
    ),
    '#required' => TRUE,
  );

  $form['phone'] = array(
    '#type' => 'textfield',
    '#title' => 'Teléfono celular',
    '#attributes' => array(
      'placeholder' => 'Teléfono celular',
    ),
    '#required' => TRUE,
  );

  $options = cerveza_aguila_destapate_taxonomy_options_array('categoria_destapate');

  $form['category'] = array(
    '#type' => 'select',
    '#title' => 'Selecciona la categoría de tu video',
    '#options' => $options,
    '#empty_option' => 'Selecciona la categoría de tu video',
    '#required' => TRUE,
  );

  $form['remember'] = array(
    '#type' => 'checkbox',
    '#title' => 'Recordarme en este equipo',
  );

  $form['terms'] = array(
    '#type' => 'checkbox',
    '#title' => 'Acepto <a class="btn-stop-propagation" href="/destapate/terminos" target="_blank">Términos y condiciones</a> y <a class="btn-stop-propagation" href="/content/privacidad-y-cookies" target="_blank">Políticas de privacidad</a>',
    '#required' => TRUE,
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'GUARDAR Y SUBIR',
  );

  return $form;
}

function cerveza_aguila_destapate_form_register_validate($form, &$form_state)
{
  if (!form_get_errors()) {
    if (!valid_email_address($form_state['values']['email'])) {
      form_set_error('email', 'Debe ingresar un correo electrónico válido');
    }
  }
}

function cerveza_aguila_destapate_form_register_submit($form, &$form_state)
{
  try {
    $node = new stdClass();
    $node->type = 'contenido_destapate';
    $node->status = 0;
    $node->title = 'Registro';

    $node->field_nombres['und'][0]['value'] = $form_state['values']['name'];
    $node->field_apellidos['und'][0]['value'] = $form_state['values']['lastname'];
    $node->field_tipo_documento['und'][0]['value'] = $form_state['values']['type'];
    $node->field_no_documento['und'][0]['value'] = $form_state['values']['document'];
    $node->field_genero['und'][0]['value'] = $form_state['values']['gender'];
    $node->field_fecha_nacimiento['und'][0]['value'] = $form_state['values']['year'] . '-' . $form_state['values']['month'] . '-' . $form_state['values']['day'] . ' 00:00:00';
    $node->field_ciudad_tax['und'][0]['tid'] = $form_state['values']['city'];
    $node->field_correo_electronico['und'][0]['value'] = $form_state['values']['email'];
    $node->field_telefono_movil['und'][0]['value'] = $form_state['values']['phone'];
    $node->field_categoria['und'][0]['tid'] = $form_state['values']['category'];
    $node->field_page['und'][0]['value'] = 'S';

    $node->field_estado['und'][0]['value'] = 'P';
    $node->field_sendmail['und'][0]['value'] = 0;

    node_save($node);

    $term = taxonomy_term_load($form_state['values']['city']);

    $data = array(
      'api_user'=> '1540844071',
      'api_token'=> '50c430958e594880c91fbc60b1be91c1',
      'formid'=> '2793421',
      'name'=> $form_state['values']['name'],
      'last-name'=> $form_state['values']['lastname'],
      'document' => $form_state['values']['document'],
      'birth-day' => str_pad($form_state['values']['day'], 2, "0", STR_PAD_LEFT) . '/' . str_pad($form_state['values']['month'], 2, "0", STR_PAD_LEFT) . '/' . $form_state['values']['year'],
      'email'=> $form_state['values']['email'],
      'tyc'=> 1,
      'city' => $term->name,
      'state' => $term->name,
      'phone' => $form_state['values']['phone'],
      'country'=> 'Colombia',
      'optin'=> '1'
    );
    
    cerveza_aguila_destapate_add_queue_datalayer(array(
      'event' => 'Registro_destapate',
      'eventCategory' => 'Registro_destapate_aguila',
      'eventAction' => 'Envio_registro_exitoso',
      'eventLabel' => $node->field_correo_electronico['und'][0]['value'],
    ));

    $queue = DrupalQueue::get('cerveza_aguila_destapate_consumer');
    $queue->createItem($data);

    $key = REQUEST_TIME;
    $token = cerveza_aguila_destapate_get_token('seleccion' . $key . $node->nid, FALSE);
    $form_state['redirect'] = 'destapate/seleccion/' . $node->nid . '/' . $key . '/' . $token;
  } catch (Exception $e) {
    drupal_set_message($e->getMessage(), 'error');
  }
}

function cerveza_aguila_destapate_form_upload($form, &$form_state, $node)
{
  $form['nid'] = array(
    '#type' => 'value',
    '#value' => $node->nid,
  );

  $form['wrapper'] = array(
    '#type' => 'item',
  );

  $form['wrapper']['title'] = array(
    '#type' => 'item',
    '#markup' => '<h3>CREA TU CONTENIDO</h3>',
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

  $form['wrapper']['file'] = array(
    '#type' => 'managed_file',
    '#title' => 'SELECCIONA TU VIDEO O IMAGEN',
    '#required' => TRUE,
    '#upload_location' => 's3://destapate',
    '#upload_validators' => array('file_validate_extensions' => array('mp4 png jpg jpeg')),
  );


  $form['wrapper']['terms'] = array(
    '#type' => 'checkbox',
    '#title' => 'Acepto <a class="btn-stop-propagation" href="/destapate/terminos" target="_blank">Términos y condiciones</a> y <a class="btn-stop-propagation" href="/content/privacidad-y-cookies" target="_blank">Políticas de privacidad</a>',
    '#required' => TRUE,
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'CREAR CONTENIDO',
  );

  return $form;
}

function cerveza_aguila_destapate_form_upload_submit($form, &$form_state)
{
  try {
    $file = file_load($form_state['values']['file']);
    $file->status = FILE_STATUS_PERMANENT;
    file_save($file);

    $node = node_load($form_state['values']['nid']);
    $node->title = $form_state['values']['name'];
    $node->body['und'][0]['value'] = $form_state['values']['description'];
    $node->field_archivo['und'][0]['fid'] = $file->fid;
    $node->field_archivo['und'][0]['display'] = 1;
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
      'eventLabel' => 'Sube tu video o foto',
    ));

    drupal_mail('cerveza_aguila_destapate', 'received', $node->field_correo_electronico['und'][0]['value'], NULL, $params);
  }
  catch (Exception $e) {
    drupal_set_message($e->getMessage(), 'error');
  }
}

function cerveza_aguila_destapate_form_video_link($form, &$form_state, $node)
{
  $form['nid'] = array(
    '#type' => 'value',
    '#value' => $node->nid,
  );

  $form['wrapper'] = array(
    '#type' => 'item',
  );

  $form['wrapper']['left'] = array(
    '#type' => 'item',
  );

  $form['wrapper']['left']['title'] = array(
    '#type' => 'item',
    '#markup' => '<h3>TU VIDEO</h3>',
  );

  $form['wrapper']['left']['link'] = array(
    '#type' => 'textfield',
    '#title' => 'Copia y pega el link de tu video en este campo:',
    '#required' => TRUE,
  );

  $form['wrapper']['left']['thumbnail'] = array(
    '#type' => 'managed_file',
    '#title' => 'Miniatura de tu video',
    '#required' => TRUE,
    '#upload_location' => 's3://destapate/thumbnail/',
    '#upload_validators' => array('file_validate_extensions' => array('png jpg jpeg')),
  );

  $form['wrapper']['left']['disclaimer'] = array(
    '#type' => 'item',
    '#markup' => '<h5 class="destapate-disclaimer__title">Recomendaciones:</h5>
<p class="destapate-disclaimer__body">Tu video debe ser público<br>
El video será revisado por nuestro equipo creativo para su publicación, te confirmaremos cuando esté en nuestra página web.</p>',
  );

  $form['wrapper']['right'] = array(
    '#type' => 'item',
  );

  $form['wrapper']['right']['title'] = array(
    '#type' => 'item',
    '#markup' => '<h3>CREA TU CONTENIDO</h3>',
  );
  $form['wrapper']['right']['name'] = array(
    '#type' => 'textfield',
    '#title' => 'Nombre del contenido:',
    '#attributes' => array(
      'placeholder' => 'Nombre del contenido:',
    ),
    '#required' => TRUE,
  );

  $form['wrapper']['right']['description'] = array(
    '#type' => 'textarea',
    '#title' => 'Descripción del contenido',
    '#required' => TRUE,
  );


  $options = cerveza_aguila_destapate_taxonomy_options_array('categoria_destapate');

  $form['wrapper']['right']['category'] = array(
    '#type' => 'select',
    '#title' => 'Elige tu categoría',
    '#options' => $options,
    '#empty_option' => 'Elige tu categoría',
    '#required' => TRUE,
  );

  $form['wrapper']['right']['terms'] = array(
    '#type' => 'checkbox',
    '#title' => 'Acepto <a class="btn-stop-propagation" href="/destapate/terminos" target="_blank">Términos y condiciones</a> y <a class="btn-stop-propagation" href="/content/privacidad-y-cookies" target="_blank">Políticas de privacidad</a>',
    '#required' => TRUE,
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'CREAR CONTENIDO',
  );

  return $form;
}

function cerveza_aguila_destapate_form_video_link_validate($form, &$form_state) {
  if (!form_get_errors()) {
    if (strpos($form_state['values']['link'], 'youtube.com/watch?v=') === FALSE || strpos($form_state['values']['link'], 'youtube.com/embed/KBGJPUEj_6A') === FALSE) {
      form_set_error('link', 'Debe ingresar un link válido de youtube');
    }
  }
}

function cerveza_aguila_destapate_form_video_link_submit($form, &$form_state)
{
  try {
    $form_state['values']['link'] = str_replace('/watch?v=', '/embed/', $form_state['values']['link']);
    
    $file = file_load($form_state['values']['thumbnail']);
    $file->status = FILE_STATUS_PERMANENT;
    file_save($file);

    $node = node_load($form_state['values']['nid']);
    $node->title = $form_state['values']['name'];
    $node->body['und'][0]['value'] = $form_state['values']['description'];
    $node->field_video_link['und'][0]['value'] = $form_state['values']['link'];

    $node->field_thumbnail['und'][0]['fid'] = $file->fid;
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
      'eventLabel' => 'Link de video',
    ));
    
    drupal_mail('cerveza_aguila_destapate', 'received', $node->field_correo_electronico['und'][0]['value'], NULL, $params);
  }
  catch (Exception $e) {
    drupal_set_message($e->getMessage(), 'error');
  }
}
