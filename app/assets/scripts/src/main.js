/*
 *
 * Foundation
 * ----------------------- */
$(document).foundation();

/*
 *
 * Functions
 * ----------------------- */
var engineCarousel = function(){
	var heroCarouselImage = $('#hero .hero__carousel-image');
	var heroCarouselInfo = $('#hero .hero__carousel-info');
	var bookingCarousel = $('#booking .booking__carousel');
	var bookingInternalCarousel = $('#internal-booking .booking__carousel');

	heroCarouselImage.owlCarousel({
		items: 1,
		lazyLoad: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dotsClass: 'hero__carousel-dots',
		dotClass: 'hero__carousel-dot',
	}).on('changed.owl.carousel', function (e) {
      	heroCarouselInfo.trigger('to.owl.carousel', [e.item.index, 100]);
  	});

	heroCarouselInfo.owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});


	heroCarouselImage.on('change.owl.carousel', function(event) {
		if (event.namespace && event.property.name === 'position') {
			var target = event.relatedTarget.relative(event.property.value, true);
				heroCarouselInfo.owlCarousel('to', target, 300, true);
			}
		}
	)

	bookingCarousel.owlCarousel({
		lazyLoad: true,
		autoplay: false,
		loop: true,
		pagination: false,
	    stagePadding: 0,
	    dots: true,
	    margin: 5,
		dotsClass: 'booking__carousel-dots',
		dotClass: 'booking__carousel-dot',
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		responsive:{
			0:{
			  items:1
			},
			500:{
			  items:2
			},
			800:{
			  items:3
	      	}
	    }
	});

	bookingInternalCarousel.owlCarousel({
		items: 1,
		lazyLoad: true,
		autoplay: false,
		loop: true,
		pagination: false,
    dots: true,
		dotsClass: 'booking__carousel-dots',
		dotClass: 'booking__carousel-dot',
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});
}

var engineFullPage = function(){
	console.log('engineFullPage');

	if ($('#fullpage').length > 0) {
		var anchors = [];

		$('section.section').each(function(){
			anchors.push($(this).attr('data-section'));
		});

		var oldSlimScroll = $.fn.slimScroll;
		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

		$.fn.slimScroll = function( options ){
		  options.wheelStep = (($(window).width() <= 640 || isMobile) ? 100 : 10);
		  options.touchScrollStep = 150;
		  return oldSlimScroll.apply(this, [options] );
		};
    $('#fullpage').fullpage({
    	anchors: anchors,
    	css3: true,
			scrollOverflow: true,
      navigation: true,
      wheelStep: 200,
      afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
      	var loadedSectionInfo = $('#' + loadedSection.attr('data-section') + '-info');

        $('.hero-info').removeClass('active');
        loadedSectionInfo.addClass('active');
      },
      onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);

        if(nextIndex == anchors.length){
        	$('body').addClass('out-hero');
        } else {
        	$('body').removeClass('out-hero');
        }
      }
		});
	}
}

var engineDividers = function(){
	width = $( window ).width();
	$('#content .divider span.before').css("border-right-width", (width / 100) * 32);
	$('#content .divider span.after').css("border-left-width", (width / 100) * 68);

	$('#social .divider span.before').css("border-right-width", (width / 100) * 72);
	$('#social .divider span.after').css("border-left-width", (width / 100) * 28);
}

/*
 *
 * Document Ready
 * ----------------------- */
$(document).ready(function() {
});

$(document).on('click', '#mobile-menu-anchor', function(ev){
	ev.preventDefault();
	el = $(this);
	mobileMenu = $('#mobile-menu');
	mobileMenu.addClass('opened');
})

$(document).on('click', '.mobile-menu__close', function(ev){
	ev.preventDefault();
	el = $(this);
	mobileMenu = $('#mobile-menu');
	mobileMenu.removeClass('opened');
})

$(document).on('click', '.accessories__carousel-control-previous', function(ev){
	ev.preventDefault();

	var owl;
	owl = $('.accessories__carousel .accessories__carousel-content').data('owlCarousel');
 	return owl.prev();
})

$(document).on('click', '.accessories__carousel-control-next', function(ev){
	ev.preventDefault();

	var owl;
	owl = $('.accessories__carousel .accessories__carousel-content').data('owlCarousel');
	return owl.next();
})

/*
 *
 * Window Resize
 * ----------------------- */
$(window).resize(function(){
});
