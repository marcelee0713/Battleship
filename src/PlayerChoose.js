import HandleHover from "./HoverChoices";
import "./styles/style.scss";
import HandleUnHover from "./UnHoverChoices";
import {
  HandleFirstShip,
  HandleFourthShip,
  HandleSecondShip,
  HandleThirdShip,
  HandleFifthShip,
} from "./Choices";
let rotateShip = "horizontal";
let mode = 0;

const startModal = document.getElementById("start-modal");
const shipName = document.getElementById("ship-name");
const playerStartParentGrid = document.getElementById("player-coordinates");
const playerStartBoxes = document.querySelectorAll(".grid-box");
const rotateCoordinate = document.getElementById("rotate-coordinate");
const resetCoordinate = document.getElementById("reset-coordinate");

export default async function getPlayerCoordinates() {
  return new Promise((resolve, reject) => {
    startModal.style.display = "flex";
    let firstCoordinate = [];
    let secondCoordinate = [];
    let thirdCoordinate = [];
    let fourthCoordinate = [];
    let fifthCoordinate = [];

    resetCoordinate.addEventListener("click", () => {
      mode = 0;
      changeShipName();
      firstCoordinate = [];
      secondCoordinate = [];
      thirdCoordinate = [];
      fourthCoordinate = [];
      fifthCoordinate = [];
      playerStartBoxes.forEach((box) => {
        box.style.backgroundColor = "inherit";
        box.removeAttribute("hascolor");
      });
    });

    playerStartBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "#1E72EF";
        const index = Array.from(playerStartParentGrid.children).indexOf(box);
        HandleHover(rotateShip, index, mode);
      });
      box.addEventListener("mouseleave", () => {
        if (!box.hasAttribute("hascolor")) {
          box.style.backgroundColor = "inherit";
        } else {
          box.style.backgroundColor = "#1E72EF";
        }
        const index = Array.from(playerStartParentGrid.children).indexOf(box);
        HandleUnHover(rotateShip, index, mode);
      });
      box.addEventListener("click", () => {
        const index = Array.from(playerStartParentGrid.children).indexOf(box);
        if (mode === 0) {
          firstCoordinate.length = 0;
          firstCoordinate = HandleFirstShip(rotateShip, index, firstCoordinate);
          if (firstCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 1) {
          secondCoordinate.length = 0;
          // prettier-ignore
          secondCoordinate = HandleSecondShip(rotateShip, index, secondCoordinate);
          if (secondCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 2) {
          thirdCoordinate.length = 0;
          thirdCoordinate = HandleThirdShip(rotateShip, index, thirdCoordinate);
          if (thirdCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 3) {
          fourthCoordinate.length = 0;
          // prettier-ignore
          fourthCoordinate = HandleFourthShip(rotateShip, index, fourthCoordinate);
          if (fourthCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 4) {
          fifthCoordinate.length = 0;
          fifthCoordinate = HandleFifthShip(rotateShip, index, fifthCoordinate);
          if (fifthCoordinate.length !== 0) {
            startModal.style.display = "none";
            resolve([
              firstCoordinate,
              secondCoordinate,
              thirdCoordinate,
              fourthCoordinate,
              fifthCoordinate,
            ]);
          }
        }
      });
    });
  });
}

export function changeShipName() {
  if (mode === 0) {
    shipName.textContent = "Ship 1";
  } else if (mode === 1) {
    shipName.textContent = "Ship 2";
  } else if (mode === 2) {
    shipName.textContent = "Ship 3";
  } else if (mode === 3) {
    shipName.textContent = "Ship 4";
  } else if (mode === 4) {
    shipName.textContent = "Ship 5";
  }
}

export function resetMode() {
  mode = 0;
}

rotateCoordinate.addEventListener("click", () => {
  rotateShip = rotateShip === "horizontal" ? "vertical" : "horizontal";
});
