$(document).ready(function() {
	$('body').ihavecookies({
		title: "Cookies & Privacy",
		message: "This website uses cookies to ensure you get the best experience on our website.",
		link: "cookies-policy.html",
		delay: 500,
		expires: 30 // 30 days
	});


	scrolltops();
	$(".scrollto").click(function() {
         $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top
         }, 600);
         return false;
     });



	$('#m1').waypoint(function(direction)
		{
			if(direction=='down'){
				$('.icon-mob').addClass('animated fadeInDirection1').delay(250).queue(function(next){
				    $(this).next().addClass('animated fadeInDirection2').delay(500).queue(function(next){
				    	 $(this).prev().prev().addClass('animated fadeInDirection1');
				    	 next();
				    });
				    next();
				});
			}
		},
		{ offset: 'bottom-in-view' }
	);


	$('#m2').waypoint(function(direction){
		if(direction=='down'){
			$('.icon-rss').addClass('animated circleIn1');
			$('.icon-tel').addClass('animated circleIn2');
			$('.icon-facebook').addClass('animated circleIn3');
			$('.icon-skype').addClass('animated circleIn4');
			$('.icon-twitter').addClass('animated circleIn5');
		}
	},
		{ offset: '80%' }
	);

	$('#m3').waypoint(function(direction){
		if(direction=='down'){
				$('.icon-earth').addClass('animated fadeIn');
				$('.icon-butterfly1').addClass('animated fadeInLeft');
				$('.icon-butterfly2').addClass('animated fadeInRight');
		}
	},
		{ offset: '90%' }
	);

});
$(window).load(function() {

	$('#did-slider').flexslider({
		animation: "slide",
		//easing: "easeInOutExpo",
		animationSpeed: 400,
		directionNav: false,
		controlNav: false,
		slideshow: false,
		animationLoop: true,
		touch: false,
	    start: function(slider) {
		    $('#did-slider-btns .link').click(function(event){
		        event.preventDefault();
		        slider.flexAnimate(slider.getTarget("next"));
		    });
	    }
	});


	$('#did-slider-btns').flexslider({
		animation: "fade",
		//easing: "easeInOutExpo",
		animationSpeed: 400,
		directionNav: false,
		controlNav: false,
		slideshow: false,
		animationLoop: true,
		touch: false,
	    start: function(slider) {
		    $('#did-slider-btns .link').click(function(event){
		        event.preventDefault();
		        slider.flexAnimate(slider.getTarget("next"));
		    });
	    }
	});

});

$(window).scroll(function() {
     scrollBanner();
});

function scrolltops() {	
	/* var scrollTopPosition = jQuery('.top').offset().top;
		jQuery('.btn-top').click(function(){
		jQuery('html, body').animate({scrollTop:scrollTopPosition}, 'slow');
		return false;
	});*/
}

///////////////////////////////
// Parallax
///////////////////////////////

// Calcualte the home banner parallax scrolling
  function scrollBanner() {
    //Get the scoll position of the page
    scrollPos = jQuery(this).scrollTop();
    //Scroll the background of the banner
    val = Math.round(scrollPos/50);
    jQuery('.header-holder').css({
      '-webkit-filter' : 'blur('+ (val) +'px) '
    });   
    jQuery('.background-image').css({
      '-moz-filter' : 'blur('+ (val) +'px) '
    });   
    jQuery('.background-image').css({
      '-o-filter' : 'blur('+ (val) +'px) '
    });   
    jQuery('.background-image').css({
      '-ms-filter' : 'blur('+ (val) +'px) '
    });   
    jQuery('.background-image').css({
      'filter' : 'blur('+ (val) +'px) '
    });   
  }
