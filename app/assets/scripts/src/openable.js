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
