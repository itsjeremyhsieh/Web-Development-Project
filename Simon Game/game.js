var gamePattern = []
var userClickedPattern = []
var buttonColors = ["red", "blue", "green", "yellow"];
var cnt = 0
var level = 0
var start = false


function playSound(color) {
    audio_link = "./sounds/" + color +".mp3"
    // alert(audio_link)
    var audio = new Audio(audio_link)
    audio.play()
}


function nextSequence() {
    userClickedPattern = []
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor =  buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    // alert(gamePattern)
    playSound(randomChosenColor)
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100)
    level += 1
    $("h1").html("Level " + level)
}
// alert("start")
// nextSequence()
function reset() {
    $("body").removeClass("game-over")
    $("h1").html("Press A Key to Start")
    gamePattern = []
    userClickedPattern = []
    start = false
    cnt = 0
    level = 0
}


function checkAnswer() {
    if (JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)) {
        // alert("right")
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
    else {
   
        $("body").addClass("game-over")
        $("h1").html("Game Over, Press Any Key to Restart")
        playSound("wrong")
        setTimeout(function () {
            reset()
          }, 5000);
    }
}


$(".btn").on("click", function() {
    
    if (cnt < level - 1) {
        var userChosenColor = $(this).attr('id')
        playSound(userChosenColor)
        userClickedPattern.push(userChosenColor)
        $("#" + userChosenColor).fadeOut(100).fadeIn(100)
        cnt ++
    }
    else if (cnt == level - 1) {
        var userChosenColor = $(this).attr('id')
        playSound(userChosenColor)
        userClickedPattern.push(userChosenColor)
        $("#" + userChosenColor).fadeOut(100).fadeIn(100)
        // alert("test")
        cnt = 0
        checkAnswer()
    }
})
// alert(gamePattern)

$(document).on("keypress", function() { // start
    if (!start) {
        start = true
        nextSequence()
    }
})