<?php
    $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]);
    $detect = new Mobile_Detect;
    $isMobile = $detect->isMobile();
?>
<section class="landing landing__wrapper landing__wrapper--mobile landing__wrapper--table">
    <div class="container-fluid container--full-vh">
        <ul class="row align-items-center">
            <li class="col-12 offset-md-1 col-md-10 offset-xl-2 col-xl-8">
                <div class="game__container">
                    <?php if ($isMobile): ?>
                        <link rel="stylesheet" type="text/css" href="<?php print $template_path?>/game/game.css">
                        <script>
                            var cervezaAguilaPathModule = "<?php print $template_path?>/game/";
                            var _p="<?php print $path_report;?>";
                        </script>
                        <script type="text/javascript" src="<?php print $template_path?>/game/game.v5.3.js"></script>
                        <div id="ajaxbar">
                            <div id="game"><canvas id="canvas"></canvas></div>

                            <div id="orientate"><img src="<?php print $template_path?>/game/media/graphics/orientate/landscape.jpg" /></div>
                            <div id="play" class="play" onclick=""><img src="<?php print $template_path?>/game/media/graphics/splash/mobile/cover-start.jpg" /></div>
                            <!--<img id="scrollDown" width="220" height="277"></img>-->
                        </div>
                    <?php else: ?>
                        <script>
                            var _p="<?php print $path_report;?>";
                        </script>
                        <iframe id="iframe" src="/game/iframe"></iframe>
                    <?php endif;?>
                </div>
            </li>
        </ul>
    </div>
</section>