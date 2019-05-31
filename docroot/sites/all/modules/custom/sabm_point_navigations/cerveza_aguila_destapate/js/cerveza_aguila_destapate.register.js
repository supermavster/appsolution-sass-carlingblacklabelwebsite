var fields = ['name', 'lastname', 'type', 'document', 'day', 'month', 'year', 'gender', 'city', 'email', 'phone', 'category'];
(function ($) {
  /**
   * Add Drupal behaviors
   */
  Drupal.cervezaAguilaDestapate = {};
  Drupal.cervezaAguilaDestapate.submit = false;


  Drupal.behaviors.cervezaAguilaDestapate = {
    attach: function (context, settings) {
      $('body').once('cerveza-aguila-destapate-register', function() {
        $('#edit-email').attr('type', 'email');

        $.each(fields, function(index, value) {
          console.log(value);
          $('#edit-' + value).val($.cookie(value));
        });
      });

      $('#cerveza-aguila-destapate-form-register').once('cerveza-aguila-destapate-form-register', function() {

        $(this).validate({
          submitHandler: function(form) {
            if ($("#edit-remember").is(':checked')) {
              $.each(fields, function(index, value) {

                $.cookie(value, $('#edit-' + value).val(), {expires: 2 });
              });
            }
            else {
              $.each(fields, function(index, value) {
                $.cookie(value, '');
              });
            }

            Drupal.cervezaAguilaDestapate.submit = true;
            form.submit();
          }
        });
      });

      $('#edit-submit').once('edit-submit', function() {
        $(this).click(function(e) {
          if (Drupal.cervezaAguilaDestapate.submit) {
            e.preventDefault();
          }
        });
      });
    }
  };
})(jQuery);
