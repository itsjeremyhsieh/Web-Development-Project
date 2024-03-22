function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

  let randomNumber1 = getRandomInt(6);
  let randomNumber2 = getRandomInt(6);
  let file_name1 = "./images/dice" + randomNumber1 + ".png";
  let file_name2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector(".img1").setAttribute("src", file_name1);
  document.querySelector(".img2").setAttribute("src", file_name2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! ";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
  }

