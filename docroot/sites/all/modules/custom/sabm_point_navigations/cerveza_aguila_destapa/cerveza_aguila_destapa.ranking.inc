<?php
function cerveza_aguila_destapa_ranking() {
  $path_module = drupal_get_path('module', 'cerveza_aguila_destapa');
  drupal_add_js($path_module . '/js/cerveza_aguila_destapa.ranking.js');

  $build = array();
  $rows = array();

  $query = db_select('cerveza_aguila_destapa_ranking', 'r')
    ->fields('r', array('total_points'));

  $query->join('users', 'u', 'u.uid = r.uid');

  $query->join('field_data_field_nombres', 'n', 'n.entity_id = u.uid');
  $query->leftJoin('field_data_field_apellidos', 'a', 'a.entity_id = u.uid');

  $result = $query
    ->fields('u', array('name'))
    ->fields('n', array('field_nombres_value'))
    ->fields('a', array('field_apellidos_value'))
    ->orderBy('r.total_points', 'DESC')
    ->orderBy('r.updated')
    ->execute();

  $index = 1;
  foreach ($result as $item) {
    $rows[] = array(
      $index,
      $item->field_nombres_value ? $item->field_nombres_value . ' ' . $item->field_apellidos_value : $item->name,
      $item->total_points,
    );
    $index++;
  }

  $build['page'] = array(
    '#markup' => theme('page_ranking_destapa_el_camerino', array(
      'rows' => $rows,
    )),
  );

  return $build;
}
