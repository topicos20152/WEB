var isMobile = false; //initiate as false

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

if(window.matchMedia("only screen and (max-width: 760px)").matches) isMobile = true;

/*
 * Scroll To
 *
 * When a 'data-scroll-to' element is
 * activated (by click), scroll page to
 * his element.
 *
 * data-scroll-to="#<id>"
 * data-offset="<offset>"
 * data-time="<time>"
 *
 * ------------------------------ */

var scrollTo = function(target, diff) {
  diff = diff || 0;

  scope = $('html, body');

  scope.animate({
    scrollTop: target.offset().top - diff
  }, 500);

}

 $(document).ready(function(ev){
   $('[data-scroll-to]').css('cursor', 'pointer');
 });

 $(document).on('click', '[data-scroll-to]', function(ev) {
  ev.preventDefault();

  var target = $($(this).attr('data-scroll-to'));
  var diff = $(this).attr('data-scroll-diff');

  if (!diff) {
    diff = 0;
  }

  if ( $(this).closest('.fixed-navbar').length > 0 ) {
    diff = 94;
  }

  scrollTo(target, diff);
});

$('#benefits ul li').mouseenter(function(){
  el = $(this);

  anchor = el.find('a');

  anchor.trigger('click');
});

(function() {
    var clickable = {
        elements: document.querySelectorAll('[data-href]'),

        redirect_to: function(href, target) {
            target = target || "";
            clickable.simulate_anchor(href, target);
        },

        simulate_anchor: function(href, target) {
            var anchor = document.createElement("a");
            anchor.setAttribute('href', href);
            anchor.setAttribute('target', target);
            anchor.click();
        },

        init: function() {
            for (var i = 0; i < this.elements.length; i++) {
                var element = this.elements[i];
                element.style.cursor = 'pointer';
                element.addEventListener('click', function() {
                    if ($(this).attr('data-target') == "_blank") {
                        var win = window.open($(this).attr('data-href'), '_blank');
                        win.focus();
                    } else {
                        window.location = $(this).attr('data-href');
                    }
                    // clickable.redirect_to(
                    //     this.getAttribute('data-href'),
                    //     this.getAttribute('data-target')
                    // );
                }, false);
            }
        }
    };

    clickable.init();
})();
$(document).on('click', '.close-button', function(el){
  el.preventDefault();
  el = $(this);

  el.closest('.message').hide();
});

var geocoder = new google.maps.Geocoder();

function getGeoState() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
}

function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  return codeLatLng(lat, lng);
}

function errorFunction(){
  console.log("Geocoder failed!");

  return null;
}

function codeLatLng(lat, lng) {
  console.log("Calculating Geolocation...");

  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        for (var i=0; i<results[0].address_components.length; i++) {
          for (var b=0;b<results[0].address_components[i].types.length;b++) {

            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
              city= results[0].address_components[i];
              break;
            }
          }
        }
        engineAfterGeo(city);
      } else {
        console.log("No results found");
      }
    } else {
      console.log("Geocoder failed due to: " + status);
    }
  });

  return null;
}

function engineAfterGeo(city) {
  $stateSelect = $('#state');

  $stateSelect.val(city.short_name).change();
}

$(document).ready(function(){
  getGeoState();
});

/*global jQuery */
/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
  function injector(t, splitter, klass, after) {
    var text = t.text()
    , a = text.split(splitter)
    , inject = '';
    if (a.length) {
      $(a).each(function(i, item) {
        inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
      });
      t.attr('aria-label',text)
      .empty()
      .append(inject)

    }
  }


  var methods = {
    init : function() {

      return this.each(function() {
        injector($(this), '', 'char', '');
      });

    },

    words : function() {

      return this.each(function() {
        injector($(this), ' ', 'word', ' ');
      });

    },

    lines : function() {

      return this.each(function() {
        var r = "eefec303079ad17405c889e092e105b0";
        // Because it's hard to split a <br/> tag consistently across browsers,
        // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
        // (of the word "split").  If you're trying to use this plugin on that
        // md5 hash string, it will fail because you're being ridiculous.
        injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
      });

    }
  };

  $.fn.lettering = function( method ) {
    // Method calling logic
    if ( method && methods[method] ) {
      return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
    } else if ( method === 'letters' || ! method ) {
      return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
    }
    $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
    return this;
  };

})(jQuery);
$(function() {
    var $el, leftPos, newWidth, $topbarNav = $("#topbar nav");

    $topbarNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width(150)
        .css("right", 0)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#topbar nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.outerWidth( true );
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        }, 1000);
    });
});

// $.ajax({

//   // The 'type' property sets the HTTP method.
//   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
//   type: 'POST',

//   // The URL to make the request to.
//   url: 'https://api.mailgun.net/v3/aguiapiscinas.com.br/messages',

//   dataType: 'json',
//   username:'api',
//   password: 'key-7232a8e5b9de4d8d77ab7abe09f694f1',

//   data: {
//     name: "asda",
//     phone: "asdasd",
//     email: "asdasd@asdasd.com",
//     message: "asdasdasd",
//     text: "text",
//     subject: "asdasd",
//     from: "contato@aguiapiscinas.com.br",
//     to: "wendellp.barreto@gmail.com"
//   },

//   // The 'contentType' property sets the 'Content-Type' header.
//   // The JQuery default for this property is
//   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
//   // a preflight. If you set this value to anything other than
//   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
//   // you will trigger a preflight request.
//   contentType: 'text/plain',

//   xhrFields: {
//     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
//     // This can be used to set the 'withCredentials' property.
//     // Set the value to 'true' if you'd like to pass cookies to the server.
//     // If this is enabled, your server must respond with the header
//     // 'Access-Control-Allow-Credentials: true'.
//     withCredentials: false
//   },

//   headers: {
//     // Set any custom headers here.
//     // If you set any non-simple headers, your server must include these
//     // headers in the 'Access-Control-Allow-Headers' response header.
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
//     "Access-Control-Allow-Headers": "accept, origin, content-type, authorization",
//     "Authorization": "Basic " + btoa("api:key-7232a8e5b9de4d8d77ab7abe09f694f1"),
//   },

//   success: function() {
//     alert('ok');
//     // Here's where you handle a successful response.
//   },

//   error: function(error) {
//     console.log(error);
//     alert('problems');
//     // Here's where you handle an error response.
//     // Note that if the error was due to a CORS issue,
//     // this function will still fire, but there won't be any additional
//     // information about the error.
//   }
// });

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

$(document).on('click', '#menu-mobile .open', function(ev){
  ev.preventDefault();
  el = $(this);
  $('#menu-mobile').toggleClass('opened');
});

$(document).on('click', '#menu-mobile .close', function(ev){
  ev.preventDefault();
  el = $(this);
  $('#menu-mobile').toggleClass('opened');
});

$(document).on('click', '#menu-mobile nav a:not(.close)', function(ev){
  ev.preventDefault();
  el = $(this);
  $('#menu-mobile').toggleClass('opened');
})

$(document).ready(function() {
  var tmpImg = new Image() ;
  tmpImg.src = $('img.hero-mobile').attr('src') ;

  tmpImg.onload = function() {
    imgHeight = $('#hero img').height() - 72;
    console.log(imgHeight)
    $('#menu-mobile nav').css('height', imgHeight);
  };
});

$(document).on('click', '[data-open]', function(){
  el = $(this);
  ID = el.attr('data-open');
  openable = $('[data-openable="' + ID + '"]');
  $('#watertanks ul li').css('margin-bottom', 0);
  $('#watertanks ul li').removeClass('show');
  $('.openable').removeClass('show');
  $('html, body').animate({
    scrollTop: openable.offset().top - 200
  }, 500);

  el.closest('li').addClass('show');
  openable.addClass('show');
  el.addClass('show');

  li = el.closest('li');
  li.css('margin-bottom', openable.find('.outer').height() + 20);
});

$(document).on('click', '.openable .close', function(ev){
  ev.preventDefault();
  el = $(this);
  $('[data-open]').closest('li').removeClass('show');
  el.closest('.openable').removeClass('show');

  $('#watertanks ul li').css('margin-bottom', 0);
});

function scrollHandler() {
  var scrollTop = $(window).scrollTop();

  var topbar = $('#topbar');
  var topbarHeight = topbar.outerHeight();

	if (scrollTop > topbarHeight) {
		classie.add(topbar[0], 'fixed-topbar');
	} else {
		classie.remove(topbar[0], 'fixed-topbar');
	}
}

$(window).scroll(scrollHandler);

$(document).on('click', '.video-box__playbutton', function(){
  $(this).hide();

  var videoBox = $(this).closest('.video-box');
  var videoID = videoBox.attr('data-video-id');
  var videoType = videoBox.attr('data-video-type');
  var videoFrame = videoBox.find('.video-box__frame');
  var videoThumbnail = videoBox.find('.video-box__thumbnail');


  var youtubeIframe = '<iframe type="text/html" width="100%" height="100%" src="http://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
  var vimeoFrame = '<iframe type="text/html" width="100%" height="100%" src="//player.vimeo.com/video/' + videoID + '?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';



  if (videoType == 'vimeo') {
    videoFrame.html(vimeoFrame);
  } else {
    videoFrame.html(youtubeIframe);
  }

  setTimeout(function(){
    videoThumbnail.addClass("animated");
    videoThumbnail.addClass("pulse");
    videoThumbnail.css("z-index", "-1");
    videoFrame.addClass("animated");
    videoFrame.addClass("pulse");
    videoFrame.css("z-index" , "1");
  }, 500);

});

$('#state').change(function(){
  el = $(this);
  selectedOption = el.find(':selected').val();
  console.log('Changed state to: ' + selectedOption);
  $('#state__tabs').find('a[href="#state' + selectedOption + '"]').click();
});
