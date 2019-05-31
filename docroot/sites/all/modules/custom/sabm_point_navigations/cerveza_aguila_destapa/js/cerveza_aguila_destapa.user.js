(function($) {
  Drupal.ajax.prototype.commands.showModal = function(ajax, data, status) {
    $('body').append(data.html);

    $(data.id).on('hidden.bs.modal', function() {
      $(data.id).remove();
    });

    $(data.id).on('shown.bs.modal', function() {
      Drupal.attachBehaviors();
    });

    $(data.id).modal();
  }
})(jQuery);


