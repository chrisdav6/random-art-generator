$(function () {

  $artboard = $(".artboard");

  //genrate random angle to be applied to icon div
  function generateAngle() {
    let $angle =  Math.floor(Math.random() * 360) + 1;
    return $angle;
  }

  //generate a random icon color
  function generateColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let $color = `rgba(${r}, ${g}, ${b}, 1);`
    return $color;
  };

  //Handle color btn
  $(".colorBtn").on("click", function () {
    $(this).toggleClass("color");

    if ($(this).hasClass("color")) {
      $(this).text("Random Colors");
    } else {
      $(this).text("Same Color");
    }
  });

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

    //Standard color and size
    for (var i = 0; i < 300; i++) {
      $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg); color: #25292D;"><i class='${icon} fa-2x'></i></div>`);
    };

    //Random size standard color
    if ($(".randomBtn").hasClass("random")) {
      $artboard.empty();
      for (var i = 0; i < 300; i++) {
        $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg); color: #25292D;"><i class='${icon} fa-${generateSize()}x'></i></div>`);
      };
    } 

    //Standard size random color
    if ($(".colorBtn").hasClass("color")) {
      $artboard.empty();
      for (var i = 0; i < 300; i++) {
        $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg); color: ${generateColor()};"><i class='${icon} fa-2x'></i></div>`);
      };
    } 

    //Random size and color
    if ($(".randomBtn").hasClass("random") && $(".colorBtn").hasClass("color")) {
      $artboard.empty();
      for (var i = 0; i < 300; i++) {
        $artboard.append(`<div class="box" style="display: flex; justify-content: center; align-items: center; transform: rotate(${generateAngle()}deg); color: ${generateColor()};"><i class='${icon} fa-${generateSize()}x'></i></div>`);
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
      modalBody.appendChild(canvas);
      document.querySelector(".modal-content").appendChild(modalBody);
    });

    //Share to facebook - Work in progress
    // setTimeout(() => {
    //   var canvas = document.querySelector('canvas');
    //   var dataURL = canvas.toDataURL("image/png");
    //   console.log(dataURL);

    //   fetch(dataURL)
    //     .then(res => res.blob())
    //     .then(blob => console.log(blob));
    // }, 2000);
    
  });

  //Remove modal body on close so duplicate art is not placed in canvas
  $('#canvasModal').on('hidden.bs.modal', function () {
    $(".modal-body").remove();
  })

});

