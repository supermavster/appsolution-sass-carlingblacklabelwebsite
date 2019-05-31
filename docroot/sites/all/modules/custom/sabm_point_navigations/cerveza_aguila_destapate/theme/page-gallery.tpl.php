<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>
<section class="destapate-p-gallery">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="destapate-p-gallery__heading">Galería de historias</div>
      </div>
      <div class="col-12">
        <p class="destapate-p-select__subheading destapate-p-gallery__subheading mb-lg-0">
          <?php print $items[$tid]['body'] ?>
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-auto">
        <ul class="destapate-c-tabs__list">
          <?php foreach ($items as $item): ?>
            <li class="destapate-c-tabs__item <?php print $item['tid'] == $tid ? 'active-tab' : ''?>">
              <a
                  class="destapate-c-tabs__link"
                  href="<?php print $item['url'] ?>">
                <span><?php print $item['title'] ?></span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="destapate-c-slider">
          <?php print views_embed_view('lista_galeria_destapate', 'block', $tid); ?>
        </div>
      </div>
    </div>

    <div class="row justify-content-lg-center">
      <div class="col-12 col-lg-auto">
        <a href="/destapate" class="destapate-p-gallery__btn w-100"><span>Regresar al inicio</span></a>
      </div>
    </div>
  </div>
</section>

