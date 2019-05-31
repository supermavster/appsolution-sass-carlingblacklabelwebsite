<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--register">
    <div class="container container--full-vh container--responsive-height register">
        <ul class="row align-items-center">
            <li class="col-12 offset-xl-2 col-xl-8">
                <ul class="row">
                    <li class="col-12">
                        <h3 class="h3 register__subtitle heading-mobile">¡Empieza tu camino a Rusia, <br class="img-desktop"> participa por una camiseta de la sele!</h3>
                    </li>
                    <li class="col-12 offset-lg-3 col-lg-6">
                        <a href="/user/login" class="button button--secondary button--solid">Iniciar sesión</a>
                    </li>
                    <li class="col-12">
                        <ul class="row align-items-center">
                            <li class="col">
                                <div class="register__line"></div>
                            </li>
                            <li class="col-auto">
                                <h3 class="h3 color-secondary register__title">Regístrate</h3>
                            </li>
                            <li class="col">
                                <div class="register__line"></div>
                            </li>
                        </ul>
                    </li>
                    <li class="col-12 offset-lg-1 col-lg-10">
                        <ul class="row">
                            <li class="col-12">
                                <ul class="row">
                                    <li class="col-12 offset-md-1 col-md-10">
                                        <div class="fb-login-button" data-scope="email, public_profile, user_birthday" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" onlogin="Drupal.cervezaAguilaRusiaLogin.onLoginFB()" data-auto-logout-link="false" data-use-continue-as="true"></div>
                                        <p class="button__facebook--disclaimer">*Al hacer Facebook connect aceptas los términos y condiciones y las políticas de privacidad de nuestro website.</p>
                                    </li>
                                </ul>
                                <div class="nombres">
                                    <?php $form['field_nombres']['und'][0]['value']['#attributes']['placeholder'] = 'Nombres y Apellidos';?>
                                    <?php print render($form["field_nombres"]); ?>
                                </div>
                                <div class="mail">
                                    <?php $form["account"]['mail']['#attributes']['placeholder'] = 'Correo Electrónico';?>
                                    <?php print render($form["account"]['mail']); ?>
                                </div>
                                <ul class="row no-gutters">
                                    <li class="col-12 col-lg-5">
                                        <?php print render($form["field_fecha_nacimiento"]); ?>
                                    </li>
                                    <li class="col-12 col-lg-7">
                                        <?php $form['field_cc']['und'][0]['value']['#attributes']['placeholder'] = 'CC';?>
                                        <?php print render($form["field_cc"]); ?>
                                    </li>
                                </ul>
                                <ul class="row no-gutters">
                                    <li class="col-12 col-lg-5">
                                        <?php $form['field_telefono_movil']['und'][0]['value']['#attributes']['placeholder'] = 'Teléfono Móvil';?>
                                        <?php print render($form["field_telefono_movil"]); ?>
                                    </li>
                                    <li class="col-12 col-lg-7">
                                        <?php $form['field_ciudad']['und'][0]['value']['#attributes']['placeholder'] = 'Ciudad';?>
                                        <?php print render($form["field_ciudad"]); ?>
                                    </li>
                                </ul>

                                <ul class="row">
                                    <li class="col-12">
                                        <div class="password">
                                            <?php $form["account"]["pass"]['#attributes']['placeholder'] = '';?>
                                            <?php print render($form["account"]["pass"]); ?>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="col-12">
                                <div class="field_terms_and_conditions">
                                    <ul class="row justify-content-center align-items-center">
                                        <li class="col-auto">
                                            <div class="terms-conditions">
                                                <?php print render($form["field_terminos_y_condicciones"]); ?>
                                                <span><a href="/<?php print drupal_get_path('module', 'cerveza_aguila_rusia') . '/TERMINOS-Y-CONDICIONES-JUEGO-CAMISETAS.pdf' ?>" target="_blank">Acepto términos y condiciones</a> y <a href="/node/31"  target="_blank">Politicas de privacidad</a></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </li>
                    <li class="col-12 offset-lg-3 col-lg-6">
                        <?php print drupal_render_children($form); ?>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>
<script>
    document.getElementById('edit-pass-pass1').setAttribute("placeholder", "Contraseña");
    document.getElementById('edit-pass-pass2').setAttribute("placeholder", "Confirmar Contraseña");
    document.getElementById('edit-field-telefono-movil-und-0-value').setAttribute('type', 'number');
</script>