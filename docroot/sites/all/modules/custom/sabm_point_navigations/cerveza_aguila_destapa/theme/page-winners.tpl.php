<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_destapa'), ['absolute' => true]); ?>

<div class="section-ranking">

  <div class="content-wrapper d-flex justify-content-center">

    <div class="container">

        <!-- Title and Top Bar -->
      <?php print theme('top_bar')?>

        <!-- User profile -->
      <?php print theme('user_menu')?>

      <!-- Content -->

      <img src="<?php print $template_path;?>/img/player-james-left-md.png"
           class="player-img player-left d-none d-lg-block"/>

      <img src="<?php print $template_path;?>/img/player-murillo-md-right.png"
           class="player-img player-right d-none d-lg-block"/>


       <div class="row justify-content-center">
        <div class="col-12 col-md-8 ">
          <div class="ranking-table-wrapper">
            <img src="<?php print $template_path;?>/img/img-ganadores.png" class="star-title"/>
            <img src="<?php print $template_path;?>/img/icon-search.svg" class="icon-search" />

            <input id="text-name" class="form-text" type="text" placeholder="Búscate con nombre y apellido" onkeyup="Drupal.cervezaAguilaDestapaRanking.search()" />

            <div class="scroll-container">

              <table id="myTable" class="table table-striped">
                <tbody>
                <?php foreach($rows as $item):?>
                  <tr>
                    <td><?php print $item[0]?></td>
                    <td><?php print $item[1]?></td>
                      <td>&nbsp;</td>
                  </tr>
                <?php endforeach;?>
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>

  </div>
</div>
