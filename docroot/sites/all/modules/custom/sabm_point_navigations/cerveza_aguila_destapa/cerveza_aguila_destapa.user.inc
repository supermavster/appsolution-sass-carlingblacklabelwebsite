<?php
function cerveza_aguila_destapa_callback_user_delete($user) {
  $commands = array();

  $key = drupal_random_key();
  $link_delete = '/destapaelcamerino/user/confirm-delete/' . $key . '/' . drupal_get_token($key);

  $html = theme('cerveza_aguila_destapa_modal_user_delete', array(
    'link_delete' => $link_delete,
  ));

  $commands[] = array(
    'command' => 'showModal',
    'html' => $html,
    'id' => '#modal-user-delete',
  );

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_callback_user_confirm_delete($key, $token) {
  global $user;
  if (drupal_get_token($key) == $token) {
    user_delete($user->uid);
  }
  drupal_goto('destapaelcamerino');
}