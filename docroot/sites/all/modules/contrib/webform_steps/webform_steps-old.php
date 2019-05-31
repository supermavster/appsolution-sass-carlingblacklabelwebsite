<?php

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * Add webform_steps to the top of the webform.
 * Add submit and validate handlers to handle the step-switching.
 */
function webform_steps_form_webform_client_form_alter(&$form, &$form_state, $form_id) {
 
  // Let the webform3-shim add the progressbar.
  if (function_exists('webform_steps_w3_progressbar')) {
    webform_steps_w3_progressbar($form, $form_state);
  }
  if (empty($form['progressbar'])) {
    return;
  }
		
  // Keep track of the last visited page.
  if (!isset($form_state['webform']['page_visited'])) {
    $form_state['webform']['page_visited'] = 1;
  }
  $form_state['webform']['page_visited'] = max($form_state['webform']['page_num'], $form_state['webform']['page_visited']);

  // Submit buttons for step navigation.
  
   $form['submitted']['step_buttons_prev'] = array(
    '#type' => 'container',
    '#attributes' => array('class' => array('webform-steps-buttons webform-steps-completed')),
	'#weight' => 0,
	'#tree' => 1,
  );
  
  $form['step_buttons'] = array(
    '#type' => 'container',
    '#attributes' => array('class' => array('webform-steps-buttons webform-steps-uncompleted')),
	'#weight' => 1000,
  );
  
  //element-invisible
  
  // When the form is submitted by pressing enter, the browser submits
  // the first button (position in HTML). We don't want enter to jump to
  // the first step, so we insert an invisible "next"-button.
  $button = isset($form['actions']['submit']) ? $form['actions']['submit'] : $form['actions']['next'];
  unset($button['#id']);
  $form['step_buttons']['next'] = array(
    '#attributes' => array('class' => array('element-invisible')),
    '#weight' => -100,
  ) + $button;

  array_unshift($form['#submit'], 'webform_steps_navigation_callback');

  $ajax = module_exists('webform_ajax') && $form['#node']->webform['webform_ajax'];
  $current_page = $form_state['webform']['page_num'];

  foreach ($form['progressbar']['#page_labels'] as $n => $label) {
    $page = $n+1;
	$class='';
	if($current_page == $page){
		$class='current_step';
	}
	
	$modified='';
	$description = '<div class="desc-class">'.$label.'</div>';
	$field_form_key='page_'.$n.'_modified';
    $field = webform_steps_get_webform_component($form['#node']->nid,$field_form_key);
	if(is_array($field) && count($field) > 0){
		//echo "<pre>";
		
		$cid='';
		$cid = $field['cid'];
		//print_r($form_state['values']['submitted'][$cid]);
		if(isset($form_state['values']['submitted'][$cid])){
			if(is_array($form_state['values']['submitted'][$cid])){
				$modified = $form_state['values']['submitted'][$cid][0];
			}else{
				$modified = $form_state['values']['submitted'][$cid];
			}
			$description .= '<div class="desc-class">Last edit: '.date('D, M y', $modified).'</div>';
		}
	}

    $fieldset = array(  '#type' => 'fieldset', 
						'#title' => '<span class="steps step'.$page.' ">'.$page.'</span>'.$label, 
						'#collapsible' => FALSE, 
						'#collapsed' => FALSE, 
						'#attributes' => array('class' => array($class)),
						'#title_display' => 'before',
						'#description' => $description,
				); 
  
    $button = array(
      '#type' => 'submit',
      '#attributes' => array('class' => array('step-button '.$class)),
      '#name' => 'step-btn',
      '#value' => $label,
      '#page' => $page,
      '#disabled' => $current_page == $page || $page > $current_page + 1,
    );
    if ($page < $current_page) {
      $button['#validate'] = array();
      $button['#attributes']['formnovalidate'] = 'formnovalidate';
    }
    if ($ajax) {
      // @see webform_ajax_form_webform_client_form_alter().
      $button['#ajax'] = array(
        'callback' => 'webform_ajax_callback',
        'wrapper' => $form['webform_ajax_wrapper_id']['#value'],
        'progress' => array(
          'message' => '',
          'type' => 'throbber',
        ),
        'event' => 'click',
      );
      // Workaround for Drupal core bug http://drupal.org/node/1548976.
      // As long as buttons HTML id are causing problems, and it has bad
      // consequences on pages where Webform AJAX is active, we'll force
      // custom ids on AJAXed Webform's buttons.
      $button['#id'] = drupal_html_id('edit-webform-step-button-' . $page . '-' .$form['#node']->nid);
    }

	$fieldset[]=$button;
	if( $page < $current_page){
		$form['submitted']['step_buttons_prev'][] = $fieldset;
	}

	if( $current_page == $page){
		$form['submitted']['webform']['page_info'] = array(
															'#type' => 'markup',
															'#markup' => '<div class="'.$class.'"><span class="steps step'.$page.' ">'.$page.'</span><div class="title-class"><h1>'.$label.'</h1></div></div>',
													);
	}	

	if( $page > $current_page){
		$form['step_buttons'][] = $fieldset;
	}	
  }
  
  //echo "<pre>";
  //print_r($form['submitted']);
}

/**
 * Submit callback for the step button
 *
 * We simulate next and previous button clicks for
 * @see webform_client_form_pages().
 */
function webform_steps_navigation_callback(&$form, &$form_state) {
  $button = &$form_state['clicked_button'];
  if (!isset($button['#page'])) {
    return;
  }
  $new_page = (int) $button['#page'];
  $old_page = &$form_state['webform']['page_num'];
  // prohibit jumps of more than one step forward at once, after the user
  // jumped back, otherwise one could skip the validations of a step.
  $new_page = min($new_page, $old_page + 1);
  if ($new_page > $old_page) {
    // simulate click on next.
    $button['#parents'][] =  'next';
    $old_page = $new_page - 1;
  } else {
    // simulate click on previous.
    $button['#parents'][] =  'previous';
    $old_page = $new_page + 1;
  }
  $form_state['values']['op'] = 'next';
  return $form;
}

function webform_steps_get_webform_component($nid, $form_key) {
  $query = db_select('webform_component', 'wco');

  $query
    ->condition('wco.nid', $nid, '=')
    ->condition('wco.form_key', $form_key, '=')
    ->fields(
      'wco',
      array('cid', 'form_key', 'name', 'type', 'extra', 'weight')
    );

  $result = $query->execute()->fetchAssoc();
  //$result['extra'] = $result['extra'] ? unserialize($result['extra']) : NULL;
  return $result;
}
