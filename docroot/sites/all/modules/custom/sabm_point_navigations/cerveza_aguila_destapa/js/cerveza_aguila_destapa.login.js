(function ($) {
  Drupal.cervezaAguilaDestapaLogin = {};
  Drupal.cervezaAguilaDestapaLogin.onLoginFB = function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        document.location = '/user/login-fb?code=' + FB.getAccessToken();
      }
    });
  }
})(jQuery);