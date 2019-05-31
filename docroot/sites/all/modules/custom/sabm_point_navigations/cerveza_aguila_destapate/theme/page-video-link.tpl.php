<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>
<section class="destapate-p-link">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 col-lg-12">
        <div class="destapate-p-upload__heading destapate-p-link__heading">Copia y pega el link</div>
      </div>
      <div class="col-12 col-lg-10">
        <p class="destapate-p-select__subheading destapate-p-link__subheading">
          La fórmula secreta, copiar y pegar el link donde demuestras que <br class="d-none d-lg-block">
          te atreviste a vencer tus miedos para hacer lo que más te gusta
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <?php print $form ?>
      </div>
    </div>
  </div>
</section>

