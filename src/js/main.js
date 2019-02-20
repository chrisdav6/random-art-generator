$(function () {

  $artboard = $(".artboard");

  function generateAngle() {
    $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  function createIcons(icon) {
    for (var i = 0; i < 300; i++) {
      $artboard.append(`<div><i class='${icon}' data-fa-transform="rotate-${generateAngle()}"></i></div>`);
    };
  }

  createIcons("fab fa-angellist");

  $(".icon").on("click", function() {
    if ($(this).hasClass('option1')) {
      $artboard.html("");
      createIcons("fab fa-angellist");
    }
    if($(this).hasClass('option2')) {
      $artboard.html("");
      createIcons("fas fa-adjust");
    }
    if ($(this).hasClass('option3')) {
      $artboard.html("");
      createIcons("fas fa-angle-double-up");
    }
    if ($(this).hasClass('option4')) {
      $artboard.html("");
      createIcons("far fa-angry");
    }
    if ($(this).hasClass('option4')) {
      $artboard.html("");
      createIcons("fas fa-arrows-alt-h");
    }
    if ($(this).hasClass('option6')) {
      $artboard.html("");
      createIcons("fab fa-bitbucket");
    }
    if ($(this).hasClass('option7')) {
      $artboard.html("");
      createIcons("fas fa-child");
    }
  });

  


});