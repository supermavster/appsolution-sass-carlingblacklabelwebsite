<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]);?>

<!-- Hero -->

<a id="bienvenido"></a>

<div class="section-hero">
    <a href="/user/register">
        <img class="d-none d-md-block" src="<?php print $template_path?>/img/Banner_Destapa_Desktop_v2.jpg">
        <img class="d-md-none" src="<?php print $template_path?>/img/Banner_Destapa_Mobile_v2.2.jpg">
    </a>
    
  <div class="content-wrapper">

    <div class="container">

      <!-- Main menu -->

      <div class="main-menu">
        <ul>
          <li><a href="#bienvenido" class="active">Bienvenido</a></li>
          <li><a href="#proximo">Próximo Capítulo</a></li>
          <li><a href="#capitulos">Todos los Capítulos</a></li>
          <li><a href="#ganar">Cómo Ganar</a></li>
          <li><a href="#premios">Premios</a></li>
          <li><a href="#terminos">Términos y Condiciones</a></li>
        </ul>
      </div>

      <!-- Title and Top Bar -->

      <!-- Title and Top Bar -->
      <?php print theme('top_bar')?>

      <?php print theme('user_menu')?>
    </div>

  </div>
</div>

<!-- Contador -->

<div id="proximo" class="section-contador">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Próximo capítulo</h2>
        <h3><?php print $description?></h3>
      </div>

      <div class="col-md-6">
        <ul id="countdown-oferta" class="auction__countdown countdown d-flex">

          <li class="days">
            <div class="number">0</div>
            <label>Días</label>
          </li>

          <li class="hours">
            <div class="number">0</div>
            <label>Horas</label>
          </li>

          <li class="minutes">
            <div class="number">0</div>
            <label>Min</label>
          </li>

          <li class="seconds">
            <div class="number">0</div>
            <label>Seg</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<!-- Capítulos -->

<a id="capitulos"></a>

<div class="section-capitulos">

  <div class="content-wrapper d-md-flex justify-content-center">
    <img src="<?php print $template_path;?>/img/player-sanchez-md.png" class="player-img d-none d-md-block"/>
    <img src="<?php print $template_path;?>/img/player-sanchez-sm.png" class="player-img d-md-none"/>

    <div class="container">


      <!-- Content -->

      <div class="capitulos-wrapper">
        <div class="row">
          <div class="col-12 text-center">
            <h4>Todos los capítulos</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-10 offset-1 text-center">
            <?php print views_embed_view('lista_videos_promo_destapa', 'block');?>
          </div>


        </div>
      </div>

    </div>

  </div>
</div>


<!-- Cómo ganar -->

<a id="ganar"></a>

<div class="section-ganar">

  <div class="content-wrapper d-flex justify-content-center">
    <img src="<?php print $template_path;?>/img/player-james-md.png" class="player-img d-none d-sm-none d-md-block"/>
    <img src="<?php print $template_path;?>/img/player-james-sm.png" class="player-img d-md-none"/>

    <div class="container">

      <!-- Content -->

      <div class="ganar-wrapper">
        <div class="row">
          <div class="col-12 text-center">
            <h4>¿Cómo ganar?</h4>
            <h5><span>Hay muchas formas de de sumar puntos para ganar.</span><br>Aquí te las contamos todas:</h5>
          </div>
        </div>

        <div class="row d-none d-md-block">
          <div class="col-8 offset-2 text-center d-none d-md-block">
            <div class="row">
              <div class="col-4  text-center">
                <figure><img src="<?php print $template_path;?>/img/como-ganar-1.1.png"/></figure>
                <span>Compartir los capítulos</span>
              </div>

                <div class="col-4  text-center">
                    <figure><img src="<?php print $template_path;?>/img/como-ganar-4.1.png"/></figure>
                    <span>Contesta las trivias</span>
                </div>

                <div class="col-4  text-center">
                    <img src="<?php print $template_path;?>/img/como-ganar-5.1.png"/></figure>
                    <span>Mira los capítulos completos</span>
                </div>
            </div>
          </div>
        </div>


        <!-- Slider -->

        <div id="slider-premios" class="row d-md-none">
          <div class="col-12">
            <ul>
              <li>
                <figure><img src="<?php print $template_path;?>/img/como-ganar-1.1.png"/></figure>
                <span>Compartir los capítulos</span>
              </li>

              <li>
                <figure><img src="<?php print $template_path;?>/img/como-ganar-4.1.png"/></figure>
                <span>Contesta las trivias</span>
              </li>
              <li>
                <img src="<?php print $template_path;?>/img/como-ganar-5.1.png"/></figure>
                <span>Mira los capítulos completos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>


<!-- Premios -->

<a id="premios"></a>

<div class="section-premios d-flex justify-content-center">

  <div class="content-wrapper d-flex justify-content-center">
    <img src="<?php print $template_path;?>/img/player-davinson-md.png" class="player-img d-none d-sm-none d-md-block"/>
    <img src="<?php print $template_path;?>/img/player-davinson-sm.png" class="player-img d-md-none"/>

    <div class="container">

      <!-- Content -->

      <div class="premios-wrapper">

        <div class="row">
        <div class="col-12 text-center">
          <h4>¿Qué te puedes ganar?</h4>
        </div>
      </div>

        <div class="row justify-content-center">
          <div class="col-12 col-md-auto text-center">
            <figure><img src="<?php print $template_path;?>/img/premio-1.png"/></figure>
            <h6>Premio 1</h6>
            <p>Ranking 1 al 30</p>
          </div>

          <div class="d-none d-lg-block col-lg-1"></div>

          <div class="col-12 col-md-auto text-center">
            <figure><img src="<?php print $template_path;?>/img/premio-2.png"/></figure>
            <h6>Premio 2</h6>
            <p>Ranking 31 al 50</p>
          </div>

          <div class="d-none d-lg-block col-lg-1"></div>

          <div class="col-12 col-md-auto ext-center">
            <figure><img src="<?php print $template_path;?>/img/premio-3.png"/></figure>
            <h6>Premio 3</h6>
            <p>Ranking 51 al 150</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- Términos -->

<a id="terminos"></a>

<div class="section-terminos">

  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <a class="btn btn-secondary" href="<?php print $template_path?>/resources/TERMINOS-Y-CONDICIONES-DESTAPA-EL-CAMERINO-V7.pdf?t=b" target="_blank">Términos y condiciones</a>
      </div>
    </div>
  </div>

</div>
