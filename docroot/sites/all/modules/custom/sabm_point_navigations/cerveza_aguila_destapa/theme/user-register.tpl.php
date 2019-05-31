<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>

<div class="section-register">

  <div class="content-wrapper d-flex justify-content-center">

    <div class="container">

      <!-- Title and Top Bar -->
      <?php print theme('top_bar')?>

      <!-- User profile -->
      <?php print theme('user_menu')?>

      <!-- Content -->


          <img src="<?php print $template_path;?>/img/player-zapata-md.png"
           class="player-img d-none d-lg-block"/>

      <div class="row justify-content-center">
        <div class="col-12 col-md-8">


          <div class="register-form-wrapper">
            <h3>Regístrate</h3>
            <h5>Solo necesitamos algunos de tus datos para que puedas ver
              todas las anécdotas de la selección y empezar a sumar puntos. </h5>
            <div>
                <div class="fb-login-button" data-scope="email, public_profile, user_birthday" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" onlogin="Drupal.cervezaAguilaDestapaRegister.onLoginFB()" data-auto-logout-link="false" data-use-continue-as="true"></div>
                <p class="button__facebook--disclaimer">*Al hacer Facebook connect aceptas los términos y condiciones y las políticas de privacidad de nuestro website.</p>
            </div>
            <div class="nombres">
              <?php $form['field_nombres']['und'][0]['value']['#attributes']['placeholder'] = 'Nombres';?>
              <?php print render($form["field_nombres"]); ?>
            </div>

              <div class="apellidos">
                <?php $form['field_apellidos']['und'][0]['value']['#attributes']['placeholder'] = 'Apellidos';?>
                <?php print render($form["field_apellidos"]); ?>
              </div>

            <div class="ciudad">
                <?php $form['field_ciudad']['und'][0]['value']['#attributes']['placeholder'] = 'Ciudad';?>
                <?php print render($form["field_ciudad"]); ?>
            </div>

            <div class="mail">
              <?php $form["account"]['mail']['#attributes']['placeholder'] = 'Correo Electrónico';?>
              <?php print render($form["account"]['mail']); ?>
            </div>

            <div class="nacimiento">
              <?php print render($form["field_fecha_nacimiento"]); ?>
            </div>

            <div class="movil">
              <?php $form['field_telefono_movil']['und'][0]['value']['#attributes']['placeholder'] = 'Teléfono Móvil';?>
              <?php print render($form["field_telefono_movil"]); ?>
            </div>

            <div class="password">
              <?php $form["account"]["pass"]['#attributes']['placeholder'] = '';?>
              <?php print render($form["account"]["pass"]); ?>
            </div>

            <div class="field_terms_and_conditions">
              <div class="terms-conditions">
                <?php print render($form["field_terminos_y_condicciones"]); ?>

                <span>
                    Acepto
                  <a
                  href="<?php print $template_path?>/resources/TERMINOS-Y-CONDICIONES-DESTAPA-EL-CAMERINO.pdf?t=b"
                  target="_blank">términos y condiciones</a> y <a href="/node/31" target="_blank">Politicas de privacidad</a>
                </span>
              </div>
            </div>

            <div>
              <?php print drupal_render_children($form); ?>
            </div>
          </div>
        </div>
      </div>

      <div class="login-box">
        <h3>Si ya tienes cuenta</h3>
        <a href="/user/login" class="btn btn-default">Inicia sesión</a>
      </div>

    </div>

  </div>
</div>

<script>
  document.getElementById('edit-pass-pass1').setAttribute("placeholder", "Contraseña");
  document.getElementById('edit-pass-pass2').setAttribute("placeholder", "Confirmar Contraseña");
  document.getElementById('edit-field-telefono-movil-und-0-value').setAttribute('type', 'number');
</script>
