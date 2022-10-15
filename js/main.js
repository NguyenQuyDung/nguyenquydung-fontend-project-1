$(document).ready(function() {
    $("#home-slide").carousel({
        ride: "carousel"
    });
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                660: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    });
});