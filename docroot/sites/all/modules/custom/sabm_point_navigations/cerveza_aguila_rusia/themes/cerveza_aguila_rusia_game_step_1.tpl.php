<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]);?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--questions questions">
    <div class="container container--full-vh">
        <ul class="row align-items-center">
            <li class="col-12 offset-lg-2 col-lg-8">
                <ul class="row">
                    <li class="col-12">
                        <h2 class="h2">¡Antes de empezar <br>queremos conocerte más!</h2>
                    </li>
                    <li class="col-12 offset-lg-2 col-lg-8">
                        <?php print render($form); ?>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>