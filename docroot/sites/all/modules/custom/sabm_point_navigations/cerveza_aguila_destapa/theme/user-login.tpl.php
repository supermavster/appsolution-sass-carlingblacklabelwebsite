<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>

<div class="section-login">

  <div class="content-wrapper d-flex justify-content-center">

    <div class="container">

      <!-- Title and Top Bar -->
      <?php print theme('top_bar')?>

      <!-- User profile -->
      <?php print theme('user_menu')?>

      <img src="<?php print $template_path;?>/img/player-murillo-md.png"
           class="player-img d-none d-lg-block"/>

       <div class="row justify-content-center">
        <div class="col-12 col-md-8 ">
          <div class="login-form-wrapper">
            <h3>Entra a tu perfil y sigue disfrutando las anécdotas de la selección.</h3>

            <?php $form['name']['#attributes']['placeholder'] = 'Correo Electrónico'; ?>
            <?php print render($form["name"]); ?>
            <?php $form['pass']['#attributes']['placeholder'] = 'Contraseña'; ?>
            <?php print render($form["pass"]); ?>

            <div class="checkbox">
              <label><input type="checkbox" id="cbox1"
                            value="first_checkbox"><span>Recordarme en este equipo</span></label><br>
            </div>

            <?php print drupal_render_children($form); ?>


            <div class="fb-login-button" data-scope="email, public_profile, user_birthday" data-max-rows="1"
                 data-size="large" data-button-type="login_with" data-show-faces="false"
                 onlogin="Drupal.cervezaAguilaDestapaLogin.onLoginFB()" data-auto-logout-link="false"
                 data-use-continue-as="true"></div>
            <h5><a class="form-anchor" href="/user/password">¿Has olvidado tu contraseña?</a></h5>
            <!--<p class="button__facebook--disclaimer">*Al hacer Facebook connect aceptas los términos y
                condiciones y las políticas de privacidad de nuestro website.</p>-->

            <h3>Si no tienes cuenta</h3>
            <a href="/user/register" class="btn btn-default">Regístrate</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
