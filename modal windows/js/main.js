$(document).ready(function(){
  $('.info__help, .info__small').hide();

  $('.info__help, .info__small').click(function(){
    $('.info__help, .info__small').fadeOut(100);
  });
//---------- mouse click
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

  //----------mouse move
  $("#one").mouseenter(function(){
          $('#helpOne, #rectOne').fadeIn(100);
      });
      $("#one").mouseleave(function(){
          $('#helpOne, #rectOne').fadeOut(100);
      });
  $("#two").mouseenter(function(){
          $('#helpTwo, #rectTwo').fadeIn(100);
      });
      $("#two").mouseleave(function(){
          $('#helpTwo, #rectTwo').fadeOut(100);
      });
  $("#three").mouseenter(function(){
          $('#helpThree, #rectThree').fadeIn(100);
      });
      $("#three").mouseleave(function(){
          $('#helpThree, #rectThree').fadeOut(100);
      });
  $("#four").mouseenter(function(){
          $('#helpFour, #rectFour').fadeIn(100);
      });
      $("#four").mouseleave(function(){
          $('#helpFour, #rectFour').fadeOut(100);
      });
  $("#five").mouseenter(function(){
          $('#helpFive, #rectFive').fadeIn(100);
      });
      $("#five").mouseleave(function(){
          $('#helpFive, #rectFive').fadeOut(100);
      });
  $("#six").mouseenter(function(){
          $('#helpSix, #rectSix').fadeIn(100);
          });
      $("#six").mouseleave(function(){
          $('#helpSix, #rectSix').fadeOut(100);
      });
  $("#seven").mouseenter(function(){
          $('#helpSeven, #rectSeven').fadeIn(100);
      });
      $("#seven").mouseleave(function(){
          $('#helpSeven, #rectSeven').fadeOut(100);
      });
  $("#eight").mouseenter(function(){
          $('#helpEight, #rectEight').fadeIn(100);
      });
      $("#eight").mouseleave(function(){
          $('#helpEight, #rectEight').fadeOut(100);
      });
  $("#nine").mouseenter(function(){
          $('#helpNine, #rectNine').fadeIn(100);
      });
      $("#nine").mouseleave(function(){
          $('#helpNine, #rectNine').fadeOut(100);
      });
});
