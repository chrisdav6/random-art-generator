$(function () {

  $artboard = $(".artboard");

  function generateAngle() {
    $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  function loadArtboard(icon) {
    $artboard.empty();

    for (var i = 0; i < 300; i++) {
      $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg);"><i class='${icon}'}"></i></div>`);
    };
  }

  loadArtboard("fab fa-angellist fa-2x");

  $(".icon").on("click", function() {
    if ($(this).hasClass('option1')) {
      loadArtboard("fab fa-angellist fa-2x");
    }
    if($(this).hasClass('option2')) {
      loadArtboard("fas fa-adjust fa-2x");
    }
    if ($(this).hasClass('option3')) {
      loadArtboard("fas fa-angle-double-up fa-2x");
    }
    if ($(this).hasClass('option4')) {
      loadArtboard("far fa-angry fa-2x");
    }
    if ($(this).hasClass('option5')) {
      loadArtboard("fas fa-arrows-alt-h fa-2x");
    }
    if ($(this).hasClass('option6')) {
      loadArtboard("fab fa-bitbucket fa-2x");
    }
    if ($(this).hasClass('option7')) {
      loadArtboard("fas fa-child fa-2x");
    }
    if ($(this).hasClass('option8')) {
      loadArtboard("fas fa-wrench fa-2x");
    }
  });

  


});