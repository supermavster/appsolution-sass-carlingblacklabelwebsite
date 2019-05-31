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
                        <h3>Recupera tu contraseña</h3>
                        <h6 class="h6">Haz clic aquí para iniciar a sesión</h6>

                      <?php print drupal_render_children($form); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>