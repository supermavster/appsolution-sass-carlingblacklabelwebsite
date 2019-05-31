(function($) {
  Drupal.aguilaDestapaVideo = Drupal.aguilaDestapaVideo || {};
  Drupal.aguilaDestapaVideo.showVideo = false;
  Drupal.aguilaDestapaVideo.player = null;
  Drupal.aguilaDestapaVideo.showPlayerVideo = false;
  Drupal.aguilaDestapaVideo.play0 = false;
  Drupal.aguilaDestapaVideo.play25 = false;
  Drupal.aguilaDestapaVideo.play50 = false;
  Drupal.aguilaDestapaVideo.play75 = false;
  Drupal.behaviors.cervezaAguilaDestapaVideo = {
    attach: function(context, settings) {
      $('a.video-active:last').once(function() {
        if (Drupal.settings.aguilaDestapa.openModalVideo) {
          $(this).trigger('click');
        }
      });

      $('#my-player-vimeo').once('my-player-vimeo', function() {
        Drupal.aguilaDestapa.showVideo = false;
        Drupal.aguilaDestapaVideo.play0 = false;
        Drupal.aguilaDestapaVideo.play25 = false;
        Drupal.aguilaDestapaVideo.play50 = false;
        Drupal.aguilaDestapaVideo.play75 = false;
        Drupal.aguilaDestapaVideo.play75 = false;
        var options = {
          id: Drupal.settings.videoID,
          width: 748,
          loop: false
        };

        Drupal.aguilaDestapaVideo.player = new Vimeo.Player('my-player-vimeo', options);

        Drupal.aguilaDestapaVideo.player.setVolume(70);

        Drupal.aguilaDestapaVideo.player.on('play', function() {
          dataLayer.push({
            'event': 'video',
            'eventCategory': 'video',
            'eventAction': Drupal.settings.videoTitle,
            'eventLabel': 'play'
          });
        });

        Drupal.aguilaDestapaVideo.player.on('timeupdate', function(e) {
          if (!Drupal.aguilaDestapaVideo.play0 && e.percent > 0) {
            Drupal.aguilaDestapaVideo.play0 = true;
            dataLayer.push({
              'event': 'video',
              'eventCategory': 'video',
              'eventAction': Drupal.settings.videoTitle,
              'eventLabel': '0%'
            });
          }

          if (Drupal.aguilaDestapaVideo.play0  && !Drupal.aguilaDestapaVideo.play25 && e.percent >= 0.25) {
            Drupal.aguilaDestapaVideo.play25 = true;
            dataLayer.push({
              'event': 'video',
              'eventCategory': 'video',
              'eventAction': Drupal.settings.videoTitle,
              'eventLabel': '25%'
            });
          }

          if (Drupal.aguilaDestapaVideo.play25 && !Drupal.aguilaDestapaVideo.play50 && e.percent >= 0.5) {
            Drupal.aguilaDestapaVideo.play50 = true;
            dataLayer.push({
              'event': 'video',
              'eventCategory': 'video',
              'eventAction': Drupal.settings.videoTitle,
              'eventLabel': '50%'
            });
          }

          if (Drupal.aguilaDestapaVideo.play50 && !Drupal.aguilaDestapaVideo.play75 && e.percent >= 0.75) {
            Drupal.aguilaDestapaVideo.play75 = true;
            dataLayer.push({
              'event': 'video',
              'eventCategory': 'video',
              'eventAction': Drupal.settings.videoTitle,
              'eventLabel': '75%'
            });
          }

          if (!Drupal.aguilaDestapa.showVideo && e.percent >= 0.5) {
            Drupal.aguilaDestapa.showVideo = true;
            /*Drupal.aguilaDestapaVideo.player.pause();
            $('#my-player-vimeo').trigger('question-type-1');*/
          }
        });

        Drupal.aguilaDestapaVideo.player.on('ended', function(e) {
          dataLayer.push({
            'event': 'video',
            'eventCategory': 'video',
            'eventAction': Drupal.settings.videoTitle,
            'eventLabel': '100%'
          });

          var element_settings = {};
          // Clicked links look better with the throbber than the progress bar.
          element_settings.progress = { 'type': 'throbber' };

          // For anchor tags, these will go to the target of the anchor rather
          // than the usual location.

          element_settings.url = Drupal.settings.pathQuiz;
          element_settings.event = 'quiz';
          var base = 'my-player-vimeo';
          Drupal.ajax[base] = new Drupal.ajax(base, $('#my-player-vimeo'), element_settings);
          $('#my-player-vimeo').trigger('quiz');
        });

        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = { 'type': 'throbber' };

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.

        element_settings.url = Drupal.settings.pathQuestion;
        element_settings.event = 'question-type-1';

        var base = $(this).attr('id');
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
      });
    }
  }

  Drupal.ajax.prototype.commands.pushDataLayer = function(ajax, data, status) {
    dataLayer.push({
      'event': data.event,
      'eventCategory': data.eventCategory,
      'eventAction': data.eventAction,
      'eventLabel': data.eventLabel
    });
  };

  Drupal.ajax.prototype.commands.closeModal = function(ajax, data, status) {
    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
    });

    $(data.id).modal('hide');
  }

  Drupal.ajax.prototype.commands.showModal = function(ajax, data, status) {
    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    //alert(data.id);

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.showModalVideo = function(ajax, data, status) {
    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      if (!Drupal.aguilaDestapaVideo.showPlayerVideo) {
        $(data.id).remove();
        //var vid = document.getElementById("video-promo");
        //vid.play();
        if (Drupal.aguilaDestapaVideo.player != null) {
          Drupal.aguilaDestapaVideo.player.pause();
          Drupal.aguilaDestapaVideo.player = null;
        }
      }
    });

    $(data.id).on('shown.bs.modal', function() {
      //var vid = document.getElementById("video-promo");
      //vid.pause();
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.showModalQuestion = function(ajax, data, status) {
    Drupal.aguilaDestapaVideo.showPlayerVideo = true;
    $('#modal-preview-video').modal('hide');

    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
      if (Drupal.aguilaDestapaVideo.showPlayerVideo) {
        $('#modal-preview-video').modal('show');
        Drupal.aguilaDestapaVideo.player.play();
        Drupal.aguilaDestapaVideo.showPlayerVideo = false;
      }
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.showModalQuestionSuccess = function(ajax, data, status) {
    Drupal.aguilaDestapaVideo.showPlayerVideo = false;

    $('#modal-question-type-1').modal('hide');

    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
      $('#modal-preview-video').modal('show');
      Drupal.aguilaDestapaVideo.player.play();
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.showModalQuiz = function(ajax, data, status) {
    Drupal.aguilaDestapaVideo.showPlayerVideo = false;
    $('#modal-preview-video').modal('hide');

    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.showModalQuizSuccess = function(ajax, data, status) {
    $('#modal-quiz').modal('hide');

    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.showModalQuizFailed = function(ajax, data, status) {
    $('#modal-quiz').modal('hide');

    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }

  Drupal.ajax.prototype.commands.continueVideo = function(ajax, data, status) {
    $('#modal-question-type-1').remove();
    $('#modal-preview-video').show();
    Drupal.aguilaDestapaVideo.player.play();
  }



})(jQuery);


