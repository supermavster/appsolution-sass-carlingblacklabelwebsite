(function ($) {
  /**
   * Add Drupal behaviors
   */
  Drupal.cervezaAguilaDestapateContent = {};
  Drupal.cervezaAguilaDestapateContent.submit = false;


  Drupal.behaviors.cervezaAguilaDestapateContent = {
    attach: function (context, settings) {
      $('#cerveza-aguila-destapate-form-upload, #cerveza-aguila-destapate-form-video-link, #cerveza-aguila-destapate-form-video-record').once('cerveza-aguila-destapate-validator', function() {
        $(this).validate({
          submitHandler: function(form) {
            Drupal.cervezaAguilaDestapateContent.submit = true;
            form.submit();
          }
        });
      });

      $('#edit-submit').once('edit-submit', function() {
        $(this).click(function(e) {
          if (Drupal.cervezaAguilaDestapateContent.submit) {
            e.preventDefault();
          }
        });
      });
    }
  };
})(jQuery);