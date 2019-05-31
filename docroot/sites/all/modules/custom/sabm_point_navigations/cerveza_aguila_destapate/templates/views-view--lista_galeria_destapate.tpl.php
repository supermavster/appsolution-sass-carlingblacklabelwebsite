<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>

<div class="<?php print $classes; ?>">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
    </div>
  <?php endif; ?>

  <?php if ($exposed): ?>
    <div class="view-filters">
      <?php print $exposed; ?>
    </div>
  <?php endif; ?>

  <?php if ($attachment_before): ?>
    <div class="attachment attachment-before">
      <?php print $attachment_before; ?>
    </div>
  <?php endif; ?>

  <?php if ($rows): ?>
    <div class="view-content">
      <?php print $rows; ?>
    </div>
  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <?php if ($pager): ?>
    <?php print $pager; ?>
  <?php endif; ?>

  <?php if ($attachment_after): ?>
    <div class="attachment attachment-after">
      <?php print $attachment_after; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <?php print $more; ?>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($feed_icon): ?>
    <div class="feed-icon">
      <?php print $feed_icon; ?>
    </div>
  <?php endif; ?>

</div><?php /* class view */ ?>

<div
        id="js-modal-gallery"
        class="modal fade destapate-c-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <ul
                    id="js-destapate-modal-list"
                    class="destapate-c-modal__list">
              <?php foreach ($view->result as $item): ?>
                <?php
                    $node = $item->_field_data['nid']['entity'];

                    $content_type = $node->field_tipo_contenido['und'][0]['value'];

                    $type = in_array($content_type, array('U', 'VR')) ? $node->field_archivo['und'][0]['filemime'] : NULL;

                    $thumbnail = url($template_path . '/assets/images/destapate-img-poster-desktop.png',  array('absolute' => TRUE));

                    if (isset($node->field_thumbnail['und'][0]['uri'])) {
                      $thumbnail = url(file_create_url($node->field_thumbnail['und'][0]['uri']), array('absolute' => TRUE));
                    }

                    $url = $type ? url(file_create_url($node->field_archivo['und'][0]['uri']), array('absolute' => TRUE)) : $node->field_video_link['und'][0]['value'];
                ?>
                  <li class="destapate-c-modal__item">
                      <div class="destapate-c-modal__video">
                          <div class="embed-responsive">
                            <?php if ($content_type == 'VL'):?>
                                <iframe src="<?php print $url?>?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <?php elseif ($type == 'video/mp4' || $type == 'video/webm' ): ?>
                                <video width="320" height="240" controls preload="auto" playsinline="" webkit-playsinline="" poster="<?php print $thumbnail?>">
                                    <source src="<?php print $url?>" type="<?php print $type?>">
                                    Your browser does not support the video tag.
                                </video>
                            <?php else:?>
                                <img src="<?php print $url?>">
                            <?php endif;?>
                          </div>
                      </div>
                      <div class="destapate-c-modal__body">
                          <div class="row justify-content-center align-items-center align-items-md-start">
                              <div class="col-12 col-lg">
                                  <div class="row justify-content-center align-items-end">
                                      <div class="col-12">
                                          <p class="destapate-c-modal__title"><?php print $item->node_title?></p>
                                      </div>
                                      <div class="col-12 col-lg d-none">
                                          <p class="destapate-c-modal__subtitle"><?php print $item->node_title?></p>
                                      </div>
                                      <div class="col-12">
                                          <p class="destapate-c-modal__description"><?php print $item->_field_data['nid']['entity']->body['und'][0]['value']?></p>
                                      </div>
                                  </div>

                              </div>
                              <div class="col-12 col-lg-auto">
                                  <p class="destapate-c-modal__description text-lg-center -mt-lg-2">Comparte en:</p>
                                    <a class="fb-link destapate-c-modal__link" href="<?php print url('destapate/public/' . $item->_field_data['nid']['entity']->nid, array('absolute' => TRUE))?>" target="_blank">
                                        <img
                                                class="destapate-c-modal__icon_social"
                                                src="<?php print $template_path ?>/assets/images/destapate-icon-social-1.png"
                                                alt="Facebook icon">
                                    </a>
                                    <a class="tw-link destapate-c-modal__link" href="<?php print url('destapate/public/' . $item->_field_data['nid']['entity']->nid, array('absolute' => TRUE))?>" target="_blank" data-title="Destápate">
                                        <img
                                                class="destapate-c-modal__icon_social"
                                                src="<?php print $template_path ?>/assets/images/destapate-icon-social-3.png"
                                                alt="Twitter icon">
                                    </a>
                              </div>
                          </div>
                      </div>
                  </li>
              <?php endforeach; ?>
            </ul>
        </div>
    </div>
</div>
