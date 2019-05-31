<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>

<section class="destapate-p-referee">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 mb-5">
        <h4 class="destapate-p-referee__heading">conoce los jurados</h4>
      </div>
      <div class="col-12 col-lg-10 d-none">
        <p class="destapate-p-select__subheading destapate-p-referee__subheading">Tendremos un jurado especializado que
          estará encargado<br class="d-none d-lg-block"> de escoger las mejores historias que se hayan destapado Sin
          Miedo.<br>
          Conoce nuestros jurados.
        </p>
      </div>
    </div><!--End. Heading.-->
  </div>

  <div class="container-fluid">
    <div class="destapate-p-referee__list">
      <div class="row justify-content-center justify-content-lg-around">

        <div class="col-12 col-lg">
          <div class="destapate-p-referee__item">
            <div class="destapate-p-referee__media embed-responsive embed-responsive-1by1">
              <img
                  src="<?php print $template_path ?>/assets/images/destapate-img-referee-3.png"
                  class="embed-responsive-item"
              >
            </div>
            <p class="destapate-p-referee__summary">
              Pablo Vélez - @pablovelezv<br>
              Emprendedor colombiano. Socio propietario del restaurante Home Burgers.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg">
          <div class="destapate-p-referee__item">
            <div class="destapate-p-referee__media embed-responsive embed-responsive-1by1">
              <img
                  src="<?php print $template_path ?>/assets/images/destapate-img-referee-2.png"
                  class="embed-responsive-item"
              >
            </div>
            <p class="destapate-p-referee__summary">
              Fernando jaramillo<br>
              Vicepresidente legal de asuntos corporativos COPEC BAVARIA.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg">
          <div class="destapate-p-referee__item">
            <div class="destapate-p-referee__media embed-responsive embed-responsive-1by1">
              <img
                  src="<?php print $template_path ?>/assets/images/destapate-img-referee-1.png"
                  class="embed-responsive-item"
              >
            </div>
            <p class="destapate-p-referee__summary">
              Juancho Muñoz<br>
              Productor y manager musical del grupo Ventino.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-12 col-lg-6">
        <a href="/destapate" class="destapate-p-referee__btn w-100"><span>Regresar al inicio</span></a>
      </div>
    </div>
  </div>

</section>