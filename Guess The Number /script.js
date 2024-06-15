"use strict";
let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
function DisplayMessage(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  if (!guess) {
    DisplayMessage("No Number");
  } else if (guess < 1) {
    DisplayMessage("Please enter a number greater than or equal to 1");
  } else if (guess === number) {
    DisplayMessage("Correct Number");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      DisplayMessage(
        guess > number ? "Guess is Too High" : " Guess is Too Low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      DisplayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  DisplayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
