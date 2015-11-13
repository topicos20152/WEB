$('#state').change(function(){
  el = $(this);
  selectedOption = el.find(':selected').val();
  console.log('Changed state to: ' + selectedOption);
  $('#state__tabs').find('a[href="#state' + selectedOption + '"]').click();
});
