jQuery(document).ready(function () {


	var cont = 1;
	jQuery(".header .btn-menu").click(function() {
		jQuery(this).toggleClass('open');
		jQuery('.header').toggleClass('static');

		if(cont%2 == 0 ){
			jQuery('.header .header-nav').hide(200);
		}else{
			jQuery('.header .header-nav').show(200);
		}
		cont = cont + 1;
	});

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

});