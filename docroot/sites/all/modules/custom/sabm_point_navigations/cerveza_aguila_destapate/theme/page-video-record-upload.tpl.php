<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>

<section class="destapate-p-record destapate-p-record--upload">
  <div class="container">

    <div class="row justify-content-center">
      <div class="col-10 col-lg-12">
        <div class="destapate-p-upload__heading destapate-p-record__heading destapate-p-record__heading--upload">Ya está
          listo tu video
        </div>
      </div>
      <div class="col-12 col-lg-10">
        <p class="destapate-p-record__subheading destapate-p-record__subheading--upload">
          Asegúrate de que ningún detalle se te vaya a escapar,<br class="d-none d-lg-block">
          revísalo bien y comienza una historia sin miedos.
        </p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        <!-- 16:9 aspect ratio -->
        <div class="destapate-p-record__video">
          <div class="embed-responsive embed-responsive-4by3">
            <video
                class="embed-responsive-item"
                controls preload="auto" playsinline="" webkit-playsinline="" poster="<?php print $poster?>">
              <source src="<?php print $url ?>" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="destapate-p-record__frame">
            <div class="destapate-p-record__frame--inner d-none"></div>
            <div class="destapate-p-record__controls custom-controls-bar" style="display: none">
              <div class="row h-100 align-items-center justify-content-between">
                <div class="col-auto">
                  <div class="btn-grabando">Grabando</div>
                </div>
                <div class="col-auto">
                  <div class="video-progress">

                    <div class="progress d-none">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                           aria-valuemax="100"></div>
                    </div>
                    <div class="time-lines d-none"></div>

                    <span class="time-begin d-none">00:00</span>
                    <span class="time-end d-none">00:40</span>
                    <div class="time-current">
                      <span class="pointer-current"></span>
                      <span class="time">00:00</span>
                    </div>

                  </div>
                </div>
              </div>
              <div class="btn-reintentar d-none">Reintentar</div>

            </div>


          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-12">
        <?php print $form ?>
      </div>
    </div>
  </div>
</section>

<div class="modal fade" id="modal-uploading" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content modal-loading">
      <div class="modal-body text-center">
        <h3>YA NO TENEMOS MIEDO ESTAMOS GUARDANDO TU VIDEO</h3>
        <div id="percentage-uploading" class="video-preloader"><span>50%</span></div>
      </div>
    </div>
  </div>
</div>

<script>

  jQuery('#cerveza-aguila-destapate-form-video-record > div > a').text('').append('<span>GRABAR DE NUEVO</span>')
  jQuery('#cerveza-aguila-destapate-form-video-record > div > a').
    after('<a class="destapate-upload__submit">Guardar y compartir<span></span></a>')
  jQuery('.destapate-upload__submit').click(function (e) {
    e.preventDefault();
    jQuery('#cerveza-aguila-destapate-form-video-record').submit();
  })
</script>