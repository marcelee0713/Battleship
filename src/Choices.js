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
export function HandleFirstShip(rotation, index, coordinate) {
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship1HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 5; i++) {
        coordinate.push(playerStartParentGrid.children[index + i].id);
        playerStartParentGrid.children[index + i].style.backgroundColor =
          "#1E72EF";
        playerStartParentGrid.children[index + i].setAttribute(
          "hascolor",
          "true"
        );
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship1VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 5; i++) {
        // prettier-ignore
        coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);

        playerStartParentGrid.children[
          index + indexForVertical
        ].style.backgroundColor = "#1E72EF";
        playerStartParentGrid.children[index + indexForVertical].setAttribute(
          "hascolor",
          "true"
        );
        indexForVertical += 10;
      }
    } else {
      return [];
    }
  }

  return coordinate;
}

export function HandleSecondShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship2HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 4; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
            handleLeftOver.push(playerStartParentGrid.children[index + i]);
            coordinate.push(playerStartParentGrid.children[index + i].id);
        }
      }

      if (handleLeftOver.length !== 4) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship2VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 4; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
            handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
            coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
        }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 4) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}

export function HandleThirdShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship3HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
              handleLeftOver.push(playerStartParentGrid.children[index + i]);
              coordinate.push(playerStartParentGrid.children[index + i].id);
          }
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship3VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
              handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
              coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
          }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}

export function HandleFourthShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship4HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
                handleLeftOver.push(playerStartParentGrid.children[index + i]);
                coordinate.push(playerStartParentGrid.children[index + i].id);
            }
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship4VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
                handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
                coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
            }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}

export function HandleFifthShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship5HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 2; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
            handleLeftOver.push(playerStartParentGrid.children[index + i]);
            coordinate.push(playerStartParentGrid.children[index + i].id);
        }
      }

      if (handleLeftOver.length !== 2) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!ship5VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 2; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
            handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
            coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
        }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 2) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}
