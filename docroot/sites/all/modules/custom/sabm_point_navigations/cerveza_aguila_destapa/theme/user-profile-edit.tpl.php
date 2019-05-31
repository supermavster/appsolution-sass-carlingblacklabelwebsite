<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>

<div class="section-register section-profile">



  <div class="content-wrapper d-flex justify-content-center">

    <div class="container">

      <!-- Title and Top Bar -->
      <?php print theme('top_bar')?>

      <!-- User profile -->
      <?php print theme('user_menu')?>

      <!-- Content -->

      <div class="row justify-content-center">
        <div class="col-12 col-md-10 ">
          <div class="profile-status">
            <div class="status-title">
              <h3>Tu puesto es <strong>115</strong> Tienes:</h3>
            </div>

            <div class="star-points"><span><?php print cerveza_aguila_destapa_get_points()?></span></div>



            <div class="user-photo-edit">
              <?php print render($form['picture']); ?>
            </div>
          </div>

        </div>
      </div>

     <div class="row justify-content-center">
        <div class="col-12 col-md-8 ">
          <div class="register-form-wrapper">
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
            <?php if (user_is_logged_in()):?>
              <div class="password">
                <?php $form["account"]["pass"]['#attributes']['placeholder'] = '';?>
                <?php print render($form["account"]["current_pass"]); ?>
              </div>
            <?php endif;?>
            <div class="password">
              <?php $form["account"]["pass"]['#attributes']['placeholder'] = '';?>
              <?php print render($form["account"]["pass"]); ?>
            </div>

            <div>
              <?php print drupal_render_children($form); ?>
            </div>
            <div>
                <a href="/destapaelcamerino/user/delete" class="use-ajax">ELIMINAR MI CUENTA</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>
