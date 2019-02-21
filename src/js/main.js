$(function () {

  $artboard = $(".artboard");

  //genrate random angle to be applied to icon div
  function generateAngle() {
    let $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  //generate random icon size
  function generateSize() {
    let $rand = Math.floor(Math.random() * 4) + 1;
    return $rand;
  }

  //Handle random btn
  $(".randomBtn").on("click", function() {
    $(this).toggleClass("random");

    if($(this).hasClass("random")) {
      $(this).text("Random Size");
    } else {
      $(this).text("Same Size");
    }
  });
  
  //empty artboard then load new art content
  function loadArtboard(icon) {
    $artboard.empty();

    if($(".randomBtn").hasClass("random")) {
      for (var i = 0; i < 300; i++) {
        $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg);"><i class='${icon} fa-${generateSize()}x'}"></i></div>`);
      };
    } else {
      for (var i = 0; i < 300; i++) {
        $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg);"><i class='${icon} fa-2x'}"></i></div>`);
      };
    }
    
  }

  //Load artwork on page load
  loadArtboard("fab fa-angellist");

  //Handle icon button clicks
  $(".icon").on("click", function() {
    let iconName = $(this).find("i").attr("class"); //find icon name from html link
    loadArtboard(iconName);
  });
  
  //Capture artwork and display in modal
  $(".captureBtn").on("click", function() {
    $('#canvasModal').modal('show');

    html2canvas(document.querySelector("#capture")).then(canvas => {
      let modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      console.log(modalBody);
      modalBody.appendChild(canvas);
      document.querySelector(".modal-content").appendChild(modalBody);
    });
  });

  //Remove modal body on close so duplicate art is not placed in canvas
  $('#canvasModal').on('hidden.bs.modal', function () {
    $(".modal-body").remove();
  })

});

