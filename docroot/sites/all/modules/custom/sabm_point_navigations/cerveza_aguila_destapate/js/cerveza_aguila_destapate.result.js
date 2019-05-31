(function ($) {
  /**
   * Add Drupal behaviors
   */
  Drupal.cervezaAguilaDestapate = {};
  Drupal.cervezaAguilaDestapate.submit = false;


  Drupal.behaviors.cervezaAguilaDestapate = {
    attach: function (context, settings) {

      $('.fb-link').once('fb-link', function () {
        $(this).click(function (e) {
          e.preventDefault();
          FB.ui({
              method: 'share',
              href: $(this).attr('href')
            },
            function (response) {
            });
        });
      });

      $('.tw-link').once('tw-link', function () {
        $(this).click(function (e) {
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

          var popupWindow = window.open('https://twitter.com/intent/tweet?text=' + $(this).attr('data-title') + '&url=' + $(this).attr("href") + '&hashtags=SinMiedo', 'twitter', features);

          if (window.focus) {
            popupWindow.focus();
          }
          return false;
        });
      });
    }
  };
})(jQuery);
