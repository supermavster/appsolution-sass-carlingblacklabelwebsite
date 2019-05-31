<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]);?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--profile">
    <div class="container container--full-vh container--ranking profile">
        <ul class="row align-items-center">
            <li class="col-12 offset-sm-1 col-sm-10">
                <ul class="row">
                    <li class="offset-2 col-8 offset-lg-3 col-lg-6">
                        <a href="/camino-a-rusia/juego">
                            <figure class="profile__header">
                                <img src="<?php print $template_path ?>/img/game-landing-heading.png" alt="">
                            </figure>
                        </a>
                    </li>
                    <li class="col-12">
                        <h3 class="img-mobile h3 color-primary profile__title">¡Bienvenido!</h3>
                        <h1 class="img-desktop h1 color-primary profile__title">¡Bienvenido!</h1>
                    </li>
                    <li class="col-12">
                        <div class="profile__container">
                            <ul class="row align-items-lg-start no-gutters">
                                <li class="col-auto col-sm-3">
                                    <a href="/user/<?php print $build['#account']->uid; ?>/edit">
                                        <figure class="results__pic">
                                            <img src="<?php print $path_image?>">
                                        </figure>
                                    </a>
                                </li>
                                <li class="col col-sm-6">
                                    <div class="results__stats">
                                        <ul class="row justify-content-end">
                                            <li class="col-12 col-lg-11">
                                                <p class="results__name results__text color-secondary truncate"><?php print ($build['field_nombres']['#items'][0]['value']); ?></p>
                                            </li>
                                            <li class="col-12 col-lg-11">
                                                <ul class="row no-gutters align-items-end">
                                                    <li class="col-auto">
                                                        <p class="results__score results__text color-primary" style="display: inline-block"><?php print $total_points?></p>
                                                    </li>
                                                    <li class="col">
                                                        <p class="results__placeholder results__text color-secondary" style="text-transform: initial">Puntos</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="col-12 col-lg-11">
                                                <p class="results__mail results__text color-secondary truncate"><?php print $build['#account']->mail; ?></p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="col-12 col-sm-3">
                                    <a href="/camino-a-rusia/juego/ranking">
                                        <figure class="results__icons">
                                            <img src="<?php print $template_path ?>/img/badges/badge-ranking.png"
                                                 alt="">
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="col-12 offset-lg-2 col-lg-8">
                        <div class="">
                            <ul class="row justify-content-center">
                                <li class="col-12 col-lg-6">
                                    <div class="form-actions">
                                        <a href="/user/<?php print $build['#account']->uid; ?>/edit" class="button button--secondary">Editar</a>
                                    </div>
                                </li>
                                <li class="col-12 col-lg-6">
                                    <div class="form-actions">
                                        <a href="/user/logout" class="button button--secondary">Cerrar sesión</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>