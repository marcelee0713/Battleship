import Gameboard from "./Gameboard";
import ComputerGameboard from "./ComputerGameboard";
import Player from "./Player";
import Computer from "./Computer";
import getComputerCoordinates from "./ComputerRandomize";
import getPlayerCoordinates, {
  resetMode,
  changeShipName,
} from "./PlayerChoose";

const playerCoordinatesBox = document.querySelectorAll(".player-grid .box");
const computerCoordinatesBox = document.querySelectorAll(".computer-grid .box");

const startModal = document.getElementById("start-modal");
const playerStartBoxes = document.querySelectorAll(".grid-box");
const modal = document.getElementById("open-modal");
const decisionWinner = document.getElementById("decision");
const playAgainBtn = document.getElementById("restart-btn");

// From what I know this is where we create the UI
// Where we also take the coordinates of the player and randomize the computer's coordinates.
let playerCoordinates = await getPlayerCoordinates();

let computerCoordinates = await getComputerCoordinates();

const computerHitCollector = [];

const player = Player(playerCoordinates);
const playerGameBoard = Gameboard(player);

const computer = Computer(computerCoordinates);
const computerGameboard = ComputerGameboard(computer);

playerCoordinatesBox.forEach((coordinateBoxes) => {
  if (playerCoordinates[0].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[1].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[2].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[3].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[4].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  coordinateBoxes.style.cursor = "default";
});

computerCoordinatesBox.forEach((computerBoxes) => {
  computerBoxes.addEventListener("click", (e) => {
    e.preventDefault();
    const hasPressed = computerBoxes.hasAttribute("hasPressed");

    // From what I know below this.
    // Is that when I press this and the result is "missed"
    // put a red box in that coordinateBox
    // But when the result is "hit"
    // put a greenbox in that coordinateBox
    // But when the result is Gameover we won.

    // Now we also have to think about when the computer hits us
    // It will be the same thing but it returns different values
    const playerResult = playerAttack(computerBoxes.id);
    if (!hasPressed) {
      if (playerResult === "hit") {
        computerBoxes.setAttribute("hasPressed", "true");
        computerBoxes.style.backgroundColor = "#54EF1E";
      } else if (playerResult === "miss") {
        computerBoxes.setAttribute("hasPressed", "true");
        computerBoxes.style.backgroundColor = "#FF4343";
      } else {
        modal.style.display = "flex";
        decisionWinner.textContent = "WE WON CAPTAIN!";
        playAgainBtn.addEventListener("click", (e) => {
          location.reload();
        });
      }

      const computerResult = computerAttack(randomCoordinate());
      console.log(computerResult);
      if (computerResult === "game-over") {
        modal.style.display = "flex";
        decisionWinner.textContent = "WE LOST CAPTAIN";
        playAgainBtn.addEventListener("click", (e) => {
          location.reload();
        });
      } else {
        playerCoordinatesBox.forEach((value) => {
          if (typeof computerResult === "object") {
            if (value.id === computerResult[1]) {
              value.style.backgroundColor = "#FF4343";
              return;
            }
          } else if (value.id === computerResult) {
            value.style.backgroundColor = "#54EF1E";
            return;
          }
        });
      }
    } else {
      console.log("bro you already pressed that");
    }
  });
});

function playerAttack(coordinate) {
  let result;
  result = computerGameboard.receivedAttack(coordinate);

  return result;
}

function computerAttack(coordinate) {
  let result;
  result = playerGameBoard.receivedAttack(coordinate);

  return result;
}

function randomCoordinate() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let randomLetter = letters[Math.floor(Math.random() * letters.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  let random = randomLetter + randomNumber;
  while (computerHitCollector.includes(random)) {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    random = randomLetter + randomNumber;
  }

  computerHitCollector.push(random);

  return random;
}
