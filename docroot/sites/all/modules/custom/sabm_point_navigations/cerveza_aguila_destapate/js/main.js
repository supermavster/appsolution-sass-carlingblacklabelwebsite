(function ($) {
  Drupal.behaviors.cervezaAguilaDestapateMain = {
    attach: function (context, settings) {
      $(".btn-stop-propagation").click(function( event ) {
        event.stopPropagation();
      });

      $(function () {
        console.log('ready!')

        var
          forms = [
            '#cerveza-aguila-destapate-form-upload',
            '#cerveza-aguila-destapate-form-video-link',
          ],
          $inputFile = $('input[type="file"]'),
          $labelFile = $('.form-type-managed-file').find('> label'),
          $imgFile = $('.form-type-managed-file').find('img')

        forms.forEach(function (form, index) {

          var $inputFormFile = $(form).find($inputFile)
          $inputFormFile.addClass('destapate-btn--file destapate-btn--hidden')
          $inputFormFile.after(
            '<a class="destapate-btn--file destapate-btn--absolute">Selecciona tu video o imagen</a>')

          if (form === '#cerveza-aguila-destapate-form-video-link') {
            var inputSize = $(form).
              find('.destapate-btn--absolute').
              outerHeight()
            $(form).find('.form-managed-file').addClass('col')
            $labelFile.after(
              '<figure>' +
              '<img src="">' +
              '</figure>')
            var figure = $(form).find('figure')
            figure.css({'height': inputSize + 'px', 'width': inputSize + 'px'})
          }

          if ($('body.page-destapate.page-destapate-upload').length > 0) {
            $labelFile.hide()
          }

          $inputFormFile.change(function () {

            if (this.files && this.files[0]) {

              if ($('body.page-destapate.page-destapate-upload').length > 0) {
                $labelFile.text($(this)[0].files[0].name)
                $labelFile.fadeIn()

              }
              else if ($(
                'body.page-destapate.page-destapate-video-link').length >
                0) {
                var reader = new FileReader()
                reader.onload = function (e) {
                  var $img = $(form).find('img')
                  $img.attr('src', e.target.result)
                  $img.fadeIn()
                }
                reader.readAsDataURL(this.files[0])
              }

            }
          })

        })

        if ($('body.page-destapate.page-destapate-video-link').length > 0) {
          $('.destapate-btn--absolute').
            text('selecciona una imagen para tu video')
        }

      })


      //add active to gallery menu
        $('.destapate-c-tabs__list li').each(function(){

            if ( $(this).find('a').attr('href') == window.location.pathname ) {

                $('.destapate-c-tabs__list li').removeClass('active-tab');
                $(this).addClass('active-tab');
            }

        });

        //end

        //validate terms
        $('#cerveza-aguila-destapate-form-register input[type="submit"]').attr('disabled',true);
        $('.form-item-terms .option').click(function () {
            if ($('#edit-terms').prop('checked')){
                $('#cerveza-aguila-destapate-form-register input[type="submit"]').attr('disabled', true);
            } else {
                $('#cerveza-aguila-destapate-form-register input[type="submit"]').attr('disabled', false);
            }
        });
        //end
    },
  }
})(jQuery)