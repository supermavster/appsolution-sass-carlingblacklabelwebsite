<?php
$template_path = '/' . drupal_get_path('module', 'cerveza_aguila_destapate');
?>

<section class="destapate-p-record">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-12 col-lg-12">
                <div class="destapate-p-upload__heading destapate-p-record__heading">Luces, cámara, destápate</div>
            </div>
            <div class="col-12 col-lg-10">
                <p class="destapate-p-record__subheading">
                    Sonríele a la cámara, estamos en confianza
                </p>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 col-lg-9">
                <!-- 16:9 aspect ratio -->
                <div class="destapate-p-record__video">
                    <ziggeorecorder
                            id="recorder"
                            class="embed-responsive embed-responsive-4by3"
                            ziggeo-theme="modern"
                            ziggeo-timelimit="40"
                            ziggeo-picksnapshots="false"
                            webrtc=true"
                            ziggeo-skipinitialonrerecord="true"></ziggeorecorder>
                    <div class="destapate-p-record__frame">
                        <div class="destapate-p-record__frame--inner"></div>
                        <div class="destapate-p-record__controls custom-controls-bar" style="display: none">
                            <div class="row h-100 align-items-center justify-content-between">
                                <div class="col-auto">
                                    <div class="btn-grabando">Grabando</div>
                                </div>
                                <div class="col-auto">
                                    <div class="video-progress">

                                        <div class="progress d-none">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="25"
                                                 aria-valuemin="0"
                                                 aria-valuemax="100"></div>
                                        </div>
                                        <div class="time-lines d-none"></div>

                                        <span class="time-begin d-none">00:00</span>
                                        <span class="time-end d-none">00:15</span>
                                        <div class="t  ass=" pointer-current
                                        "></span>
                                        <span class="time">00:00</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="btn-reintentar d-none">Reintentar</div>

                    </div>


                </div>
            </div>

        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-12 col-lg-auto group-record-initial">
            <a class="btn-start destapate-btn" href=""><span>INICIAR GRABACIÓN</span><img
                    src="<?php print $template_path ?>/assets/images/destapate-icon-play.png"></a>
        </div>

        <div class="col-12 col-lg-auto group-record">
            <a class="btn-retry destapate-btn" href="">REINICIAR GRABACIÓN</a>
        </div>

        <div class="col-12 col-lg-auto group-record">
            <a class="btn-stop destapate-btn" href="">PARAR GRABACIÓN</a>
        </div>


    </div>
    </div>
</section>

<div class="destapate-c-modal destapate-c-loader modal fade" id="modal-uploading" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content modal-loading">
            <img src="<?php print $template_path ?>/assets/images/destapate-img-loader.png">
            <div class="modal-body text-center">
                <h2 id="percentage-uploading" class="video-preloader"><span>50%</span></h2>
            </div>
        </div>
    </div>
</div>
