$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if ($(this).attr("href") == "#myCarousel") return; //This is the exception
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1400);
                return false;
            }
        }
    });
});


$.fn.extend({
    toggleText: function(text2, text1) {
        var $el = $(this);
        $el.text($el.text() == text2 ? text1 : text2);
    }
});

$(document).ready(function() {

    $("#dishes button:first").click(function() {
        $(this).toggleText("DELICIOUS", "FISH");

    });

    $("#dishes button:eq(1)").click(function() {
        $(this).toggleText("DELICIOUS", "OCTOPUS");

    });

    $("#dishes button:eq(2)").click(function() {
        $(this).toggleText("DELICIOUS", "TOMATOS");

    });

    $("#dishes button:eq(3)").click(function() {
        $(this).toggleText("DELICIOUS", "FIGS");

    });

    $("#dishes button:eq(4)").click(function() {
        $(this).toggleText("DELICIOUS", "GOZLEME");

    });

    $("#dishes button:eq(5)").click(function() {
        $(this).toggleText("DELICIOUS", "CREPES");

    });
});

$(document).ready(function() {
    $(".navbar-brand").click(function() {
        $(".navbar-brand").css("font-size", "18px");
        $(this).animate({
            "font-size": "24px"
        });
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 2500) {
        $(".jumbotron").css("background-image", "url(img/bg.JPG)");
    } else {
        $(".jumbotron").css('background-image', '');
        $(".jumbotron").css("background-color", "white");
    }
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $(".navbar-brand").css("background-image", "url(img/bg.JPG)");
        $(".navbar-brand").css("opacity", "1.0");
    } else {
        $(".navbar-brand").css('background-image', '');
        $(".navbar-brand").css("background-color", "#5ebf83");
        $(".navbar-brand").css("opacity", "0.8");
    }
});


$(function() {
    $('#footer_body').on('show', function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
    });
});


function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(42.0605100, 27.9749700),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
