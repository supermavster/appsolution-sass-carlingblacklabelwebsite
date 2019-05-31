<?php $template_path = url(drupal_get_path('module', 'cerveza_aguila_dashboard'), ['absolute' => true]);?>
<?php print_r($data, TRUE);?>
<!DOCTYPE html>
<html>
<head>
    <title>Aguila Dashboard</title>
    <link rel="icon" type="image/x-icon" href="media/graphics/misc/favicon.ico"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta http-equiv="refresh" content="300">
    <!-- Use this metatag when Apple fixes their IOS 9
    <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui"/>
    -->

    <!--Temporary fix for IOS 9-->
    <meta name="viewport"
          content="initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=yes, minimal-ui"/>

    <meta name="apple-mobile-web-app-capable" content="yes"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="<?php print $template_path?>/css/style.css">

    <script type="text/javascript" src="<?php print $template_path?>/js/script.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
</head>
<body>
<div class="desktop-layout">

    <div class="container-fluid">

        <table class="main-table">
            <tbody>
            <tr>
                <td valign="top">
                    <h3 class="shadow-text">Ventas RB 330</h3>

                    <table cellpadding="0" cellspacing="0" class="table-venta">
                        <tbody>
                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/botella-aguila.png" class="fluid-img"/>
                            </td>

                            <td class="text-left">
                                <h2><?php print number_format($data['original'][0]['vendido'],0,'','.')?><span>HTL</span></h2>
                                <h4>BUDGET <span><?php print number_format($data['original'][0]['budget'],0,'','.')?></span></h4>
                            </td>

                            <td valign="top">
                                <h5>Incremental</h5>
                                <h4><span><?php print number_format(($data['original'][0]['vendido']) / $data['original'][0]['budget'] * 100,0,'','.');?>%</span></h4>
                                <img class="arrow" src="<?php print $template_path?>/img/flecha-arriba.png"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table cellpadding="0" cellspacing="0" class="table-venta">
                        <tbody>
                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/botella-aguila-light.png" class="fluid-img"/>
                            </td>

                            <td class="text-left">
                                <h2><?php print number_format($data['light'][0]['vendido'],0,'','.');?><span>HTL</span></h2>
                                <h4>BUDGET <span><?php print number_format($data['light'][0]['budget'],0,'','.');?></span></h4>
                            </td>

                            <td valign="top">
                                <h5>Incremental</h5>
                                <h4><span><?php print number_format(($data['light'][0]['vendido']) / $data['light'][0]['budget'] * 100,0,'','.');?>%</span></h4>
                                <img class="arrow" src="<?php print $template_path?>/img/flecha-arriba.png"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table cellpadding="0" cellspacing="0" class="table-venta">
                        <tbody>
                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/botella-aguila-cero.png" class="fluid-img"/>
                            </td>

                            <td class="text-left">
                                <h2><?php print number_format($data['cero'][0]['vendido'],0,'','.');?><span>HTL</span></h2>
                                <h4>BUDGET <span><?php print number_format($data['cero'][0]['budget'],0,'','.');?></span></h4>
                            </td>

                            <td valign="top">
                                <h5>Incremental</h5>
                                <h4><span><?php print number_format(($data['cero'][0]['vendido']) / $data['cero'][0]['budget'] * 100,0,'','.');?>%</span></h4>
                                <img class="arrow" src="<?php print $template_path?>/img/flecha-arriba.png"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table cellpadding="0" cellspacing="0" class="table-venta">
                        <tbody>
                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-aguila.png" class="fluid-img"/>
                            </td>

                            <td class="text-left">
                                <h2><?php print number_format($data['original'][0]['vendido'] + $data['cero'][0]['vendido'] + $data['light'][0]['vendido'],0,'','.')?>  <span>HTL</span></h2>
                                <h4>BUDGET <span><?php print number_format( $data['original'][0]['budget'] + $data['cero'][0]['budget'] + $data['light'][0]['budget'],0,'','.');?></span></h4>
                            </td>

                            <td valign="top">
                                <h5>Incremental</h5>
                                <h4><span><?php print number_format( ($data['original'][0]['vendido'] + $data['cero'][0]['vendido'] + $data['light'][0]['vendido']) / ($data['original'][0]['budget'] + $data['cero'][0]['budget'] + $data['light'][0]['budget']) * 100,0,'','.');?>%</span></h4>
                                <img class="arrow" src="<?php print $template_path?>/img/flecha-arriba.png"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>


                <td width="20%" valign="top">
                    <h3 class="shadow-text">Redención de sobres</h3>
                    <table cellpadding="0" cellspacing="0" class="table-redencion">
                        <tbody>
                            <tr>
                                <td>
                                    <img src="<?php print $template_path?>/img/redencion-sobres.png" class="fluid-img"/>
                                    <span class="redencion"><?php print number_format($data['sobres']['total'],0,'', '.');?></span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <hr/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                     <h3 class="shadow-text">Redención de copas</h3>
                                    <img src="<?php print $template_path?>/img/redencion-copas.png" class="fluid-img"/>
                                    <span class="redencion"><?php print number_format($data['copas']['total'],0,'', '.');?></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>

                <td width="20%" valign="top">
                    <h3 class="shadow-text">Sentimiento</h3>
                    <table cellpadding="0" cellspacing="0" class="">
                        <tbody>
                            <tr>
                                <td width="<?php print $data['finalFeelings']['positve']*100;?>%">
                                    <div class="bar-wrapper">
                                        <div class="bar-percent bar-positivo" style="height: <?php print number_format($data['finalFeelings']['positve']*100, 0, '', '.');?>%;"></div>
                                    </div>
                                </td>

                                <td width="<?php print $data['finalFeelings']['neutral']*100;?>%">
                                    <div class="bar-wrapper">
                                        <div class="bar-percent bar-neutro" style="height: <?php print number_format($data['finalFeelings']['neutral']*100, 0, '', '.');?>%;"></div>
                                    </div>
                                </td>

                                <td width="<?php print $data['finalFeelings']['negative']*100;?>%">
                                    <div class="bar-wrapper">
                                        <div class="bar-percent bar-negativo" style="height: <?php print number_format($data['finalFeelings']['negative']*100, 0, '', '.');?>%;"></div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span class="bar-label text-positivo">Positivo</span>
                                    <span class="bar-index text-positivo"><?php print number_format($data['finalFeelings']['positve']*100,0, '','.');?>%</span>
                                </td>

                                <td>
                                    <span class="bar-label text-neutro">Neutro</span>
                                    <span class="bar-index text-neutro"><?php print number_format($data['finalFeelings']['neutral']*100,0,'','.');?>%</span>
                                </td>

                                <td>
                                    <span class="bar-label text-negativo">Negativo</span>
                                    <span class="bar-index text-negativo"><?php print number_format($data['finalFeelings']['negative']*100,0,'','.');?>%</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 class="shadow-text">Earned media</h3>

                    <h6 class="shadow-text">Earned views</h6>
                    <span class="earn-views"><?php print number_format($data['OrganicsViews'],0,'', '.') ;?></span>
                    <div class="separator"></div>
                    <h6 class="shadow-text">Paid views</h6>
                    <span class="earn-views"><?php print number_format($data['TotalViews'],0,'', '.') ;?></span>
                    <table>
                        <tr>
                            <td>
                                <span class="redencion earn"><?php print number_format(($data['OrganicsViews'] / $data['TotalViews'])*100,2,',', '.') ;?>%</span>
                                <span class="earn-views">Alcanzado</span>
                            </td>
                            <td>
                                <span class="redencion earn earn-goal">5%</span>
                                <span class="earn-views">Meta</span>
                            </td>
                        </tr>
                    </table>
                </td>


                <td width="20%" valign="top">
                    <h3 class="shadow-text">Share of voice</h3>
                    <table cellpadding="0" cellspacing="0" class="table-share">
                        <tbody>
                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-aguila.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['AguilaTotal']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-cocacola.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['Coca-Cola']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-visa.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['Visa']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-bancolombia.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['Bancolombia']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-homecenter.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['Coca-Cola']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-movistar.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['Homecenter']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="<?php print $template_path?>/img/logo-adidas.png" class="fluid-img"/>
                            </td>

                            <td class="text-right">
                                <?php print number_format($data['Adidas']*100,1,',','.');?>%
                            </td>
                        </tr>

                        <tr>
                            <td>
                                TOTAL
                            </td>

                            <td class="text-right">
                                <?php print number_format( $data['total'],0,'', '.') ;?>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>

            </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="mobile-layout">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="shadow-text">Ventas RB 330</h3>

                <table cellpadding="0" cellspacing="0" class="table-venta">
                    <tbody>
                    <tr>
                        <td width="20%">
                            <img src="<?php print $template_path?>/img/botella-aguila.png" class="fluid-img"/>
                        </td>

                        <td class="text-left">
                            <h2><?php print number_format($data['original'][0]['vendido'],0,'','.')?><span>HTL</span></h2>
                            <h4>BUDGET <span><?php print number_format($data['original'][0]['budget'],0,'','.')?></span></h4>
                        </td>

                        <td valign="top">
                            <h5>Incremental</h5>
                            <h4><span><?php print number_format(($data['original'][0]['vendido']) / $data['original'][0]['budget'] * 100,0,'','.');?>%</span></h4>
                            <img src="<?php print $template_path?>/img/flecha-arriba.png"/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table cellpadding="0" cellspacing="0" class="table-venta">
                    <tbody>
                    <tr>
                        <td width="20%">
                            <img src="<?php print $template_path?>/img/botella-aguila-light.png" class="fluid-img"/>
                        </td>

                        <td class="text-left">
                            <h2><?php print number_format($data['light'][0]['vendido'],0,'','.')?><span>HTL</span></h2>
                            <h4>BUDGET <span><?php print number_format($data['light'][0]['budget'],0,'','.')?></span></h4>
                        </td>

                        <td valign="top">
                            <h5>Incremental</h5>
                            <h4><span><?php print number_format(($data['light'][0]['vendido']) / $data['light'][0]['budget'] * 100,0,'','.');?>%</span></h4>
                            <img src="<?php print $template_path?>/img/flecha-arriba.png"/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table cellpadding="0" cellspacing="0" class="table-venta">
                    <tbody>
                    <tr>
                        <td width="20%">
                            <img src="<?php print $template_path?>/img/botella-aguila-cero.png" class="fluid-img"/>
                        </td>

                        <td class="text-left">
                            <h2><?php print number_format($data['cero'][0]['vendido'],0,'','.')?><span>HTL</span></h2>
                            <h4>BUDGET <span><?php print number_format($data['cero'][0]['budget'],0,'','.')?></span></h4>
                        </td>

                        <td valign="top">
                            <h5>Incremental</h5>
                            <h4><span><?php print number_format(($data['cero'][0]['vendido'] / $data['cero'][0]['budget'] * 100),0,'','.');?>%</span></h4>
                            <img src="<?php print $template_path?>/img/flecha-arriba.png"/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table cellpadding="0" cellspacing="0" class="table-venta">
                    <tbody>
                    <tr>
                        <td width="20%">
                            <img src="<?php print $template_path?>/img/logo-aguila.png" class="fluid-img"/>
                        </td>

                        <td class="text-left">
                            <h2><?php print number_format($data['original'][0]['vendido'] + $data['cero'][0]['vendido'] + $data['light'][0]['vendido'],0,'','.')?><span>HTL</span></h2>
                            <h4>BUDGET <span><?php print number_format($data['original'][0]['budget'] + $data['cero'][0]['budget'] + $data['light'][0]['budget'],0,'','.')?></span></h4>
                        </td>

                        <td valign="top">
                            <h5>Incremental</h5>
                            <h4><span><?php print number_format(($data['original'][0]['vendido'] + $data['cero'][0]['vendido'] + $data['light'][0]['vendido']) / ($data['original'][0]['budget'] + $data['cero'][0]['budget'] + $data['light'][0]['budget']) * 100,0,'','.');?>%</span></h4>
                            <img src="<?php print $template_path?>/img/flecha-arriba.png"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="shadow-text">Redención de sobres</h3>
                <img src="<?php print $template_path?>/img/redencion-sobres.png" class="fluid-img"/>
                <span class="redencion"><?php print number_format($data['sobres']['total'],0,'', '.');?></span>
                <hr/>
                <h3 class="shadow-text">Redención de copas</h3>
                <img src="<?php print $template_path?>/img/redencion-copas.png" class="fluid-img"/>
                <span class="redencion"><?php print number_format($data['copas']['total'],0,'', '.');?></span>
            </div>
        </div>

         <div class="row">
            <div class="col-md-12">
                <hr />
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="shadow-text">Sentimiento</h3>
                <table cellpadding="0" cellspacing="0" class="">
                    <tbody>
                    <tr>
                        <td width="33.333%">
                            <div class="bar-wrapper">
                                <div class="bar-percent bar-positivo" style="height: <?php print number_format($data['finalFeelings']['positve']*100,0,'','.');?>%;"></div>
                            </div>
                        </td>

                        <td width="33.333%">
                            <div class="bar-wrapper">
                                <div class="bar-percent bar-neutro" style="height: <?php print number_format($data['finalFeelings']['neutral']*100,0,'','.');?>%;"></div>
                            </div>
                        </td>

                        <td width="33.333%">
                            <div class="bar-wrapper">
                                <div class="bar-percent bar-negativo" style="height: <?php print number_format($data['finalFeelings']['negative']*100,0,'','.');?>%;"></div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="bar-label text-positivo">Positivo</span>
                            <span class="bar-index text-positivo"><?php print number_format($data['finalFeelings']['positve']*100,0,',','.');?>%</span>
                        </td>

                        <td>
                            <span class="bar-label text-neutro">Neutro</span>
                            <span class="bar-index text-neutro"><?php print number_format($data['finalFeelings']['neutral']*100, 0, ',','.');?>%</span>
                        </td>

                        <td>
                            <span class="bar-label text-negativo">Negativo</span>
                            <span class="bar-index text-negativo"><?php print number_format($data['finalFeelings']['negative']*100, 0, ',','.');?>%</span>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h3 class="shadow-text">Earned media</h3>

                <h6 class="shadow-text">Earned views</h6>
                <span><?php print number_format($data['OrganicsViews'],0,'', '.');?></span>
                <div class="separator"></div>
                <h6 class="shadow-text">Paid views</h6>
                <span><?php print number_format($data['TotalViews'],0,'', '.');?></span>

                <table>
                    <tr>
                        <td>
                            <span class="redencion earn"><?php print number_format(($data['OrganicsViews'] / $data['TotalViews'])*100,2,',', '.') ;?>%</span>
                            <span >Alcanzado</span>
                        </td>
                        <td>
                            <span class="redencion earn earn-goal">5%</span>
                            <span >Meta</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <hr />
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="shadow-text">Share of voice</h3>
                <table cellpadding="0" cellspacing="0" class="table-share">
                    <tbody>
                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-aguila.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['AguilaTotal']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-cocacola.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['Coca-Cola']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-visa.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['Visa']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-bancolombia.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['Bancolombia']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-homecenter.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['Coca-Cola']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-movistar.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['Homecenter']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="<?php print $template_path?>/img/logo-adidas.png" class="fluid-img"/>
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['Adidas']*100,1,',','.');?>%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            TOTAL
                        </td>

                        <td class="text-right">
                            <?php print number_format($data['total'],0,'', '.') ;?>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<img src="<?php print $template_path?>/img/chico-megafono.png" class="chico-megafono"/>

</body>
</html>
