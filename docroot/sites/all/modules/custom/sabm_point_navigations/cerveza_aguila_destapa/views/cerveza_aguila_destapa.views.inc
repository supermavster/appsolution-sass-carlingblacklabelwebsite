<?php
/**
 * Implements hook_views_default_views().
 */
function cerveza_aguila_destapa_views_default_views() {
  $views = array();

  $view = new view();
  $view->name = 'lista_videos_promo_destapa';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Lista Videos Promo Destapa';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Todos los capitulos';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'más';
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Aplicar';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Restablecer';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Ordenar por';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '8';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Campo: Contenido: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Campo: Contenido: Título */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '/destapa-el-camerino/ver-capitulo/[nid]';
  $handler->display->display_options['fields']['title']['alter']['link_class'] = 'use-ajax';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Campo: Contenido: Descripción */
  $handler->display->display_options['fields']['field_descripcion']['id'] = 'field_descripcion';
  $handler->display->display_options['fields']['field_descripcion']['table'] = 'field_data_field_descripcion';
  $handler->display->display_options['fields']['field_descripcion']['field'] = 'field_descripcion';
  $handler->display->display_options['fields']['field_descripcion']['label'] = '';
  $handler->display->display_options['fields']['field_descripcion']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_descripcion']['element_label_colon'] = FALSE;
  /* Campo: Contenido: Imagen */
  $handler->display->display_options['fields']['field_imagen']['id'] = 'field_imagen';
  $handler->display->display_options['fields']['field_imagen']['table'] = 'field_data_field_imagen';
  $handler->display->display_options['fields']['field_imagen']['field'] = 'field_imagen';
  $handler->display->display_options['fields']['field_imagen']['label'] = '';
  $handler->display->display_options['fields']['field_imagen']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_imagen']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_imagen']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_imagen']['settings'] = array(
    'image_style' => 'medium',
    'image_link' => '',
  );
  /* Campo: Global: Texto personalizado */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['label'] = '';
  $handler->display->display_options['fields']['nothing']['alter']['text'] = '<div class="slider-card">
<a class=\'use-ajax\' href="/destapaelcamerino/ver-capitulo/[nid]">
<div class=\'cap-title\'>
<span class=\'cap-number\'>[title]</span>
<span class=\'cap-desc\'>[field_descripcion]</span>
</div>
[field_imagen]
</a>
<div class="social-links">
  <a class="fb-link" href="/destapaelcamerino" data-share="/destapaelcamerino/[nid]/share" id="social-link-[nid]" data-nid="[nid]">Facebook</a>
  <a class="tw-link" href="/destapaelcamerino" data-share="/destapaelcamerino/[nid]/share" data-nid="[nid]">Twitter</a>
</div>
</div>';
  $handler->display->display_options['fields']['nothing']['element_type'] = '0';
  $handler->display->display_options['fields']['nothing']['element_label_type'] = '0';
  $handler->display->display_options['fields']['nothing']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nothing']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['nothing']['element_default_classes'] = FALSE;
  /* Criterio de ordenación: Contenido: Fecha estreno (field_fecha_estreno) */
  $handler->display->display_options['sorts']['field_fecha_estreno_value']['id'] = 'field_fecha_estreno_value';
  $handler->display->display_options['sorts']['field_fecha_estreno_value']['table'] = 'field_data_field_fecha_estreno';
  $handler->display->display_options['sorts']['field_fecha_estreno_value']['field'] = 'field_fecha_estreno_value';
  /* Criterios de filtrado: Contenido: Publicado */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Criterios de filtrado: Contenido: Tipo */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'videos_promo_destapa' => 'videos_promo_destapa',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $translatables['lista_videos_promo_destapa'] = array(
    t('Master'),
    t('Todos los capitulos'),
    t('más'),
    t('Aplicar'),
    t('Restablecer'),
    t('Ordenar por'),
    t('Asc'),
    t('Desc'),
    t('<div class="slider-card">
<a class=\'use-ajax\' href="/destapaelcamerino/ver-capitulo/[nid]">
<div class=\'cap-title\'>
<span class=\'cap-number\'>[title]</span>
<span class=\'cap-desc\'>[field_descripcion]</span>
</div>
[field_imagen]
</a>
<div class="social-links">
  <a class="fb-link" href="/destapaelcamerino" data-share="/destapaelcamerino/[nid]/share" id="social-link-[nid]" data-nid="[nid]">Facebook</a>
  <a class="tw-link" href="/destapaelcamerino" data-share="/destapaelcamerino/[nid]/share" data-nid="[nid]">Twitter</a>
</div>
</div>'),
    t('Block'),
  );


  $views[$view->name] = $view;

  return $views;
}