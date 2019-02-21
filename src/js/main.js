$(function () {

  $artboard = $(".artboard");

  function generateAngle() {
    $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  function loadArtboard(icon) {
    $artboard.empty();

    setTimeout(() => {
      for (var i = 0; i < 300; i++) {
        $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center;"><i class='${icon}' data-fa-transform="rotate-${generateAngle()}"></i></div>`);
      };
    }, 4);
  }

  loadArtboard("fab fa-angellist fa-2x");

  $(".icon").on("click", function() {
    if ($(this).hasClass('option1')) {
      loadArtboard("fab fa-angellist fa-2x");
    }
    if($(this).hasClass('option2')) {
      createIcons("fas fa-adjust fa-2x");
    }
    if ($(this).hasClass('option3')) {
      createIcons("fas fa-angle-double-up fa-2x");
    }
    if ($(this).hasClass('option4')) {
      createIcons("far fa-angry fa-2x");
    }
    if ($(this).hasClass('option5')) {
      createIcons("fas fa-arrows-alt-h fa-2x");
    }
    if ($(this).hasClass('option6')) {
      createIcons("fab fa-bitbucket fa-2x");
    }
    if ($(this).hasClass('option7')) {
      createIcons("fas fa-child fa-2x");
    }
    if ($(this).hasClass('option8')) {
      createIcons("fas fa-wrench fa-2x");
    }
  });

  


});