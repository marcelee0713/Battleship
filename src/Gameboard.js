import Ship from "./Ship";

export default function Gameboard() {
  // From what I know,
  // A Gameboard should loop for five times since there are five ships
  // Now every iteration, the gameboard ask for the values of each ships.
  // The values represent on what coordinate they're in. i.e ship 1 = ['A2', 'B2', 'C2'];
  // After the loop, the game begins
  // Try running some test now

  // Basically in the UI, it should wait for the user to
  // Press where he wants to put his ships.
  // But for now we have to put a fixed coordinates in each ships
  const ship1 = Ship(["A2", "B2", "C2", "D2", "E2"]);
  const ship2 = Ship(["F1", "F2", "F3", "F4"]);
  const ship3 = Ship(["H10", "I10", "J10"]);
  const ship4 = Ship(["D8", "D9", "D10"]);
  const ship5 = Ship(["G6", "H6"]);

  // From what I know, also from this part
  // If we ever hit any one of them. We check if all of them sunk or not.
  function receivedAttack(coordinateAttack) {
    if (ship1.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? "You hit Ship 1" : "Game is done";
    } else if (ship2.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? "You hit Ship 2" : "Game is done";
    } else if (ship3.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? "You hit Ship 3" : "Game is done";
    } else if (ship4.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? "You hit Ship 4" : "Game is done";
    } else if (ship5.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? "You hit Ship 5" : "Game is done";
    } else {
      return "You miss";
    }
  }

  // If all of the value on the ship are less than or equal to 0;
  // This player lose
  function playerAllShipSunk() {
    const allCoordinates = [
      ship1.isSunk(),
      ship2.isSunk(),
      ship3.isSunk(),
      ship4.isSunk(),
      ship5.isSunk(),
    ];

    const shipsValue = allCoordinates.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    if (shipsValue <= 0) {
      return true;
    }
    return false;
  }

  return {
    receivedAttack,
    playerAllShipSunk,
  };
}
