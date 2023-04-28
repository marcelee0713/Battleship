import {
  ship1HorizontalInValid,
  ship1VerticalInValid,
  ship2HorizontalInValid,
  ship2VerticalInValid,
  ship3HorizontalInValid,
  ship3VerticalInValid,
  ship4HorizontalInValid,
  ship4VerticalInValid,
  ship5HorizontalInValid,
  ship5VerticalInValid,
} from "./ArrayOfValidation";
const playerStartParentGrid = document.getElementById("player-coordinates");
export default function HandleHover(rotation, index, mode) {
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (mode === 0) {
      if (ship1HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 5; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 1) {
      if (ship2HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 4; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 2) {
      if (ship3HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 3; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 3) {
      if (ship4HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 3; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 4) {
      if (ship5HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 2; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (mode === 0) {
      if (ship1VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 4; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 1) {
      if (ship2VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 3; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 2) {
      if (ship3VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 2; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 3) {
      if (ship4VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 2; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 4) {
      if (ship5VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 1; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    }
  }
}
