$(document).on('click', '.close-button', function(el){
  el.preventDefault();
  el = $(this);

  el.closest('.message').hide();
});
