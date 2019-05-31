<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>
<section class="destapate-p-share">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-lg-8">
        <div class="destapate-p-share__heading">
          Cada vez más cerca de que
          el mundo conozca tu historia.
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        <!-- 16:9 aspect ratio -->
        <div class="destapate-p-record__video mb-lg-0">

          <div class="destapate-p-record__embed">
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
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <p class="destapate-p-select__subheading destapate-p-share__subheading">
        Pronto nos estaremos comunicando por correo electrónico
        para confirmar que tu historia fue publicada en nuestro sitio web.
      </p>
    </div>
    <div class="col-10 col-lg-8">
      <div class="destapate-p-share__heading destapate-p-share__heading--secondary">
        Comparte tu video o foto con tus amigos
        para que te apoyen y también
        se destapen sin miedo.
      </div>
    </div>
  </div>

  <div class="row justify-content-around justify-content-lg-center">
      <div class="col-auto">
          <a class="fb-link" href="<?php print $url_shared?>" target="_blank">
              <img
                      class="destapate-c-modal__icon_social destapate-c-modal__icon_social--big"
                      src="<?php print $template_path ?>/assets/images/destapate-icon-social-1-white.png"
                      alt="Facebook icon">
          </a>
      </div>
      <div class="col-auto">
          <a class="tw-link" href="<?php print $url_shared?>" target="_blank" data-title="Destápate">
              <img
                      class="destapate-c-modal__icon_social destapate-c-modal__icon_social--big"
                      src="<?php print $template_path ?>/assets/images/destapate-icon-social-3-white.png"
                      alt="twitter icon">
          </a>
      </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-12 col-lg-6">
      <a class="destapate-p-share__btn" href="/destapate"><span>Regresar al inicio</span></a>
    </div>
  </div>
  </div>
</section>
