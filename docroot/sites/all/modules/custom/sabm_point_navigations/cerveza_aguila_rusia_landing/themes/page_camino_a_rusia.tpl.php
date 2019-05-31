<div class="content-wins">
    <div class="desktop">
        <img src="https://www.cervezaaguila.com//sites/cervezaaguila/files/desktop-ganadores-camino-rusia.jpg">
    </div>
    <div class="mobile">
        <img src="https://www.cervezaaguila.com//sites/cervezaaguila/files/mobile-ganadores-camino-rusia.jpg">
    </div>
</div>

<script>
    jQuery(document).ready(function () {
        jQuery(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            jQuery('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    });
</script>