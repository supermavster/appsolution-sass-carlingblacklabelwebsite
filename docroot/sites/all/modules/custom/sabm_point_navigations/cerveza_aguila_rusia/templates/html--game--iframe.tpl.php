<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_rusia'), ['absolute' => true]);?>
<!DOCTYPE html>
<html>
<head>
    <title>Serempre Cruzando Rusia</title>
    <link rel="icon" type="image/x-icon" href="media/graphics/misc/favicon.ico" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <!-- Use this metatag when Apple fixes their IOS 9
    <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui"/>
    -->

    <!--Temporary fix for IOS 9-->
    <meta name="viewport" content="initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no, minimal-ui"/>

    <meta name="apple-mobile-web-app-capable" content="yes" />

    <link rel="stylesheet" type="text/css" href="<?php print $template_path?>/game/game.css">
    <script>
        var cervezaAguilaPathModule = "<?php print $template_path?>/game/";
        var _p="<?php print cerveza_aguila_rusia_get_url_report()?>";
    </script>
    <script type="text/javascript" src="<?php print $template_path?>/game/game.v5.3.js"></script>
<!-- AnalyticsCode -->

<!-- APICode -->
</head>

<div class="gamecenter-activator"></div>

<body onload="setTimeout(function(){window.scrollTo(0,1)},1);">
<!--body-->
    <div id="ajaxbar">
        <div id="game"><canvas id="canvas"></canvas></div>

        <div id="orientate"><img src="<?php print $template_path?>/game/media/graphics/orientate/landscape.jpg" /></div>
        <div id="play" class="play" onclick=""><img src="<?php print $template_path?>/game/media/graphics/splash/mobile/cover-start.jpg" /></div>
        <!--<img id="scrollDown" width="220" height="277"></img>-->


    </div>
    <!-- <div id="tempdiv"><br><br><br></div> -->
<!-- APICode2 -->


<!-- END OF TEST -->

</body>
</html>
