$('#benefits ul li').mouseenter(function(){
  el = $(this);

  anchor = el.find('a');

  anchor.trigger('click');
});
