$(document).ready(function () {

    //add class img-fluid
    $('.site-main .project-area .our-project .img img').addClass('img-fluid')

    let navActive = $('.header-area .main-menu .navbar .navbar-nav .nav-item a')
    navActive.click((e) => {
        navActive.removeClass('nav-active')
        e.target.classList.add('nav-active')
    })

    let btns = $('.project-area .button-group button')
    btns.click((e) => {
        $('.project-area .button-group button').removeClass('btn-active')
        e.target.classList.add('btn-active')

        let selector = $(e.target).attr('data-filter')
        // console.log(selector)
        $('.project-area .grid').isotope({

            filter: selector

        })
        return false;

    })

    // Galery swipe
    // $('.project-area .button-group #btn1').trigger('click')

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

    // owl-carousel
    $(".site-main .about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    // sticky navigation menu
    let nav_offset_top = $('.header-area').height();

    (function () {

        if ($('.header-area').length) {
            $(window).scroll(() => {
                let scroll = $(window).scrollTop()
                if (scroll > nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar_fixed')
                } else {
                    $('.header-area .main-menu').removeClass('navbar_fixed')
                }
            })
        }

    })();




})