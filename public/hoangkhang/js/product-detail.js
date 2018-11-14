jQuery(document).ready(function($) {
    (function(element) {
        var $element = $(element),
            $extraslider = $(".extraslider-inner", $element),
            _delay = 500,
            _duration = 800,
            _effect = 'none ';
        $extraslider.on("initialized.owl.carousel2", function() {
            var $item_active = $(".owl2-item.active", $element);
            if ($item_active.length > 1 && _effect != "none") {
                _getAnimate($item_active);
            } else {
                var $item = $(".owl2-item", $element);
                $item.css({
                    "opacity": 1,
                    "filter": "alpha(opacity = 100)"
                });
            }
            $(".owl2-controls", $element).insertBefore($extraslider);
            $(".owl2-dots", $element).insertAfter($(".owl2-prev", $element));
        });
        $extraslider.owlCarousel2({
            rtl: false,
            margin: 30,
            slideBy: 1,
            autoplay: 0,
            autoplayHoverPause: 0,
            autoplayTimeout: 0,
            autoplaySpeed: 1000,
            startPosition: 0,
            mouseDrag: 1,
            touchDrag: 1,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },
            dotClass: "owl2-dot",
            dotsClass: "owl2-dots",
            dots: false,
            dotsSpeed: 500,
            nav: true,
            loop: false,
            navSpeed: 500,
            navText: ["&#171 ", "&#187 "],
            navClass: ["owl2-prev", "owl2-next"]
        });
        $extraslider.on("translate.owl.carousel2", function(e) {
            var $item_active = $(".owl2-item.active", $element);
            _UngetAnimate($item_active);
            _getAnimate($item_active);
        });
        $extraslider.on("translated.owl.carousel2", function(e) {
            var $item_active = $(".owl2-item.active", $element);
            var $item = $(".owl2-item", $element);
            _UngetAnimate($item);
            if ($item_active.length > 1 && _effect != "none") {
                _getAnimate($item_active);
            } else {
                $item.css({
                    "opacity": 1,
                    "filter": "alpha(opacity = 100)"
                });
            }
        });

        function _getAnimate($el) {
            if (_effect == "none") return;
            //if ($.browser.msie && parseInt($.browser.version, 10) <= 9) return;
            $extraslider.removeClass("extra-animate");
            $el.each(function(i) {
                var $_el = $(this);
                var i = i + 1;
                $(this).css({
                    "-webkit-animation": _effect + " " + _duration + "ms ease both",
                    "-moz-animation": _effect + " " + _duration + "ms ease both",
                    "-o-animation": _effect + " " + _duration + "ms ease both",
                    "animation": _effect + " " + _duration + "ms ease both",
                    "-webkit-animation-delay": +i * _delay + "ms",
                    "-moz-animation-delay": +i * _delay + "ms",
                    "-o-animation-delay": +i * _delay + "ms",
                    "animation-delay": +i * _delay + "ms",
                }).animate({});
                if (i == $el.size() - 1) {
                    $extraslider.addClass("extra-animate");
                }
            });
        }

        function _UngetAnimate($el) {
            $el.each(function(i) {
                $(this).css({
                    "animation": "",
                    "-webkit-animation": "",
                    "-moz-animation": "",
                    "-o-animation": "",
                });
            });
        }
    })("#so_extra_slider_product_related ");
});

$('#tab-related-image').magnificPopup({
    delegate: '.popup-gallery',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') ;
      }
    }
});
jQuery(document).ready(function($){
    if($("#accordion-category-01 .panel .panel-collapse").hasClass("in")){
        $('#accordion-category-01 .panel .accordion-toggle').addClass("show");			
    } 
    else{
        $('#accordion-category-01 .panel .accordion-toggle').removeClass("show");
    }
    
    if($("#accordion-category-02 .panel .panel-collapse").hasClass("in")){
        $('#accordion-category-02 .panel .accordion-toggle').addClass("show");			
    } 
    else{
        $('#accordion-category-02 .panel .accordion-toggle').removeClass("show");
    }
});
$('.thumb-video').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
         youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
              },
          }
      }
});