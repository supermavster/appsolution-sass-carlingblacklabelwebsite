<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>

<section class="destapate-video">
  <div class="destapate-video__embed">
    <video poster="<?php print $template_path ?>/assets/images/destapate-video_poster.jpg" class="embed-responsive-item d-none d-lg-block" muted autoplay controls preload="auto" playsinline="" webkit-playsinline="">
      <source src="<?php print $template_path ?>/assets/videos/VersionBanner2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video poster="<?php print $template_path ?>/assets/images/destapate-video_poster.jpg" class="embed-responsive-item d-lg-none" muted autoplay controls preload="auto" playsinline="" webkit-playsinline="">
      <source src="<?php print $template_path ?>/assets/videos/VersionBanner_mobile.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</section>

<section class="destapate-hero">

  <a href="/destapate/registro" id="js-btn-upload" class="destapate-hero__btn">
    <img src="<?php print $template_path ?>/assets/images/destapate-img-btn-upload.png" alt="">
  </a>
  <div class="container" style="position:relative;">


    <div class="row justify-content-center">

      <div class="col-12 col-lg-11">
        <figure class="destapate-hero__heading">
          <img src="<?php print $template_path ?>/assets/images/destapate-text-heading-mask.png">
        </figure>
      </div>

      <div class="col-12 col-lg-11">
        <p class="destapate-hero__body text-center">Aguila premia a los colombianos que se atreven a destapar
          Sin Miedo
          su mejor versión. Aquí podrás compartir tu historia y participar por cursos
          o mentorías en la categoría que elijas.
        </p>
      </div>
      <div class="destapate-overview destapate-overview--home">
        <figure class="destapate-overview__bg">
          <img class="" src="<?php print $template_path ?>/assets/images/destapate-bg-hero-mask.png">
        </figure>
        <div class="row justify-content-center justify-content-lg-between">
          <?php foreach (array(
                           'Regístrate en<br>nuestra página web',
                           'Sube un video o foto<br>contándonos cómo<br>te destapas Sin Miedo',
                           'Participa por clases<br>con nuestros mentores,<br>cursos o talleres') as $index => $item): ?>
            <div class="col-10 col-lg-4">
              <div class="destapate-overview__item">
                <div class="row no-gutters justify-content-center align-items-end">
                  <div class="col-auto">
                    <div class="destapate-overview__index">
                      <?php print $index + 1 ?>.
                    </div>
                  </div>
                  <div class="col-auto">
                    <img
                        src="<?php print $template_path ?>/assets/images/destapate-icon-overview-<?php print $index + 1 ?>.svg"
                        class="destapate-overview__icon">
                  </div>
                  <div class="col col-lg-10">
                    <p class="destapate-overview__text">
                      <?php print $item ?>
                    </p>
                  </div>
                </div>
              </div>
            </div><!--End. Overview Item.-->
          <?php endforeach; ?>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="destapate-actions d-none">
  <div class="-container-fluid">
    <div class="row no-gutters">
      <div class="col-12 col-lg-6">
        <div class="destapate-actions__item">
          <p class="destapate-actions__text destapate-actions__text--participa">Participa de una</p>
          <a href="/destapate/registro"
             class="destapate-btn--tertiary destapate-actions__button destapate-actions__button--sube">Sube tu
            video o foto</a>
          <p class="destapate-actions__text destapate-actions__text--destapate">Destápate y gana premios</p>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="destapate-actions__item destapate-actions__item--last">
          <p class="destapate-actions__text destapate-actions__text--conoce">Conoce más historias
            de colombianos que
            se destaparon sin miedo</p>
          <a href="/destapate/galeria"
             class="destapate-btn--warning destapate-actions__button destapate-actions__button--mira">MIRA LAS
            HISTORIAS</a>
        </div>
      </div>
    </div>
  </div>
</section>


<div class="destapate-home__background">
  <section class="destapate-home__container destapate-c-awards">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-4">
          <figure class="destapate-home__heading">
            <img
                class="d-lg-none"
                src="<?php print $template_path ?>/assets/images/destapate-text-awards.png">
            <img
                class="d-none d-lg-block"
                src="<?php print $template_path ?>/assets/images/destapate-text-awards-desktop.png">
          </figure>
        </div>
        <div class="col-12 col-lg-11">
          <p class="destapate-home__body destapate-home__body--mask">
            Estos son los premios que puedes recibir si tu historia es elegida.
            Son pensados para que sigas mostrando tu mejor versión.</p>
        </div>
      </div>
      <div class="row no-gutters justify-content-center mt-lg-4">

        <div class="col-12 col-lg">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-8">
              <figure class="mt-4">
                <img src="<?php print $template_path ?>/assets/images/destapate-text-awards-diamond.png">
              </figure>
            </div>
            <div class="col-9 col-lg-10">
              <p class="destapate-home__body text-uppercase">(10 ganadores)</p>
              <ul class="destapate-home__list">
                <li>
                  <p class="destapate-home__body"><span>Clase</span> con un mentor</p>
                </li>
                <li>
                  <p class="destapate-home__body"><span>Cursos</span> o diplomados en<br
                        class="d-none d-lg-block"> la
                    categoría que elijas</p>
                </li>
                <li>
                  <p class="destapate-home__body"><span>mensaje</span> de nuestro jurado<br
                        class="d-lg-none"> para
                    mejorar tu proyecto</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="col-12 col-lg-auto">
          <div class="destapate-c-awards__divider"></div>
        </div>

        <div class="col-12 col-lg">
          <div class="row justify-content-center">
            <div class="col-8 col-lg-6">
              <figure class="mt-lg-4">
                <img src="<?php print $template_path ?>/assets/images/destapate-text-awards-gold.png">
              </figure>
            </div>
            <div class="col-12">
              <p class="destapate-home__body text-uppercase">(10 ganadores)</p>
              <ul class="destapate-home__list">
                <li>
                  <p class="destapate-home__body"><span>Cursos</span> cortos, seminarios<br> o
                    talleres</p>
                </li>
                <li class="w-100"></li>
                <li>
                  <p class="destapate-home__body"><span>visibilidad</span><br> en nuestras redes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>

  <section class="destapate-home__container destapate-c-mentors">
    <div class="container">

      <div class="row justify-content-center">
        <div class="col-8 col-lg-5">
          <figure class="destapate-home__heading">
            <img src="<?php print $template_path ?>/assets/images/destapate-text-mentors.png">
          </figure>
        </div>
        <div class="col-11 col-lg-10">
          <p class="destapate-home__body destapate-home__body--mask">
            Seleccionamos expertos en cada una
            de las categorías, que con su experiencia
            te mostrarán el camino para que te quites
            el miedo y sigas con tu proyecto.</p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-10 col-lg-11 destapate-c-slider">

          <div id="js-mentors-slider" class="destapate-c-mentors__slider destapate-c-mentors__list">
            <?php foreach ($node_mentors as $node): ?>
              <div class="destapate-c-mentors__item">
                <div class="destapate-c-mentors__embed">
                  <figure class="destapate-c-mentors__embed-item">
                    <img src="<?php print file_create_url($node->field_thumbnail['und'][0]['uri'])?>">
                  </figure>
                  <p class="destapate-c-mentors__text"><?php print $node->field_descripcion_presentacion['und'][0]['value']?></p>
                </div>
                <p class="destapate-c-mentors__description"><?php print $node->body['und'][0]['value']?></p>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-11 col-lg-10 d-none">
          <p class="destapate-home__body destapate-home__body--medium destapate-home__body--mask">
            Conoce a los jurados<br>de cada categoría aquí
          </p>
        </div>
        <div class="col-12 col-lg-7">
          <a href="/destapate/jurados"
             class="destapate-home__btn destapate-home__btn--referees destapate-c-mentors__btn"><span>conoce los jurados</span></a>
        </div>
      </div>

    </div>
  </section>
</div>

<section class="destapate-home__container destapate-inspiration">

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-11">
        <figure class="destapate-home__heading">
          <img src="<?php print $template_path ?>/assets/images/destapate-text-nuestra_inspiracion-desktop.png">
        </figure>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="destapate-inspiration__list">
      <div class="row justify-content-center">
        <?php foreach ($nodes as $item): ?>
          <div class="col-12 col-lg-4">
            <div class="destapate-inspiration__item">
              <div class="destapate-inspiration__video">
                <p class="destapate-inspiration__author d-none"><?php print $item->title ?></p>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/<?php print $item->field_video_id['und'][0]['value'] ?>?rel=0"
                          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
              </div>
              <p class="destapate-inspiration__placeholder"><?php print $item->body['und'][0]['value'] ?></p>
            </div>
          </div>
        <?php endforeach; ?>

      </div>
    </div>
  </div>
</section>

<section class="destapate-how">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        <figure class="destapate-home__heading">
          <img src="<?php print $template_path ?>/assets/images/destapate-text-how.png" alt=""
               class="destapate-hero__heading">
        </figure>
      </div>
    </div>

    <div class="destapate-how__list">
      <div class="row justify-content-center justify-content-lg-between">

        <?php foreach (array('sube tu video o foto', 'Compártelo<br>en tus redes', '¡Listo!<br> Espera a ser uno de los seleccionados') as $index => $item): ?>
          <div class="col-10 col-lg-3">
            <div class="destapate-how__item">
              <div class="row no-gutters align-items-end">
                <div class="col-auto">
                  <div class="destapate-overview__index destapate-how__index">
                    <?php print $index + 1 ?>.
                  </div>
                </div>
                <div class="col-auto">
                  <img
                      src="<?php print $template_path ?>/assets/images/destapate-icon-how-<?php print $index + 1 ?>.png"
                      class="destapate-overview__icon destapate-how__icon">
                </div>
                <div class="col col-lg-12">
                  <p class="destapate-overview__text destapate-how__text"><?php print $item ?></p>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-lg-6 pr-lg-4">
        <a href="/destapate/registro"
           class="destapate-home__btn destapate-home__btn--upload destapate-how__btn"><span>Sube tu video o foto</span></a>
        <p class="d-lg-none destapate-home__body destapate-home__body--medium destapate-home__body--white text-uppercase">
          Destápate y gana premios</p>
        <p class="d-none d-lg-block destapate-home__body destapate-home__body--white text-uppercase">
          Destápate y gana premios</p>
      </div>
      <div class="col-12 col-lg-6 mt-3 mt-lg-0 pl-lg-4">
        <a href="/destapate/galeria"
           class="destapate-home__btn destapate-home__btn--gallery destapate-how__btn"><span>galería de historias</span></a>
        <p class="d-lg-none destapate-home__body destapate-home__body--medium destapate-home__body--white text-uppercase">
          Conoce las historias<br>
          de colombianos que<br>
          se destaparon sin miedo
        </p>
        <p class="d-none d-lg-block destapate-home__body destapate-home__body--white text-uppercase">
          Conoce las historias<br>
          de colombianos que<br>
          se destaparon sin miedo
        </p>
      </div>
    </div>
  </div>
</section>

<section class="destapate-c-allies">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1 class="destapate-c-allies__heading">Nuestros aliados</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <img src="<?php print $template_path ?>/assets/images/destapate-img-allies.png" class="d-lg-none">
        <img src="<?php print $template_path ?>/assets/images/destapate-img-allies-desktop.png" class="d-none d-lg-block">
      </div>
    </div>
  </div>
</section>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.min.js"></script>
<script>

  jQuery('#js-btn-upload').sticky({
    topSpacing: 96,
    responsiveWidth: true,
  })

  jQuery('#js-mentors-slider').slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  })
</script>
