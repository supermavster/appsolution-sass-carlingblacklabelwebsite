<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>

<div  id="modal-quiz" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <h3 class="text-center">Bueno este capítulo ¿No? <?php print $add_points ? 'Como lo viste completo sumaste <strong>3</strong> puntos' : ''?></h3>

          <div class="container">
            <div class="row align-items-center">
              <div class="col-6">
                <h2><?php print $add_points ? 'Ahora tienes' : 'Tienes'?></h2>
              </div>

              <div class="col-6">
                <div class="star-points"><span><?php print $total?></span></div>
              </div>
            </div>
          </div>
          <?php if ($form): ?>
            <h2 class="text-center">Responde una trivia por 2 puntos adicionales</h2>
            <?php print $form;?>
          <?php endif;?>
      </div>
    </div>
    <img src="<?php print $template_path;?>/img/player-james-modal.png" class="player-img player-trivia d-none d-lg-block"/>
  </div>
</div>
