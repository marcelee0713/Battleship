import Ship from "./Ship";

export default function Gameboard(player) {
  // From what I know,
  // A Gameboard should loop for five times since there are five ships
  // Now every iteration, the gameboard ask for the values of each ships.
  // The values represent on what coordinate they're in. i.e ship 1 = ['A2', 'B2', 'C2'];
  // After the loop, the game begins
  // Try running some test now

  // Basically in the UI, it should wait for the user to
  // Press where he wants to put his ships.
  // But for now we have to put a fixed coordinates in each ships
  const playerCoordinates = player.getCoordinates();
  const ship1 = Ship(playerCoordinates[0]);
  const ship2 = Ship(playerCoordinates[1]);
  const ship3 = Ship(playerCoordinates[2]);
  const ship4 = Ship(playerCoordinates[3]);
  const ship5 = Ship(playerCoordinates[4]);

  // From what I know, also from this part
  // If we ever hit any one of them. We check if all of them sunk or not.

  // We return the coordinate attack because it's goign to handle the UI
  function receivedAttack(coordinateAttack) {
    if (ship1.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship2.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship3.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship4.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship5.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else {
      // This is a miss
      return ["miss", coordinateAttack];
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

  function getPlayerCoordinates() {
    return playerCoordinates;
  }

  return {
    getPlayerCoordinates,
    receivedAttack,
    playerAllShipSunk,
  };
}
