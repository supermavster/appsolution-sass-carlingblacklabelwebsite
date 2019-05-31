<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>
<section class="destapate-register">
  <div class="container">

    <div class="row justify-content-center">
      <div class="col-12">
        <h4 class="destapate-register__heading">Regístrate y destápate</h4>
      </div>
      <div class="col">
        <h4 class="d-none d-lg-block destapate-register__subheading destapate-register__subheading--como">¿cómo
          participar?</h4>
      </div>
    </div><!--End. Heading.-->
    <div class="destapate-register__wrap">

      <div class="destapate-overview destapate-register__overview">
        <div class="row justify-content-center justify-content-lg-between">
          <div class="col-11">
            <p class="d-lg-none destapate-register__subheading destapate-register__subheading--como">¿cómo
              participar?</p>
          </div>
          <?php foreach (array(
                           'Regístrate en<br>nuestra página web',
                           'Sube un video o foto<br>contándonos cómo<br>te destapas Sin Miedo',
                           'Participa por clases<br>con nuestros mentores,<br>cursos o talleres') as $index => $item): ?>
            <div class="col-11 col-lg">
              <div class="destapate-overview__item destapate-overview__item--register">
                <div class="row no-gutters justify-content-center align-items-center align-items-lg-end">
                  <div class="col-auto">
                    <div class="destapate-overview__index">
                      <?php print $index + 1 ?>.
                    </div>
                  </div>
                  <div class="col-auto">
                    <img
                        src="<?php print $template_path ?>/assets/images/destapate-icon-overview-<?php print $index + 1 ?>.svg"
                        class="destapate-overview__icon">
                  </div>
                  <div class="col col-lg-10">
                    <p class="destapate-overview__text">
                      <?php print $item ?>
                    </p>
                  </div>
                </div>
              </div>
            </div><!--End. Overview Item.-->
          <?php endforeach; ?>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h4 class="destapate-register__subheading destapate-register__subheading--ingresa">INGRESA TUS DATOS</h4>
          <p class="destapate-register__body">Completa estos datos antes de subir tu video o foto</p>
          <?php print $form ?>
        </div>
      </div><!--End. Form-->
    </div>
  </div>
</section>