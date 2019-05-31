<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]); ?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--ranking">
    <div class="container container--full-vh container--ranking ranking">
        <ul class="row align-items-center justify-content-center">
            <li class="col-12">
                <h1 class="h1 text-initial color-primary">¡Así va esto!</h1>
            </li>
            <li class="col-12 col-lg-6">
                <div class="table__wrapper">
                    <figure class="table__badge">
                        <img src="<?php print $template_path ?>/img/badges/badge-ranking-default.png"
                             alt="">
                    </figure>
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
                                </ul>1
                            </div>
                        </li>
                        <li class="col-12">
                            <div class="table__body" id="myTable">
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
                        <li class="col-12 offset-md-0 col-md-12">
                            <ul class="row no-gutters">
                                <li class="col">
                                    <input type="text" class="input__search" id="text-name" placeholder="Nombre de jugador" onkeyup="Drupal.cervezaAguilaRusiaRanking.search()">
                                </li>
                                <li class="col-auto">
                                    <input type="button" class="button__small" value="Buscar" onclick="Drupal.cervezaAguilaRusiaRanking.search()">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <ul class="col-12"></ul>
            <li class="col-12 col-lg-3">
                <a href="javascript:window.history.back();" class="button button--secondary table__button">Volver</a>
            </li>

            <li class="col-12 col-lg-3">
                <a href="/camino-a-rusia/juego" class="button button--primary table__button">Jugar</a>
            </li>
        </ul>

      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
</section>
