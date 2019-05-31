<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]);?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--instructions instructions">
    <div class="container-fluid container--full-vh container--responsive-height">
        <ul class="row align-items-center">
            <li class="col-12 offset-md-1 col-md-10 offset-xl-2 col-xl-8">
                <ul class="row">
                    <li class="col-12">
                        <figure class="instructions__header">
                            <img class="img-mobile"
                                 src="<?php print $template_path ?>/img/text/text-game-instructions-heading-mobile.png" alt="">
                            <img class="img-desktop"
                                 src="<?php print $template_path ?>/img/text/text-game-instructions-heading-desktop.png"
                                 alt="">
                        </figure>
                    </li>
                    <li class="col-12">
                        <div class="instructions__container">
                            <ul class="row">
                                <li class="col-12 col-lg-4">
                                    <h4 class="instructions__title">Cómo jugar?</h4>
                                    <p class="instructions__paragraph">¡Juguemos Cruzando Rusia! Y así vamos calentando pa´ la fiesta que se nos viene. Aquí tienes que avanzar superando todos los obstáculos y acumulando el mayor puntaje que puedas. Si el próximo 15 de mayo* estás entre los 100 primeros puntajes serás el ganador de una camiseta de la Sele.</p>
                                    <p class="instructions__paragraph"><b>¡Empieza a cruzar Rusia y a superar tu puntaje!</b></p>
                                </li>
                                <li class="col-12 col-lg-4">
                                    <figure class="instructions__screen">
                                        <img class="img-mobile" src="<?php print $template_path ?>/img/screen-mobile.jpg" alt="">
                                        <img class="img-desktop" src="<?php print $template_path ?>/img/screen-desktop.jpg" alt="">
                                    </figure>
                                    <a href="/camino-a-rusia/juego/table" class="button img-desktop">Jugar</a>
                                </li>
                                <li class="col-12 col-lg-4">
                                    <h4 class="instructions__title">Controles</h4>
                                    <p class="instructions__paragraph"><b>Dirección del personaje</b></p>
                                    <figure class="instructions__keys">
                                        <img style="margin-top: 1rem" src="<?php print $template_path ?>/img/keyboard-directions.png"
                                             alt="">
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="col-12">
                        <a href="/camino-a-rusia/juego/table" class="button img-mobile">Jugar</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>