export default function Computer(computerCoordinates = []) {
  const computerCoordinate = computerCoordinates;
  let computerTurn = false;

  function changeComputerTurn(value) {
    computerTurn = value;
  }

  function getComputerTurn() {
    return computerTurn;
  }

  function getCoordinates() {
    return computerCoordinate;
  }

  return {
    getCoordinates,
    getComputerTurn,
    changeComputerTurn,
  };
}
