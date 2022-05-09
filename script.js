// Generate a random number between 1 and 6
const firstRandomNumber = Math.floor(Math.random() * 6) + 1;

//Image of the dice1 to dice6
const firstDiceImage = "assets/dice" + firstRandomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// Generate a random number between 1 and 6
const secondRandomNumber = Math.floor(Math.random() * 6) + 1;

//Image of the dice1 to dice6
const secondDiceImage = "assets/dice" + secondRandomNumber + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

// Generate a random number between 1 and 6
const thirdRandomNumber = Math.floor(Math.random() * 6) + 1;

//Image of the dice1 to dice6
const thirdDiceImage = "assets/dice" + thirdRandomNumber + ".png";

document.querySelectorAll("img")[2].setAttribute("src", thirdDiceImage);

//logic for the winner
if (
  firstRandomNumber > secondRandomNumber &&
  firstRandomNumber > thirdRandomNumber
) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (
  secondRandomNumber > firstRandomNumber &&
  secondRandomNumber > thirdRandomNumber
) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (
  thirdRandomNumber > firstRandomNumber &&
  thirdRandomNumber > secondRandomNumber
) {
  document.querySelector("h1").innerHTML = "Player 3 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

//logic on button to reset the game
document.querySelector("button").addEventListener("click", function () {
  location.reload();
});

