<?php
function cerveza_aguila_destapa_share_login($node) {
  $commands = array();
  if (user_is_anonymous()) {
    $html = theme('cerveza_aguila_destapa_modal_login', array(
      'modal_video' => FALSE,
    ));
    $commands[] = array(
      'command' => 'showModal',
      'html' => $html,
      'id' => '#modal-login-register',
    );
  }
  
  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_share($node) {
  $commands = array();
  /*$is_public = isset($node->field_fecha_estreno['und'][0]['value']) && $node->field_fecha_estreno['und'][0]['value'] < REQUEST_TIME;
  
  if (user_is_logged_in() && $node->status == 1 && $node->type == 'videos_promo_destapa' && $is_public) {
    global $user;

    $result = db_select('cerveza_aguila_destapa_share', 's')
      ->fields('s', array('id'))
      ->condition('s.nid', $node->nid)
      ->condition('s.uid', $user->uid)
      ->execute()
      ->fetchField();

    if (!$result) {
      db_insert('cerveza_aguila_destapa_share')
        ->fields(array(
          'uid' => $user->uid,
          'nid' => $node->nid,
          'created' => REQUEST_TIME,
        ))
        ->execute();

      cerveza_aguila_destapa_add_points($user->uid, 1, 'share_chapter');

      $html = theme('cerveza_aguila_destapa_modal_share', array(
        'total' => cerveza_aguila_destapa_get_points($user->uid),
      ));

      $commands[] = array(
        'command' => 'showModal',
        'html' => $html,
        'id' => '#modal-share',
      );
    }
  }*/

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}
