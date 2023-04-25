export default function Player(playerCoordinates = []) {
  // From what I know this guy does also
  // Handles the coordinates and pass the value to his gameboard
  // But also handles the turn

  const coordinates = playerCoordinates;
  let playerTurn = true;

  function changePlayerTurn(value) {
    playerTurn = value;
  }

  function getPlayerTurn() {
    return playerTurn;
  }

  function getCoordinates() {
    return coordinates;
  }

  return {
    getCoordinates,
    getPlayerTurn,
    changePlayerTurn,
  };
}
