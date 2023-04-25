import Gameboard from "./Gameboard";
import ComputerGameboard from "./ComputerGameboard";
import Player from "./Player";
import Computer from "./Computer";

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

  const computerHitCollector = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "E9",
    "E10",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
    "G8",
    "G9",
    "G10",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "H10",
    "I1",
    "I2",
    "I3",
    "I4",
    "I5",
    "I6",
    "I7",
    "I8",
    "I9",
    "I10",
    "J1",
    "J2",
    "J3",
    "J4",
    "J5",
    "J6",
    "J7",
    "J8",
    "J9",
  ];

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
