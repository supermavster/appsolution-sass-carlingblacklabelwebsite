<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]); ?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--login">
    <div class="container container--full-vh">
        <ul class="row align-items-center">
            <li class="col-12 offset-lg-2 col-lg-8">
                <ul class="row">
                    <li class="col-12">
                        <h3 class="h3">¡Empieza tu camino a Rusia,<br>participa por una camiseta de la sele!</h3>
                    </li>
                    <li class="col-12 offset-lg-2 col-lg-8">
                        <?php $form['name']['#attributes']['placeholder'] = 'Correo Electrónico'; ?>
                        <?php print render($form["name"]); ?>
                        <?php $form['pass']['#attributes']['placeholder'] = 'Contraseña'; ?>
                        <?php print render($form["pass"]); ?>
                        <div class="checkbox">
                            <label><input type="checkbox" id="cbox1" value="first_checkbox"><span>Recordarme en este equipo</span></label><br>
                        </div>
                    </li>
                    <li class="col-12 offset-lg-3 col-lg-6">
                        <?php print drupal_render_children($form); ?>
                        <a class="form-anchor" href="/user/password" style="margin-bottom: 2rem">¿Has olvidado tu contraseña?</a>
                    </li>
                    <li class="col-12 offset-md-3 col-md-6">
                        <div class="fb-login-button" data-scope="email, public_profile, user_birthday" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" onlogin="Drupal.cervezaAguilaRusiaLogin.onLoginFB()" data-auto-logout-link="false" data-use-continue-as="true"></div>
                        <p class="button__facebook--disclaimer">*Al hacer Facebook connect aceptas los términos y
                            condiciones y las políticas de privacidad de nuestro website.</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>

<script type="text/javascript" src="<?php print $template_path ?>/js/jquery.fittext.js"></script>
<script>
    jQuery(document).ready(function () {
        jQuery("#js-title").fitText(1, {minFontSize: '40px'});
    });
</script>