<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>
<section class="destapate-p-select">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        <h1 class="destapate-p-select__heading">Selecciona una opción para compartir tu historia</h1>
      </div>
      <div class="col-12 col-lg-10">
        <p class="destapate-p-select__subheading">
          Desafía tus miedos y atrévete a vivir nuevas aventuras,<br class="d-none d-lg-block">
          sácale sabrosura a tus talentos ¡Arriésgate y cuéntanos tu historia!
        </p>
      </div>
    </div>
    <div class="row justify-content-center justify-content-lg-around">
      <?php foreach (array($link_record, $link_upload, $link_video) as $index => $item): ?>
        <div class="col-7 col-lg-3">
          <a
              href="<?php print $item ?>"
              class="destapate-p-select__link">
            <img
                class="destapate-p-select__img"
                src="<?php print $template_path ?>/assets/images/destapate-img-p-select-<?php print $index + 1 ?>.png">
          </a>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#js-destapate-modal-alert">
  Alert modal
</button>

<!-- Modal -->
<div class="modal fade" style="background-color: #000000;" id="js-destapate-modal-alert" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <img src="<?php print $template_path ?>/assets/images/destapate-img-video-alert.png">
  </div>
</div>

<script>


    jQuery('#js-destapate-modal-alert').modal()
</script>
