<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]);?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--results">
    <div class="container container--full-vh">
        <ul class="row align-items-center">
            <li class="col-12 offset-lg-2 col-lg-8">
                <ul class="row">
                    <li class="col-12">
                        <h1 class="h1 color-primary">¡Muy bien!</h1>
                    </li>
                    <li class="col-12">
                        <ul class="row align-items-center align-items-lg-start no-gutters">
                            <li class="col-3 col-lg-4">
                                <a href="/user">
                                    <figure class="results__pic results__pic--small">
                                        <img src="<?php print $path_image?>" alt="">
                                    </figure>
                                </a>
                            </li>
                            <li class="col">
                                <div class="results__score">
                                    <h3 class="img-mobile h3 color-secondary results__done">Lograste</h3>
                                    <h2 class="img-desktop h2 color-secondary results__done">Lograste</h2>
                                    <p class="h1 color-primary results__points"><?php print $points ?></p>
                                    <h2 class="img-mobile h2 color-secondary results__done" style="text-transform: initial">Puntos</h2>
                                    <h1 class="img-desktop h1 color-secondary results__done" style="text-transform: initial">Puntos</h1>
                                </div>
                            </li>
                            <li class="col-3 col-lg-4">
                                <a href="/camino-a-rusia/juego/ranking">
                                    <figure class="results__icons">
                                        <img src="<?php print $template_path ?>/img/badges/badge-ranking.png"
                                             alt="">
                                    </figure>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="col-12">
                        <h2 class="h2 img-desktop">Aún puedes superarlos</h2>
                        <h3 class="h3 img-mobile" style="margin-top: .5rem;">Aún puedes superarlos</h3>
                    </li>
                    <li class="col-12 offset-lg-2 col-lg-8">
                        <ul class="row justify-content-center">
                            <li class="col-12 col-lg-6">
                                <a href="/camino-a-rusia/juego" class="button button--secondary">Jugar de nuevo</a>
                            </li>
                            <li class="col-12 col-lg-6">
                                <a href="/camino-a-rusia" class="button button--secondary results__button">Salir</a>
                            </li>
                        </ul>
                    </li>
                    <li class="col-12">
                        <ul class="row align-items-center justify-content-center">
                            <li class="col-auto">
                                <h6 class="h6 color-white" style="margin: 0">Compartir:</h6>
                            </li>
                            <li class="col-auto">
                                <figure class="results__icon">
                                <a class="facebook-action" href="https://www.facebook.com/sharer/sharer.php?u=<?php print $path_share?>" target="_blank">
                                    <img src="<?php print $template_path ?>/img/icons/icon-facebook.svg"
                                         alt="">
                                </a>
                                </figure>
                            </li>
                            <li class="col-auto">
                                <figure class="results__icon">
                                <a class="twitter-action" href="https://twitter.com/intent/tweet?text=Cervez Aguila&url=<?php print $path_share?>" target="_blank">
                                    <img src="<?php print $template_path ?>/img/icons/icon-twitter.svg"
                                         alt="">
                                </a>
                                </figure>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>

