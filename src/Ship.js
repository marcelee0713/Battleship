export default function Ship(shipArrayCoordinate = [], hits = 0) {
  let shipCoordinate = shipArrayCoordinate;
  let sunk = false;
  const length = shipCoordinate.length;
  let shipHits = hits;

  // From what I know also about this ship is
  // This factory function should have parameter of the hits and the length of the ship

  function hit(attackCoordinate) {
    // On what I know
    // When a computer hits A3 and then in the shipCoordinate array contains that coordinateAttack
    // Our 'hits' will increment
    // If not return a miss

    // And in the gameboard UI, I think... That I don't have to worry about the duplicate coordinate attack?
    // If the coordinate has already been hit I wouldn't let the player hit it again? Right?

    if (shipCoordinate.includes(attackCoordinate)) {
      shipHits += 1;

      console.log(
        `You hit ${attackCoordinate}!, He now only have ${length - shipHits}`
      );
      return true;
    }

    return false;
  }

  function isSunk() {
    if (shipHits === length) {
      sunk = true;
      return length - getShipHits();
    }

    return length - getShipHits();
  }

  function getShipHits() {
    return shipHits;
  }

  return {
    shipCoordinate,
    length,
    getShipHits,
    hit,
    isSunk,
  };
}
