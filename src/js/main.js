$(function () {

  $artboard = $(".artboard");

  function generateAngle() {
    $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  function createIcons(icon) {
    for (var i = 0; i < 300; i++) {
      $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center;"><i class='${icon}' data-fa-transform="rotate-${generateAngle()}"></i></div>`);
    };
  }

  createIcons("fab fa-angellist fa-2x");

  $(".icon").on("click", function() {
    if ($(this).hasClass('option1')) {
      $artboard.html("");
      createIcons("fab fa-angellist fa-2x");
    }
    if($(this).hasClass('option2')) {
      $artboard.html("");
      createIcons("fas fa-adjust fa-2x");
    }
    if ($(this).hasClass('option3')) {
      $artboard.html("");
      createIcons("fas fa-angle-double-up fa-2x");
    }
    if ($(this).hasClass('option4')) {
      $artboard.html("");
      createIcons("far fa-angry fa-2x");
    }
    if ($(this).hasClass('option5')) {
      $artboard.html("");
      createIcons("fas fa-arrows-alt-h fa-2x");
    }
    if ($(this).hasClass('option6')) {
      $artboard.html("");
      createIcons("fab fa-bitbucket fa-2x");
    }
    if ($(this).hasClass('option7')) {
      $artboard.html("");
      createIcons("fas fa-child fa-2x");
    }
  });

  


});