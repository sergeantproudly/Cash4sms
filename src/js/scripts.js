var __widthMobile = 1000;
var __widthMobileTablet = 820;
var __widthMobileMobile = 540;
var __isMobile = ($(window).width() <= __widthMobile);
var __isMobileTablet = ($(window).width() <= __widthMobileTablet);
var __isMobileMobile = ($(window).width() <= __widthMobileMobile);
var __animationSpeed = 350;

function initElements(element) {
	$element=$(element ? element : 'body');

	$(window).on('resize', function(){
		onResize();
	});
}
function onResize() {
	__isMobile = ($(window).width() <= __widthMobile);
	__isMobileTablet = ($(window).width() <= __widthMobileTablet);
	__isMobileMobile = ($(window).width() <= __widthMobileMobile);
}

function scrollReset() {
	$('html, body').scrollTop(0);
}

function _scrollTo(target, offset) {
	var wh = $(window).height();
	if (typeof(offset) == 'undefined') offset =- Math.round(wh/2);
	else if (offset === false) offset = 0;
	$('html, body').animate({
		scrollTop: $(target).offset().top + offset
	}, 1000);
}

(function ($) {
	$(function () {
		initElements();
		onResize();

		if (typeof(WOW) != 'undefined') {
			new WOW().init();
		}

		$('.js-anchor').click(function(e) {
			e.preventDefault();
			_scrollTo($(this).attr('href'), -$(window).height()/12);
		});

		// phone slides
		var autoplaySpeed = $('#phone').attr('data-autoplay-speed') * 1000;
		$('#phone ul').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			fade: true,
  			cssEase: 'linear',
  			arrows: false,
  			dots: false,
  			autoplay: true,
  			autoplaySpeed: autoplaySpeed
		}).on('beforeChange', function(e, slick, currIndex, nextIndex) {
			$('#steps-list li').removeClass('curr');
			$('#steps-list li:lt(' + nextIndex + ')').addClass('active');
			$('#steps-list li:eq(' + nextIndex + ')').addClass('curr active');
			$('#steps-list li:gt(' + nextIndex + ')').removeClass('active');
		});
		$('#steps-list li').on('mouseenter', function() {
			var index = $('#steps-list li').index(this);
			$('#phone ul').slick('slickGoTo', index);
		});

		// tariffs warning
		if ($('#tariffs-warning').length) {
			$warning = $('#tariffs-warning');
			$warning.find('.step .btn').click(function(e) {
				e.preventDefault();
				e.stopPropagation();

				var $curr = $(this).closest('.step');
				var $next = $curr.next('.step');
				if ($next.length) {
					$warning.removeClass('step' + $curr.attr('data-index')).css('width', 'auto');
					$curr.stop().fadeOut(__animationSpeed, function() {	
						$next.stop().fadeIn(__animationSpeed);
						var w = $next.outerWidth(true);
						$warning.css('width', w).addClass('step' + $next.attr('data-index'));
					});
				} else {
					$warning.removeClass('slideInLeftDouble').addClass('slideOutLeftDouble');
				}
			});
		}
	})
})(jQuery)