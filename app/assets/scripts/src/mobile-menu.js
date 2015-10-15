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
