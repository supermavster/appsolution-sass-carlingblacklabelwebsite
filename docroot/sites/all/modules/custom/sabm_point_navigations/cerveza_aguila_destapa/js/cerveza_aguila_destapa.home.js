(function ($) {

    if (window.location.href.indexOf("http://") == 0) {
      window.location.href = window.location.href.replace('http', 'https');
    }

    Drupal.aguilaDestapa = Drupal.aguilaDestapa || {};
    Drupal.aguilaDestapa.nid = 0;

    Drupal.aguilaDestapa.toggleVideo = function() {
      document.location = '/user/register';
      /*var myVideo=document.getElementById("video-promo");
      if (myVideo.paused) {
        myVideo.play();
      }
      else {
        myVideo.pause();
      }*/
    }

    Drupal.behaviors.cervezaAguilaDestapa = {
        attach: function (context, settings) {
            if (Drupal.settings.aguilaDestapa.time) {
                $('#countdown-oferta').once('countdown-oferta', function () {
                    $(this).countdown(Drupal.settings.aguilaDestapa.time)
                        .on('update.countdown', function (event) {
                            $('.days .number', this).html(event.offset.totalDays);
                            $('.hours .number', this).html(event.offset.hours);
                            $('.minutes .number', this).html(event.offset.minutes);
                            $('.seconds .number', this).html(event.offset.seconds);
                        })
                        .on('finish.countdown', function (event) {
                            $(this).html(Drupal.t('End!')).parent().addClass('disabled');
                        });
                });
            }

            $('.fb-link').once('fb-link', function () {

                var element_settings = {};
                // Clicked links look better with the throbber than the progress bar.
                element_settings.progress = {'type': 'throbber'};

                // For anchor tags, these will go to the target of the anchor rather
                // than the usual location.

                element_settings.url = $(this).attr('data-share');
                element_settings.event = 'social_link';

                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);

                $(this).click(function (e) {
                    var nid = $(this).attr('data-nid');
                    e.preventDefault();
                    FB.ui({
                      method: 'share',
                      href: $(this).attr('href')
                    },
                    function (response) {
                      if (response != undefined && !response.error_code && !response.error_message) {
                        $('#social-link-' + nid).trigger('social_link');
                      }
                    });
                });
            });

            $('.tw-link').once('tw-link', function () {
                $(this).click(function (e) {
                    Drupal.aguilaDestapa.nid = $(this).attr('data-nid');
                    e.preventDefault();
                    var screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                        screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                        outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
                        outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
                        width = 500,
                        height = 270,
                        left = parseInt(screenX + ((outerWidth - width) / 2), 10),
                        top = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
                        features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;

                    var popupWindow = window.open('https://twitter.com/intent/tweet?text=' + $(this).attr('data-title') + '&url=' + $(this).attr("href"), 'twitter', features);

                    var timer = setInterval(function () {
                        if (popupWindow.closed) {
                            clearInterval(timer);
                            $('#social-link-' + Drupal.aguilaDestapa.nid).trigger('social_link');
                        }
                    }, 1000);

                    if (window.focus) {
                        popupWindow.focus();
                    }
                    return false;
                });
            });

            $('a[href^="#"]', '.main-menu').once('smooth', function () {
                $(this).click(function (event) {

                    // Make sure this.hash has a value before overriding default behavior
                    if (this.hash !== "") {
                        // Prevent default anchor click behavior
                        event.preventDefault();

                        // Store hash
                        var hash = this.hash;

                        // Using jQuery's animate() method to add smooth page scroll
                        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, 800, function () {

                            // Add hash (#) to URL when done scrolling (default click behavior)
                            window.location.hash = hash;
                        });
                    } // End if
                });
            });

            $('.view-lista-videos-promo-destapa ul').once('slick', function () {
                var total = $('.view-lista-videos-promo-destapa ul a.video-active').length;
                $(this).slick({
                    infinite: false,
                    mobileFirst: true,
                    initialSlide: total > 0 ? (total - 1) : 0,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: 'unslick'
                        }
                    ]
                });
            });

            $('ul', '#slider-premios').once('slick', function () {
                $(this).slick({
                    infinite: false,
                    mobileFirst: true,
                    dots: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: 'unslick'
                        }
                    ]
                });
            });

            $('body').once(function() {
              initialize();
            });

            function initialize(){
                //if (window.innerWidth > 1024) {
              loadVideoPromo();
                //}

                if($('html.mobile').length === 0) {
                    loadSickyMenu();
                }
            }

            // Load video promo only on desktop

            function loadVideoPromo() {
              /*var video = $("#video-promo");
              var vid = document.getElementById("video-promo");
              var _name = '';

              if (window.innerWidth > 768) {
                _name = video.attr('data-desktop');
              }
              else {
                _name = video.attr('data-mobile');
              }
              document.getElementById('source-mp4').setAttribute('src', _name + '.mp4');
              document.getElementById('source-webm').setAttribute('src', _name + '.webm');


              vid.load();
              vid.play();*/
            }

            function loadSickyMenu() {

                var menu = new Waypoint.Sticky({
                    element: $('.top-section')[0]
                });


                var wp_capitulos = new Waypoint({
                    element: $('.section-capitulos')[0],
                    handler: function(direction){
                        resetTopMenuClasses();

                        if(direction === 'down') {
                            $('.top-section').addClass('white-background-menu');
                        }
                    },
                    offset: 40
                });

                var wp_ganar = new Waypoint({
                    element: $('.section-ganar')[0],
                    handler: function(direction){
                        resetTopMenuClasses();

                        if(direction === 'down') {
                            $('.top-section').addClass('yellow-background-menu');
                        }
                        else{
                            $('.top-section').addClass('white-background-menu');
                        }
                    },
                    offset: 40
                });

                var wp_premios = new Waypoint({
                    element: $('.section-premios')[0],
                    handler: function(direction){
                        resetTopMenuClasses();

                        if(direction === 'down') {
                            $('.top-section').addClass('yellow-background-menu');
                        }
                        else{
                            $('.top-section').addClass('white-background-menu');
                        }
                    },
                    offset: 40
                });

                var wp_capitulos_menu = new Waypoint({
                    element: $('.section-capitulos')[0],
                    handler: function(direction){
                        resetMenuClasses();

                        if(direction === 'down') {
                            $('.main-menu').addClass('white-background-menu');
                            $('.main-menu li a[href$="#capitulos"]').addClass('active');
                        }
                        else{
                            $('.main-menu li a[href$="#proximo"]').addClass('active');
                        }
                    },
                    offset: '35%'
                });

                var wp_ganar_menu = new Waypoint({
                    element: $('.section-ganar')[0],
                    handler: function(direction){
                        resetMenuClasses();

                        if(direction === 'down') {
                            $('.main-menu').addClass('yellow-background-menu');
                            $('.main-menu li a[href$="#ganar"]').addClass('active');
                        }
                        else{
                            $('.main-menu').addClass('white-background-menu');
                            $('.main-menu li a[href$="#capitulos"]').addClass('active');
                        }
                    },
                    offset: '40%'
                });

                var wp_premios_menu = new Waypoint({
                    element: $('.section-premios')[0],
                    handler: function(direction){
                        resetMenuClasses();

                        if(direction === 'down') {
                            $('.main-menu').addClass('white-background-menu');
                            $('.main-menu li a[href$="#premios"]').addClass('active');
                        }
                        else{
                            $('.main-menu').addClass('yellow-background-menu');
                            $('.main-menu li a[href$="#ganar"]').addClass('active');
                        }
                    },
                    offset: '40%'
                });

                var wp_proximos_menu = new Waypoint({
                    element: $('.section-contador')[0],
                    handler: function(direction){
                        resetMenuClasses();

                        if(direction === 'down'){
                            $('.main-menu').addClass('white-background-menu');
                            $('.main-menu li a[href$="#proximo"]').addClass('active');
                        }
                        else{
                            $('.main-menu li a[href$="#bienvenido"]').addClass('active');
                        }
                    },
                    offset: '40%'
                });
            }

            function resetTopMenuClasses(){
                $('.top-section').removeClass('white-background-menu');
                $('.top-section').removeClass('yellow-background-menu');
            }

            function resetMenuClasses(){
                $('.main-menu li a').removeClass('active');
                $('.main-menu').removeClass('yellow-background-menu');
                $('.main-menu').removeClass('white-background-menu');
            }
        }
    };




})(jQuery);


