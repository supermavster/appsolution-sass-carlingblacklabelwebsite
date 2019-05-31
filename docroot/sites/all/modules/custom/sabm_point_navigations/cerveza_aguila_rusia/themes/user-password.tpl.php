<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--recoverPassword">
    <div class="container container--full-vh recover">
        <ul class="row align-items-center">
            <li class="col-12 offset-lg-2 col-lg-8">
                <ul class="row">
                    <li class="col-12">
                        <h3 class="h3">¡Empieza tu camino <br class="img-mobile">a Rusia, <br class="img-desktop">participa por una camiseta de la sele!</h3>
                    </li>
                    <li class="col-12 offset-lg-1 col-lg-10">
                        <h1 class="h1">Recupera <br class="img-desktop">tu contraseña</h1>
                    </li>
                    <li class="col-12">
                        <h6 class="h6">Te enviaremos un mensaje al correo electrónico con el que te registraste o si te registraste con Facebook el correo con el que ingresas a esta red social.</h6>
                    </li>
                    <li class="col-12 offset-lg-2 col-lg-8">
                    <?php $form['name']['#attributes']['placeholder'] = 'Correo Electrónico';?>
                        <?php print render($form["name"]); ?>
                    </li>
                    <li class="col-12 offset-lg-2 col-lg-8">
                        <?php print drupal_render_children($form); ?>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>