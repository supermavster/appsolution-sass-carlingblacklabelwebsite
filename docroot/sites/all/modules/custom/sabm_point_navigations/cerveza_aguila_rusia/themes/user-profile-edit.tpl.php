<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--register">
    <div class="container container--full-vh container--ranking register">
        <ul class="row align-items-center">
            <li class="col-12 offset-xl-2 col-xl-8">
                <ul class="row">
                    <li class="col-12">
                        <h3 class="h3 register__subtitle">¡Empieza tu camino a Rusia, <br class="img-desktop"> participa
                            por una camiseta de la sele!</h3>
                    </li>
                    <li class="col-12">
                        <ul class="row align-items-center">
                            <li class="col">
                                <div class="register__line"></div>
                            </li>
                            <li class="col-auto">
                              <?php if (!isset($form['#not_cancel'])): ?>
                                  <h3 class="h3 color-secondary register__title">Editar</h3>
                              <?php else: ?>
                                  <h3 class="h3 color-secondary register__title">Completa tu perfil</h3>
                              <?php endif;?>
                            </li>
                            <li class="col">
                                <div class="register__line"></div>
                            </li>
                        </ul>
                    </li>
                    <li class="col-12 offset-lg-1 col-lg-10">
                        <ul class="row">
                            <li class="col-12">
                                <div class="picture" style="margin-bottom: 2rem">
                                    <?php print render($form['picture']); ?>
                                </div>
                                <div class="nombres">
                                    <?php $form['field_nombres']['und'][0]['value']['#attributes']['placeholder'] = 'Nombres y Apellidos'; ?>
                                    <?php print render($form["field_nombres"]); ?>
                                </div>
                                <div class="mail">
                                    <?php $form["account"]['mail']['#attributes']['placeholder'] = 'Correo Electrónico'; ?>
                                    <?php print render($form["account"]['mail']); ?>
                                </div>
                                <ul class="row no-gutters">
                                    <li class="col-12 col-lg-5">
                                        <?php print render($form["field_fecha_nacimiento"]); ?>
                                    </li>
                                    <li class="col-12 col-lg-7">
                                        <?php $form['field_cc']['und'][0]['value']['#attributes']['placeholder'] = 'CC'; ?>
                                        <?php print render($form["field_cc"]); ?>
                                    </li>
                                </ul>
                                <ul class="row no-gutters">
                                    <li class="col-12 col-lg-5">
                                        <?php $form['field_telefono_movil']['und'][0]['value']['#attributes']['placeholder'] = 'Teléfono Móvil'; ?>
                                        <?php print render($form["field_telefono_movil"]); ?>
                                    </li>
                                    <li class="col-12 col-lg-7">
                                        <?php $form['field_ciudad']['und'][0]['value']['#attributes']['placeholder'] = 'Ciudad'; ?>
                                        <?php print render($form["field_ciudad"]); ?>
                                    </li>
                                </ul>

                                <div class="password">
                                    <?php $form["account"]["pass"]['#attributes']['placeholder'] = 'Teléfono Móvil'; ?>
                                    <?php print render($form["account"]["pass"]); ?>
                                </div>
                            </li>
                        </ul>

                    </li>
                    <li class="col-12 offset-lg-1 col-lg-10" style="margin-top: 1rem">
                        <ul class="row justify-content-center align-items-center">
                            <li class="col-12 col-lg-6">
                                <?php print drupal_render_children($form); ?>
                            </li>
                            <?php if (!isset($form['#not_cancel'])): ?>
                                <li class="col-12 col-lg-6">
                                    <div class="form-actions">
                                        <a href="/user" class="input-button">Cancelar</a>
                                    </div>
                                </li>
                            <?php endif;?>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>

<script>
    $("document").ready(function(){

        function readURL(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    $('.image-style-thumbnail').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#edit-picture-upload").change(function() {
            readURL(this);
        });
    });
</script>