<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>


<div  id="modal-question-success" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body text-center">
                <h3>Sumaste 2 puntos por contestar</h3>
                <h3>Ahora tienes</h3>
                <div class="star-points"><span><?php print $total?></span></div>

                <a href="" class="btn btn-secondary" data-dismiss="modal">Volver</a>
            </div>
        </div>
    </div>
</div>


