var audio = new Audio("./sounds/tom-1.mp3");
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("Clicked")
    make_sound(this.innerHTML)
    buttonAnimation(this.innerHTML)
  });
}

document.addEventListener("keydown", function (event) {
    make_sound(event.key)
    buttonAnimation(event.key)
});

function make_sound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}


function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey)
    active.classList.add("pressed")
    setTimeout(function() {
        active.classList.remove("pressed")
    }, 100)
    
}