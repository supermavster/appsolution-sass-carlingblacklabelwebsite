
<?php
function cerveza_aguila_destapa_get_quiz($node) {
  global $user;
  $commands = array();

  /*$result = cerveza_aguila_destapa_get_questions($user->uid);

  $form = '';
  if ($result) {
    $form = drupal_get_form('cerveza_aguila_destapa_form_quiz', $node, $result);
    $form = render($form);
  }

  $html = theme('cerveza_aguila_destapa_modal_question_type_1', array(
    'form' => $form,
  ));

  $commands[] = array(
    'command' => 'showModal',
    'html' => $html,
    'id' => '#modal-question-type-1',
  );*/

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_get_question_type_1($node) {
  global $user;
  $commands = array();

  /*$result = cerveza_aguila_destapa_get_questions($user->uid);

  if ($result) {
    $form = drupal_get_form('cerveza_aguila_destapa_form_questions_type_1', $node, $result);
    $form = render($form);

    $html = theme('cerveza_aguila_destapa_modal_question_type_1', array(
      'form' => $form,
    ));

    $commands[] = array(
      'command' => 'showModalQuestion',
      'html' => $html,
      'id' => '#modal-question-type-1',
    );
  }
  else {
    $commands[] = array(
      'command' => 'continueVideo',
    );
  }*/
  $commands[] = array(
    'command' => 'continueVideo',
  );
  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_form_questions_type_1($form, &$form_state, $node_chapter, $result) {
  $form['title'] = array(
    '#prefix' => '<h3>',
    '#suffix' => '</h3>',
  );

  $form['questions'] = array(
    '#tree' => TRUE,
  );

  foreach($result as $item) {
    $node = node_load($item->nid);
    $options = array();
    if (isset($node->field_respuestas['und']) && count($node->field_respuestas['und']) > 0) {
      foreach($node->field_respuestas['und'] as $response) {
        $options[] = $response['value'];
      }

      $form['title']['#markup'] = $node->title;

      $form['questions'][$node->nid] = array(
        '#type' => $node->field_tipo['und'][0]['value'] == 'select' ? 'select' : 'checkboxes',
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
      'callback' => 'cerveza_aguila_destapa_form_questions_type_1_ajax_callback',
    ),
  );

  return $form;
}

function cerveza_aguila_destapa_form_questions_type_1_ajax_callback($form, &$form_state) {
  global $user;
  $commands = array();
  
  if (!form_get_errors()) {
    
    foreach ($form_state['values']['questions'] as $key => $value) {
    
      $node = node_load($key);
      if ($node->type == 'preguntas_juego' && !cerveza_aguila_destapa_get_response($user->uid, $node->nid)) {
        cerveza_aguila_destapa_add_points($user->uid, 2, 'question_type_1');
  
        db_insert('cerveza_aguila_destapa_response')
          ->fields(array(
            'uid' => $user->uid,
            'nid' => $key,
            'created' => REQUEST_TIME,
            'response' => $value,
          ))
          ->execute();
  
        $commands[] = array(
          'command' => 'pushDataLayer',
          'event' => 'pregunta',
          'eventCategory' => 'pregunta',
          'eventAction' => $node->title,
          'eventLabel' => $value,
        );
      }
    }
  
    $html = theme('cerveza_aguila_destapa_modal_question_success', array(
      'total' => cerveza_aguila_destapa_get_points($user->uid),
    ));
  
    $commands[] = array(
      'command' => 'showModalQuestionSuccess',
      'html' => $html,
      'id' => '#modal-question-success',
    );
  }
  else {
    $old_message = drupal_get_messages();
    
    $commands[] = array(
      'command' => 'closeModal',
      'id' => '#modal-question-type-1',
    );
  }

  return array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
}

function cerveza_aguila_destapa_get_questions($uid) {
  $query = db_select('node', 'n')
    ->condition('n.type', 'preguntas_juego')
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
