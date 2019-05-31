
<?php
function cerveza_aguila_destapa_get_quiz($node) {

  global $user;
  $add_points = FALSE;
  $commands = array();

  /*$result = db_select('cerveza_aguila_destapa_play', 'p')
    ->fields('p', array('id'))
    ->condition('p.nid', $node->nid)
    ->condition('p.uid', $user->uid)
    ->execute()
    ->fetchField();

  if (!$result) {
    $add_points = TRUE;
    db_insert('cerveza_aguila_destapa_play')
      ->fields(array(
        'uid' => $user->uid,
        'nid' => $node->nid,
        'created' => REQUEST_TIME,
      ))
      ->execute();
    cerveza_aguila_destapa_add_points($user->uid, 3, 'play_end');
  }


  $result = cerveza_aguila_destapa_get_questions_quiz($user->uid, $node->nid);
  $form = '';
  if ($result) {
    $form = drupal_get_form('cerveza_aguila_destapa_form_quiz', $node, $result);
    $form = render($form);
  }

  $html = theme('cerveza_aguila_destapa_modal_quiz', array(
    'form' => $form,
    'total' => cerveza_aguila_destapa_get_points(),
    'add_points' => $add_points,
  ));


  $commands[] = array(
    'command' => 'showModalQuiz',
    'html' => $html,
    'id' => '#modal-quiz',
  );*/

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_form_quiz($form, &$form_state, $node_chapter, $result) {
  $form['w'] = array(
    '#prefix' => '<div class="trivia-wrapper">',
    '#suffix' => '</div>',
  );
  $form['w']['title'] = array(
    '#prefix' => '<p class="text-center">',
    '#suffix' => '</p>',
  );

  $form['w']['questions'] = array(
    '#tree' => TRUE,
  );

  foreach($result as $item) {
    $node = node_load($item->nid);
    $options = array();
    if (isset($node->field_respuestas['und']) && count($node->field_respuestas['und']) > 0) {
      foreach($node->field_respuestas['und'] as $response) {
        $options[] = $response['value'];
      }

      $form['w']['title']['#markup'] = $node->title;
      $form['w']['questions'][$node->nid] = array(
        '#type' => 'radios',
        '#title' => $node->title,
        '#options' => $options,
        '#required' => TRUE,
        '#title_display' => 'invisible',
      );
    }
  }

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'Enviar',
    '#ajax' => array(
      'callback' => 'cerveza_aguila_destapa_form_quiz_ajax_callback',
    ),
  );

  return $form;
}

function cerveza_aguila_destapa_form_quiz_ajax_callback($form, &$form_state) {
  global $user;
  $commands = array();
  if (!form_get_errors()) {
    $ok = FALSE;
    foreach ($form_state['values']['questions'] as $key => $value) {
      $node = node_load($key);
      if ($node->type == 'preguntas_video_destapa' && !cerveza_aguila_destapa_get_response($user->uid, $node->nid)) {
        db_insert('cerveza_aguila_destapa_response')
          ->fields(array(
            'uid' => $user->uid,
            'nid' => $key,
            'created' => REQUEST_TIME,
            'response' => $value,
          ))
          ->execute();
        if ($node->field_respuesta_correcta['und'][0]['value'] == $value) {
          $ok = TRUE;
    
          $commands[] = array(
            'command' => 'pushDataLayer',
            'event' => 'pregunta',
            'eventCategory' => 'pregunta',
            'eventAction' => $node->title,
            'eventLabel' => $node->field_respuestas['und'][$value]['value'],
          );
    
          cerveza_aguila_destapa_add_points($user->uid, 2, 'quiz');
        }
      }
    }
  }
  else {
    $old_message = drupal_get_messages();
  }

  if ($ok) {
    $html = theme('cerveza_aguila_destapa_modal_quiz_success', array(
      'total' => cerveza_aguila_destapa_get_points($user->uid),
    ));

    $commands[] = array(
      'command' => 'showModalQuizSuccess',
      'html' => $html,
      'id' => '#modal-quiz-success',
    );
  }
  else {
    $html = theme('cerveza_aguila_destapa_modal_quiz_failed', array(
      'total' => cerveza_aguila_destapa_get_points($user->uid),
    ));

    $commands[] = array(
      'command' => 'showModalQuizFailed',
      'html' => $html,
      'id' => '#modal-quiz-failed',
    );
  }

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_get_questions_quiz($uid, $nid) {
  $query = db_select('field_data_field_preguntas', 'p')
    ->condition('p.entity_id', $nid)
    ->condition('p.bundle', 'videos_promo_destapa');


  $query->join('node', 'n', 'n.nid = p.field_preguntas_nid');

  $query
    ->condition('n.type', 'preguntas_video_destapa')
    ->condition('n.status', 1);

  $query->leftJoin('cerveza_aguila_destapa_response', 'r', 'r.nid = n.nid AND r.uid = :uid', array(':uid' => $uid));

  return $query
    ->fields('n', array('nid'))
    ->isNull('r.nid')
    ->range(0, 1)
    ->orderRandom()
    ->execute()
    ->fetchAll();
}
