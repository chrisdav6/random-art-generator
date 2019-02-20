$(function () {
  
  $artboard = $(".artboard");
  

  for(var i = 0; i < 300; i++) {
    $randomAngle = Math.floor(Math.random() * 360) + 1;
    $artboard.append(`<div><i class='fas fa-child' data-fa-transform="rotate-${$randomAngle}"></i></div>`);
  };


});