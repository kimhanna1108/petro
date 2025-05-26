$(document).ready(function () {

    //Mobile navbar toggle
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

    //Adding overlay for desktop
    $('.dropdown').click(function () {
        if ($(this).hasClass("open")) {
            $('.page-wrapper').removeClass("overlay-wrapper");
        } else {
            $('.page-wrapper').addClass("overlay-wrapper");
        }
    });

    $('.navbar-toggle').click(function () {
        if ($(this).hasClass("active")) {
            $('.page-wrapper').addClass("overlay-wrapper");
        } else {
            $('.page-wrapper').removeClass("overlay-wrapper");
        }
    });

    $('body').on('click', function (e) {
        var target = $(e.target);
        if (target.parents(".nav-item.dropdown").length == 0) {
            $('.page-wrapper').removeClass("overlay-wrapper");
        }
    });

    //Footer disable collapse click
    function disableCollapseClick() {
        $('.footer-panel-title a').css('pointer-events', 'none');
    }

    var elementMobile = ".nav-toggle.nav-mobile-item";
    if ($(elementMobile).css('display') == 'none' || $(elementMobile).css("visibility") == "hidden") {
        disableCollapseClick();
    }
});