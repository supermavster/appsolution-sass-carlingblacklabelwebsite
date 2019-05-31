console.log('Record....')

var recorder = null, videoToken = null, videoUploadURL = null,
  showModal = false, isMobile = false, upload = true;

window.ziggeoApi = new ZiggeoApi.V2.Application({
  token: 'e8507321a2091bbf95c16b244e0371cb',
  auth: false,
  analytics: false,
  disable_secure_templates: true
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent)) {
  isMobile = true
}

ZiggeoApi.V2.Locale.mediaLocale.register({"ba-videorecorder-chooser.record-video": "INICIAR GRABACIÓN"}, 10);

ZiggeoApi.V2.Application.getDefault().once('ready', function () {


  if (isMobile) {
    jQuery('.ba-videorecorder-theme-modern-chooser-icon-container, .ba-videorecorder-theme-modern-chooser-button-1').hide();
    jQuery('.ba-videorecorder-theme-modern-chooser-button-container').show();
    jQuery('.btn-start').hide();
  }

  console.log('ready');

  recorder = ZiggeoApi.V2.Recorder.findByElement(document.getElementById('recorder'));

  recorder.on('recording', function () {
    upload = true;
    jQuery('.group-record-initial').hide();
    jQuery('.group-record').show();
    jQuery('.custom-controls-bar').show()
  });

  recorder.on('access_granted', function () {
    recorder.record();
  });

  recorder.on('processing', function () {
    console.log('processing');
  });

  recorder.on('processed', function () {
    console.log('processed');
  });

  recorder.on('loaded', function () {
    console.log('loaded');
  });

  recorder.on('recording_progress', function (time) {
    var _time = time / 1000;

    var percentage = Math.round(
      _time / Drupal.settings.cervezaAguilaDestapate.time * 100)

    jQuery('.time-current').css('left', percentage + '%');

    jQuery('#percentage-play').css('width', percentage * 100 + '%');

    _time = Math.round(_time);

    jQuery('.time-current .time').
      html('00:' + (_time > 9 ? _time : '0' + _time))
  });

  recorder.on('verified', function () {
    if (upload) {
      videoToken = recorder.get('video');
      location.href = Drupal.settings.cervezaAguilaDestapate.next +
        '?videoToken=' + videoToken
    }
  });

  recorder.on('upload_progress', function (uploaded, total) {
    if (upload) {
      var percentage = Math.round(uploaded / total * 100);
      if (!showModal) {
        showModal = true;
        jQuery('#modal-uploading').modal('show');
      }

      if (percentage <= 98) {
        jQuery('#percentage-uploading').
          html('<span>' + percentage + '%</span>');
      }
    }
  })
});

(function ($) {
  Drupal.cervezaAguilaDestapate = Drupal.cervezaAguilaDestapate || {}

  Drupal.behaviors.cervezaAguilaDestapate = {
    attach: function (context, settings) {
      $('body').once('btn-controls', function () {

        $('.btn-start').click(function (e) {
          e.preventDefault();
          recorder.record();
        });

        $('.btn-stop').click(function (e) {
          e.preventDefault();
          recorder.stop();
        });

        $('.btn-retry').click(function (e) {
          e.preventDefault();
          recorder.reset();
        });
      });
    }
  }
})(jQuery);

