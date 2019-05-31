<div class="section-login">

    <div class="content-wrapper d-flex justify-content-center">

        <div class="container">

            <!-- Title and Top Bar -->
          <?php print theme('top_bar') ?>

            <!-- User profile -->
          <?php print theme('user_menu') ?>

            <div class="row justify-content-center">
                <div class="col-12 col-md-8 ">
                    <div class="login-form-wrapper">
                        <h3>Recupera tu contraseña </h3>
                        <h6 class="h6">Te enviaremos un mensaje
                            al correo electrónico con el que te
                            registraste.</h6>

                      <?php $form['name']['#attributes']['placeholder'] = 'Correo Electrónico'; ?>
                      <?php print render($form["name"]); ?>

                      <?php print drupal_render_children($form); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>