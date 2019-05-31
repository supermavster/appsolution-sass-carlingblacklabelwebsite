<?php
function cerveza_aguila_destapate_home() {
  $build = array();

  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/strokeText.min.js';
  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapa.home.js';
  
  $query = new EntityFieldQuery();
  $entities = $query->entityCondition('entity_type', 'node')
    ->propertyCondition('type', 'destapate_inspiraci_n')
    ->propertyCondition('status', 1)
    ->execute();
  
  $nodes = array();
  if (!empty($entities['node'])) {
    $nodes = node_load_multiple(array_keys($entities['node']));
  }
  
  $query = new EntityFieldQuery();
  $entities = $query->entityCondition('entity_type', 'node')
    ->propertyCondition('type', 'destapate_mentores')
    ->propertyCondition('status', 1)
    ->fieldOrderBy('field_weight', 'value')
    ->execute();
  
  $nodes_mentors = array();
  if (!empty($entities['node'])) {
    $nodes_mentors = node_load_multiple(array_keys($entities['node']));
  }
  
  $build['page'] = array(
    '#markup' => theme('page_destapate_home', array(
      'nodes' => $nodes,
      'node_mentors' => $nodes_mentors,
    )),
  );

  return $build;
}

function cerveza_aguila_destapate_referee() {
  return array(
    '#markup' => theme('page_destapate_referee'),
  );
}

function cerveza_aguila_destapate_gallery($tid=NULL) {
  $build = array();

  $build['#attached']['css']['https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'] = array('type' => 'external');
  $build['#attached']['js']['https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'] = array('type' => 'external');

  $build['#attached']['js'][] = drupal_get_path('module', 'cerveza_aguila_destapate') . '/js/cerveza_aguila_destapa.gallery.js';

  $items = array();

  foreach (cerveza_aguila_destapate_taxonomy_options_array2('categoria_destapate') as $key => $item) {
    if (is_null($tid)) {
      $tid = $item['tid'];
    }

    $items[$item['tid']] = array(
      'title' => $item['name'],
      'body'=> $item['body'],
      'tid' => $item['tid'],
      'url' => url('destapate/galeria/' . $item['tid']),
    );
  }

  $build['page'] = array(
    '#markup' => theme('page_destapate_gallery', array(
      'items' => $items,
      'tid' => $tid
    )),
  );

  return $build;
}

function cerveza_aguila_destapate_page_terms() {
  return array(
    '#markup' => theme('page_destapate_terms'),
  );
}
