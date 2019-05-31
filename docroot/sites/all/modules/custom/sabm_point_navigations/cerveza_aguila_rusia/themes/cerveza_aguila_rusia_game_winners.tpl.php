<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]); ?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--winners">
    <div class="container container--200vh winners">
        <ul class="row align-items-center">
            <li class="col-12">
                <h2 class="h2 text-initial color-primary winners__title">¡Y los ganadores son...!</h2>
            </li>
            <li class="col-12 offset-lg-3 col-lg-6">
                <ul class="row">
                    <?php foreach ($winners as $item): ?>
                        <li class="col-4">
                            <figure class="results__pic results__pic--winners">
                                <img src="<?php print $item[2]; ?>">
                                <div class="results__tag"><?php print $item[0]; ?></div>
                                <div class="results__label"><?php print $item[1]; ?></div>
                                <div class="results__label results__label--bottom">Puntaje: <?php print $item[3]; ?></div>
                            </figure>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </li>
            <li class="col-12">
                <ul class="row align-items-center">
                    <li class="col-12 col-lg-3 img-desktop">
                        <figure class="figure-contain winners__shirt">
                            <img src="<?php print $template_path ?>/img/icons/icon-shirt.png"
                                 alt="">
                        </figure>
                    </li>
                    <li class="col-12 col-lg-6">
                        <div class="table__wrapper table__wrapper--winners">
                            <ul class="row">
                                <li class="col-12">
                                    <div class="table__head">
                                        <ul class="row no-gutters">
                                            <li class="col-2 col-lg-3">
                                                <p>Posición</p>
                                            </li>
                                            <li class="col">
                                                <p>Jugador</p>
                                            </li>
                                            <li class="col-3">
                                                <p>Puntaje</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="col-12">
                                    <div class="table__body">
                                        <?php foreach ($rows as $item): ?>
                                            <ul class="row no-gutters">
                                                <li class="col-2 col-lg-3">
                                                    <p style="text-align: center"><?php print $item[0] ?></p>
                                                </li>
                                                <li class="col">
                                                    <p><?php print $item[1] ?></p>
                                                </li>
                                                <li class="col-3">
                                                    <p style="text-align: right"><?php print $item[2] ?></p>
                                                </li>
                                            </ul>
                                        <?php endforeach; ?>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="col-12 col-lg-3 img-desktop">
                        <figure class="figure-contain winners__shirt">
                            <img src="<?php print $template_path ?>/img/icons/icon-shirt.png"
                                 alt="">
                        </figure>
                    </li>
                </ul>
            </li>
            <li class="col-12 offset-lg-4 col-lg-4">
                <a href="" class="button button--secondary table__button table__button--winners">Volver</a>
            </li>
        </ul>
    </div>
</section>