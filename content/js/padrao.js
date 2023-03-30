$(document).on('ready', function() {

    var o = $(".princial-banner");
    $(document).ready(function() {
        o.slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            customPaging: function(slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>0' + (i + 1) + '</a>';
            },
            cssEase: 'linear'
        }), o.slickAnimation()
    });

    $('.slick-ultimas-noticias').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });

    $('.slick-depoimentos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });


    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

});

$(document).ready(function() {

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });


    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }


    AOS.init({
        disable: function() {
            var maxWidth = 767;
            return window.innerWidth < maxWidth;
        }
    });


    document.addEventListener("mousemove", e => {
        AOS.init();
        AOS.refresh();
    });

    $('.mapa-svg-estados').click(function() {
        $(this).siblings().removeClass('mapa-svg-estados-active');
        $(this).addClass('mapa-svg-estados-active');
    })

    $(".box-mapa-click").click(function() {
        var item = $(this).attr("id");
        $(".mapa-box").removeClass("ativo");
        $("." + item).addClass("ativo");
    });

});