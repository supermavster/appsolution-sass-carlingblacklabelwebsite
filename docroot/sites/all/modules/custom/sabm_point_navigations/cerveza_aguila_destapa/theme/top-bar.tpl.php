<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]);?>

<div class="top-section">
  <div class="row">
    <div class="col-12">
      <h3 class="section-h3">Destapa el camerino</h3>
    </div>
  </div>

  <div class="top-nav-bar">
    <div class="row justify-content-center">

      <?php if (user_is_logged_in()):?>
        <div class="col-auto text-center">
            <a class="btn btn-default btn-home <?php print current_path() == 'destapaelcamerino' ? 'active' : ''?>" href="/destapaelcamerino">
                <span class="d-none d-lg-block">Inicio</span>

            </a>
        </div>
        <div class="d-none d-lg-block col-lg-1"></div>
      <?php endif;?>

      <div class="col-auto text-center">
        <a class="btn btn-default btn-ranking <?php print current_path() == 'destapaelcamerino/ganadores' ? 'active' : ''?>" href="/destapaelcamerino/ganadores">
          <span class="d-none d-lg-block">Ganadores</span>

        </a>
</div>

      <?php if (user_is_anonymous()):?>
          <div class="d-none d-lg-block col-lg-1"></div>

          <div class="col-auto text-center">
            <a class="btn btn-default btn-register <?php print current_path() == 'user/register' ? 'active' : ''?>" href="/user/register">
              <span class="d-none d-lg-block">Regístrate</span>

            </a>
          </div>

          <div class="d-none d-lg-block col-lg-1"></div>

          <div class="col-auto text-center">
            <a class="btn btn-default btn-login <?php print current_path() == 'user/login' ? 'active' : ''?>" href="/user/login">
              <span class="d-none d-lg-block">Ingresa</span>

            </a>
          </div>
      <?php endif;?>

    </div>
  </div>
</div>
