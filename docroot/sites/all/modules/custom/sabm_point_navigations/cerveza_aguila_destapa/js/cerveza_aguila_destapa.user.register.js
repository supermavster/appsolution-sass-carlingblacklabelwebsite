(function ($) {
  $(document).ready(function () {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.image-style-thumbnail').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#edit-picture-upload").change(function () {
      readURL(this);
    });
  });
})(jQuery);

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
          $('#edit-field-apellidos').val(response.last_name);
          $('#edit-mail').val(response.email);
          $('input[name="fbtoken"]').val(FB.getAccessToken());
        });
      }
    });
  }

  Drupal.behaviors.cervezaAguilaDestapaRegister = {
    attach: function (context, settings) {
      $('edit-field-telefono-movil-und-0-value').attr('type', 'number');
      $('#user-profile-form').once(function() {
        if (Drupal.settings.isLogin) {
          $('#edit-current-pass').attr("placeholder", "Contraseña Actual");
          $('#edit-pass-pass1').attr("placeholder", "Nueva Contraseña");
          $('#edit-pass-pass2').attr("placeholder", "Confirmar Nueva Contraseña");

        }
        else {
          $('#edit-pass-pass1').attr("placeholder", "Contraseña");
          $('#edit-pass-pass2').attr("placeholder", "Confirmar Contraseña");
        }
      });
    }
  }



})(jQuery);