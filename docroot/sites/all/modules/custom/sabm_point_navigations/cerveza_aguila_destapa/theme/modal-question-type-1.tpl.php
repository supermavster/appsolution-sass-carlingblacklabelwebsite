<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>

<!-- Inicio Modal 10 Puntos (Davinson) -->
<div  id="modal-question-type-1" class="modal modal-10-puntos" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <img src="<?php print $template_path;?>/img/star-2-puntos.png" class="star-10-puntos"/>
      </div>

      <div class="modal-body text-center">
        <?php print $form?>
      </div>
    </div>
  </div>
  <img src="<?php print $template_path;?>/img/player-davinson-modal.png" class="player-img player-10-puntos d-none d-lg-block"/>
</div>

