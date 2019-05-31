<section id="slide-1" class="landing landing__wrapper landing__wrapper--header landing__players">
    <div class="container-fluid container--100vh">
        <ul class="row">
            <li class="col-12 align-self-start">
                <div class="container">
                    <figure class="landing__header">
                        <img src="<?php print $template_path ?>/img/text/text-landing-header.png" alt="">
                    </figure>
                </div>
            </li>
            <li class="col-12 align-self-end" style="z-index: 1">
                <ul class="row">
                    <li class="col-12 col-md-4">
                        <figure class="landing__left">
                            <img class="img-mobile"
                                 src="<?php print $template_path ?>/img/text/text-landing-left-mobile.png" alt="">
                            <img class="img-desktop"
                                 src="<?php print $template_path ?>/img/text/text-landing-left-desktop.png" alt="">
                        </figure>
                    </li>
                    <li class="col-12 offset-md-3 col-md-6">
                        <div class="container">
                            <figure class="landing__bottom">
                                <img class="img-mobile"
                                     src="<?php print $template_path ?>/img/text/text-landing-bottom-mobile.png" alt="">
                                <img class="img-desktop"
                                     src="<?php print $template_path ?>/img/text/text-landing-bottom-desktop.png"
                                     alt="">
                            </figure>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <figure class="landing__badge landing__badge--left">
        <img src="<?php print $template_path ?>/img/badges/badges-coljuegos.png" alt="">
    </figure>

    <figure class="landing__badge landing__badge--right">
        <img src="<?php print $template_path ?>/img/badges/badge-worldCup.svg" alt="">
    </figure>
    <div class="landingNavigation">
        <a href="#slide-2" class="landingNavigation__anchor"></a>
    </div>
</section>
<section id="slide-2" class="landing landing__wrapper landing__wrapper--map">
    <div class="container-fluid container--200vh">
        <ul class="row">
            <li class="col-12 offset-md-3 col-md-6">
                <figure class="landing__header landing__header--map">
                    <img src="<?php print $template_path ?>/img/text/text-landing-center.png" alt="">
                </figure>
            </li>
            <li class="col-12 offset-md-1 col-md-10 no-padding">
                <figure class="landing__map">
                    <img class="img-mobile" src="<?php print $template_path ?>/img/backgrounds/bg-map-mobile.png"
                         alt="">
                    <img class="img-desktop" src="<?php print $template_path ?>/img/backgrounds/bg-map-desktop.png"
                         alt="">
                    <a href="<?php print url(variable_get('cerveza_aguila_rusia_landing_terms_url')) ?>" class="btn btn--secondary landing__btn">Ver términos y condiciones</a>
                </figure>
            </li>
            <li class="col-12 offset-md-3 col-md-7">
                <p class="landing__terms">Reúne 6 etiquetas y podrás participar por uno de los 50 viajes a la Copa Mundial de la FIFA TM
                    depositándolas en un sobre con tus datos personales en el buzón identificado con la promoción
                    pubicado en los puntos de canje autorizados Servientrega y oficinas Bavaria a nivel nacional.
                    Vigencia de la actividad; del 15 de marzo al 8 de mayo de 2018. Para conocer las fechas de los
                    sorteos y mayor información de las promociones ingresa a <a href="https://www.cervezaaguila.com/" target="_blank" class="color-secondary">www.cervezaaguila.com</a>.</p>
            </li>
        </ul>
    </div>
    <figure class="landing__badge landing__badge--left">
        <img src="<?php print $template_path ?>/img/badges/badges-coljuegos.png" alt="">
    </figure>

    <figure class="landing__badge landing__badge--right">
        <img src="<?php print $template_path ?>/img/badges/badge-worldCup.svg" alt="">
    </figure>
    <div class="landingNavigation">
        <a href="#slide-3" class="landingNavigation__anchor"></a>
    </div>
</section>
<section id="slide-3" class="landing landing__wrapper landing__wrapper--game">
    <div class="container container--100vh">
        <ul class="row">
            <li class="col-12 offset-md-2 col-md-8">
                <figure class="landing__header landing__header--game">
                    <img class="img-mobile" src="<?php print $template_path ?>/img/game-landing-top-mobile.png" alt="">
                    <img class="img-desktop" src="<?php print $template_path ?>/img/game-landing-top-desktop.png"
                         alt="">
                </figure>
            </li>
            <li class="col-12 offset-md-2 col-md-8">
                <div class="landingGame offset-top">
                    <figure class="landingGame__title">
                        <img src="<?php print $template_path ?>/img/game-landing-heading.png" alt="">
                    </figure>
                    <figure class="landingGame__badge landingGame__badge--left">
                        <img src="<?php print $template_path ?>/img/badges/badge-worldCup.svg" alt="">
                    </figure>
                    <a href="/camino-a-rusia/juego/ranking">
                        <figure class="landingGame__badge landingGame__badge--right">
                            <img src="<?php print $template_path ?>/img/badges/badge-ranking.png" alt="">
                        </figure>
                    </a>
                </div>
            </li>
            <li class="col-12 offset-md-4 col-md-4 offset-top" style="text-align: center">
                <a href="/camino-a-rusia/juego" class="button">Jugar</a>
            </li>
        </ul>
    </div>
    <figure class="landing__badge landing__badge--absolute landing__badge--right">
        <img src="<?php print $template_path ?>/img/badges/badge-worldCup.svg" alt="">
    </figure>
</section>

<script>
    jQuery(document).ready(function () {
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    });
</script>