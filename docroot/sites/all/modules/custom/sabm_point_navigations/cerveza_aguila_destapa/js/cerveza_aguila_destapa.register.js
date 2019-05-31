(function ($) {

  /**
   * Add Drupal behaviors
   */
  Drupal.cervezaAguilaDestapaRegister = {};
  Drupal.cervezaAguilaDestapaRegister.onLoginFB = function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        FB.api('/me', {fields: 'email,first_name,last_name'}, function(response) {
          $('#edit-field-nombres-und-0-value').val(response.first_name);
          $('#edit-field-apellidos-und-0-value').val(response.last_name);
          $('#edit-mail').val(response.email);
          $('input[name="fbtoken"]').val(FB.getAccessToken());
        });
      }
    });
  }



})(jQuery);