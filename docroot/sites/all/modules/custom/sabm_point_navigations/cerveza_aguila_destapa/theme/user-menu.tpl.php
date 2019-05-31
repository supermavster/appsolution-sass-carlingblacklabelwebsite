<?php
    $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]);
    global $user;

    if (user_is_logged_in()) {
        $user_load = user_load($user->uid);
    }
?>

<?php if (user_is_logged_in() && current_path() == 'destapaelcamerino'):?>
  <!-- User profile -->
  <div class="user-profile">
    <div class="user-thumbnail">
      <?php if (isset($user_load->picture->uri)):?>
          <img src="<?php print file_create_url($user_load->picture->uri);?>"/>
      <?php else:?>
        <img src="<?php print $template_path;?>/img/default-user.svg"/>
      <?php endif;?>
    </div>

    <div class="dropdown">
       <div class="dropdown-border"></div>
      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>Hola,</span> <span><?php print (isset($user_load->field_nombres['und'][0]['value']) ? $user_load->field_nombres['und'][0]['value'] : '') . ' ' . (isset($user_load->field_apellidos['und'][0]['value']) ? $user_load->field_apellidos['und'][0]['value'] : '')?></span>
      </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="/user/<?php print $user->uid;?>">Mi perfil</a>
        <a class="dropdown-item" href="/user/logout?destination=destapaelcamerino">Cerrar sesión</a>
      </div>
    </div>

  </div>
<?php endif;?>
