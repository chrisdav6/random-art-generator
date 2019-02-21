$(function () {

  $artboard = $(".artboard");

  //genrate random angle to be applied to icon div
  function generateAngle() {
    $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  //empty artboard then load new art content
  function loadArtboard(icon, iconClass) {
    $artboard.empty();

    for (var i = 0; i < 300; i++) {
      $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg);"><i class='${icon}'}"></i></div>`);
    };
  }

  //Load artwork on page load
  loadArtboard("fab fa-angellist fa-2x");

  //Handle icon button clicks
  $(".icon").on("click", function() {
    let iconName = $(this).find("i").attr("class"); //find icon name from html link
    iconName += " fa-2x"; //add 2x class to icon name
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

