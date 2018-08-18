$( document ).ready(function() {
  $('.box-1').click(function(){
    $('#content1').toggleClass('display').slideToggle('5000');
    $('#content2').hide();
      $('#content3').hide();
});
  $('.box-3').click(function(){
    $('#content2').toggleClass('display').slideToggle('5000');
    $('#content1').hide();
      $('#content3').hide();
});
  $('.box-5').click(function(){
    $('#content3').toggleClass('display').slideToggle('5000');
    $('#content1').hide();
      $('#content2').hide();
});
});
