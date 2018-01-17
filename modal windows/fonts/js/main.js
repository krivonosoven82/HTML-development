$(document).ready(function(){
  $('.info__help, .info__small').hide();

  $('.info__help, .info__small').click(function(){
    $('.info__help, .info__small').fadeOut(100);
  });
//-----------------------------------------------
  $('#askOne').click(function(){
    $('#helpOne, #rectOne').fadeToggle(100);
  });
  $('#askTwo').click(function(){
    $('#helpTwo, #rectTwo').fadeToggle(100);
  });
  $('#askThree').click(function(){
    $('#helpThree, #rectThree').fadeToggle(100);
  });
  $('#askFour').click(function(){
    $('#helpFour, #rectFour').fadeToggle(100);
  });
  $('#askFive').click(function(){
    $('#helpFive, #rectFive').fadeToggle(100);
  });
  $('#askSix').click(function(){
    $('#helpSix, #rectSix').fadeToggle(100);
  });
  $('#askSeven').click(function(){
    $('#helpSeven, #rectSeven').fadeToggle(100);
  });
  $('#askEight').click(function(){
    $('#helpEight, #rectEight').fadeToggle(100);
  });
  $('#askNine').click(function(){
    $('#helpNine, #rectNine').fadeToggle(100);
  });

});
