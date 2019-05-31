
<?php
function cerveza_aguila_destapa_view_chapter($node) {
  $commands = array();

  $path_module = drupal_get_path('module', 'cerveza_aguila_destapa');
  $build = array();

  if (user_is_anonymous()) {
    $html = theme('cerveza_aguila_destapa_modal_login', array(
      'modal_video' => TRUE,
    ));
    $commands[] = array(
      'command' => 'showModal',
      'html' => $html,
      'id' => '#modal-login-register',
    );
  }
  else {
    $key = uniqid();
    $token = drupal_get_token($node->nid . $key);

    $path_question = '/destapaelcamerino/ver-capitulo/' . $node->nid . '/questions/' . $key . '/' . $token;
    $path_quiz = '/destapaelcamerino/ver-capitulo/' . $node->nid . '/quiz/' . $key . '/' . $token;
    $commands[] = ajax_command_settings(array(
      'videoID' => $node->field_video_id['und'][0]['value'],
      'videoTitle' => $node->title,
      'pathQuestion' => $path_question,
      'pathQuiz' => $path_quiz,
    ), TRUE);
    
    $v = $node->nid;
    $t = md5($node->nid . drupal_get_private_key() . drupal_get_hash_salt());
    
    $link = url('destapaelcamerino', array('absolute' => TRUE, 'query' => array(
      't' => $t,
      'v' => $v,
    )));
    
    $html = theme('cerveza_aguila_destapa_modal_video', array(
      'title' => $node->title,
      'description' => $node->field_descripcion['und'][0]['value'],
      'nid' => $node->nid,
      'link' => $link
    ));

    $commands[] = array(
      'command' => 'showModalVideo',
      'html' => $html,
      'id' => '#modal-preview-video',
    );
  }

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}
