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
					items: 4
				},
				1200: {
					items: 4
				}
			},
			dotClass: "owl2-dot",
			dotsClass: "owl2-dots",
			dots: false,
			dotsSpeed: 500,
			nav: false,
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
	})("#so_extra_slider_bestseller");
});

jQuery(document).ready(function() {
	setInterval(function() {
		countdown_timer('main_countdown');
	}, 1000)
});