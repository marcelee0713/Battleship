import Gameboard from "./Gameboard";
import ComputerGameboard from "./ComputerGameboard";
import Player from "./Player";
import Computer from "./Computer";
import "./styles/style.scss";
export default function Game() {
  // From what I know this is where we create the UI
  // Where we also take the coordinates of the player and randomize the computer's coordinates.
  const playerCoordinates = [
    ["A2", "B2", "C2", "D2", "E2"],
    ["F1", "F2", "F3", "F4"],
    ["H10", "I10", "J10"],
    ["D8", "D9", "D10"],
    ["G6", "H6"],
  ];

  const computerCoordinates = [
    ["A5", "A6", "A7", "A8", "A9"],
    ["B9", "C9", "D9", "E9"],
    ["H2", "H3", "H4"],
    ["H6", "I6", "J6"],
    ["C4", "C5"],
  ];

  const computerHitCollector = [];

  const player = Player(playerCoordinates);
  const playerGameBoard = Gameboard(player);

  const computer = Computer(computerCoordinates);
  const computerGameboard = ComputerGameboard(computer);

  function putCoordinate(coordinate) {
    let playerTurn = player.getPlayerTurn();
    let computerTurn = computer.getComputerTurn();
    let result;

    if (playerTurn && !computerTurn) {
      result = computerGameboard.receivedAttack(coordinate);
      player.changePlayerTurn(false);
      computer.changeComputerTurn(true);
    } else {
      result = playerGameBoard.receivedAttack(coordinate);
      player.changePlayerTurn(true);
      computer.changeComputerTurn(false);
    }

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

    return random;
  }

  return {
    putCoordinate,
    randomCoordinate,
  };
}
