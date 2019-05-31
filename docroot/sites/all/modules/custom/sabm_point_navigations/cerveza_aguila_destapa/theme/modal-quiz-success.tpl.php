<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>


<!-- Inicio Modal Compartir  -->

<div  id="modal-quiz-success" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body text-center">
        <h3>Ganaste 2 puntos por responder bien la trivia</h3>

        <div class="star-points"><span><?php print $total?></span></div>

        <a href="" class="btn btn-secondary" data-dismiss="modal">Volver</a>
      </div>
    </div>
  </div>
</div>


