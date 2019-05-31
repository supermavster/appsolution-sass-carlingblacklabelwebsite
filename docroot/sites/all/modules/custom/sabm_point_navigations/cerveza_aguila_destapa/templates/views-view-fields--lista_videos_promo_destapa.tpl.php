<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<?php if ($row->_field_data['nid']['entity']->field_fecha_estreno['und'][0]['value'] <= REQUEST_TIME): ?>
    <div class="slider-card">
        <a class="use-ajax video-active" id="link-video-<?php print $row->nid?>" href="/destapaelcamerino/ver-capitulo/<?php print $row->nid?>?v=<?php print $row->nid?>&t=<?php print md5($row->nid . drupal_get_private_key() . drupal_get_hash_salt())?>">
            <div class="cap-title">
                <span class="cap-number"><?php print $row->node_title?></span>
                <span class="cap-desc"><?php print $row->field_field_descripcion[0]['rendered']['#markup']?></span>
            </div>

            <img src="<?php print file_create_url($row->field_field_imagen[0]['raw']['uri'])?>">
        </a>
        <?php if(user_is_logged_in()):?>
            <div class="social-links">
                <a class="fb-link" data-img="<?php print url(file_create_url($row->field_field_imagen[0]['raw']['uri']), array('absolute' => TRUE))?>" data-title="<?php print $row->node_title?>" data-description="<?php print $row->field_field_descripcion[0]['rendered']['#markup']?>" href="<?php print url('destapaelcamerino', array('absolute' => TRUE))?>?v=<?php print $row->nid?>&t=<?php print md5($row->nid . drupal_get_private_key() . drupal_get_hash_salt())?>" data-nid="<?php print $row->nid?>" data-share="/destapaelcamerino/<?php print $row->nid?>/share" id="social-link-<?php print $row->nid?>">Facebook</a>
                <a class="tw-link" data-title="<?php print $row->node_title?> - <?php print $row->field_field_descripcion[0]['rendered']['#markup']?>" href="<?php print url('destapaelcamerino', array('absolute' => TRUE))?>?v=<?php print $row->nid?>&t=<?php print md5($row->nid . drupal_get_private_key() . drupal_get_hash_salt())?>" data-nid="<?php print $row->nid?>" data-share="/destapaelcamerino/<?php print $row->nid?>/share">Twitter</a>
            </div>
        <?php else:?>
            <div class="social-links">
                <a class="fb-link fb-link-processed use-ajax" href="/destapaelcamerino/modal-login-register">Facebook</a>
                <a class="tw-link tw-link-processed use-ajax" href="/destapaelcamerino/modal-login-register">Twitter</a>
            </div>
        <?php endif;?>
    </div>
<?php else:?>
  <div class="slider-card video-coming-soon">
    <a href="">
      <div class="cap-title">
        <span class="cap-number"><?php print $row->node_title?></span>
        <span class="cap-desc"><?php print $row->field_field_descripcion[0]['rendered']['#markup']?></span>
      </div>

      <div class="video-thumbnail">
        <span>Próximamente</span>
        <span><?php print format_date($row->_field_data['nid']['entity']->field_fecha_estreno['und'][0]['value'], 'custom', 'j F');?></span>
      </div>
    </a>

    <div class="social-links">
      <a class="fb-link fb-link-processed" href="">Facebook</a>
      <a class="tw-link tw-link-processed" href="">Twitter</a>
    </div>
  </div>
<?php endif; ?>