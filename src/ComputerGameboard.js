import Ship from "./Ship";

export default function ComputerGameboard(computer) {
  const computerCoordinates = computer.getCoordinates();
  const computerShip1 = Ship(computerCoordinates[0]);
  const computerShip2 = Ship(computerCoordinates[1]);
  const computerShip3 = Ship(computerCoordinates[2]);
  const computerShip4 = Ship(computerCoordinates[3]);
  const computerShip5 = Ship(computerCoordinates[4]);

  function receivedAttack(coordinateAttack) {
    if (computerShip1.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "You hit CPU Ship 1" : "Game is done";
    } else if (computerShip2.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "You hit CPU Ship 2" : "Game is done";
    } else if (computerShip3.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "You hit CPU Ship 3" : "Game is done";
    } else if (computerShip4.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "You hit CPU Ship 4" : "Game is done";
    } else if (computerShip5.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "You hit CPU Ship 5" : "Game is done";
    } else {
      return "You miss";
    }
  }

  function computerAllShipSunk() {
    const allCoordinates = [
      computerShip1.isSunk(),
      computerShip2.isSunk(),
      computerShip3.isSunk(),
      computerShip4.isSunk(),
      computerShip5.isSunk(),
    ];

    const shipsValue = allCoordinates.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    if (shipsValue <= 0) {
      return true;
    }
    return false;
  }

  function getComputerCoordinates() {
    return computerCoordinates;
  }

  return {
    getComputerCoordinates,
    receivedAttack,
    computerAllShipSunk,
  };
}
