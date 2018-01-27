/**
 * Created by kola on 1/20/2017.
 */
$(function () {

    var controller = new ScrollMagic.Controller();

    var navigationScene = new ScrollMagic.Scene({
        triggerElement: '.hero-headline',
        offset: 250
    });

    var navLinksScene = new ScrollMagic.Scene({
        triggerElement: '.hero-headline',
        offset: 250
    });

    function openAboutOverlay() {
        $("#about-overlay").css('height', '100%');
    }

    function closeAboutOverlay() {
        $("#about-overlay").css('height', '0');
    }

    $('.js-about-open').click(openAboutOverlay);
    $('.js-about-close-btn').click(closeAboutOverlay);


    navigationScene.setClassToggle('.navigation', 'change-bg').addTo(controller);

    navLinksScene.setClassToggle('#nav-links li a', 'change-color').addTo(controller);

    $('.section').each(function () {
        var sectionScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: true
        });

        sectionScene
            .setClassToggle(this, 'fadeInUp')
            .addTo(controller);

    });

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});