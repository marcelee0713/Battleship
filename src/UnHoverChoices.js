const playerStartParentGrid = document.getElementById("player-coordinates");
export default function HandleUnHover(rotation, index, mode) {
  if (rotation === "horizontal") {
    if (mode === 0) {
      for (let i = 0; i < 5; i++) {
        if (playerStartParentGrid.children[index + i]) {
          playerStartParentGrid.children[index + i].style.backgroundColor =
            "inherit";
        }
      }
    } else if (mode === 1) {
      for (let i = 0; i < 4; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
            playerStartParentGrid.children[index + i].style.backgroundColor =
            "#1E72EF";
          }else{
            playerStartParentGrid.children[index + i].style.backgroundColor =
            "inherit";
          }
        }
      }
    } else if (mode === 2) {
      for (let i = 0; i < 3; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "#1E72EF";
              }else{
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "inherit";
            }
        }
      }
    } else if (mode === 3) {
      for (let i = 0; i < 3; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "#1E72EF";
            } else {
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "inherit";
            }
        }
      }
    } else if (mode === 4) {
      for (let i = 0; i < 2; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
                    playerStartParentGrid.children[index + i].style.backgroundColor =
                    "#1E72EF";
                } else {
                    playerStartParentGrid.children[index + i].style.backgroundColor =
                    "inherit";
                }
        }
      }
    }
  } else {
    if (mode === 0) {
      let indexForVertical = 10;
      for (let i = 0; i < 4; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          playerStartParentGrid.children[
            index + indexForVertical
          ].style.backgroundColor = "inherit";
          indexForVertical += 10;
        }
      }
    } else if (mode === 1) {
      let indexForVertical = 10;
      for (let i = 0; i < 3; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
            playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
            "#1E72EF";
          }
          else{
            playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
          }
          indexForVertical += 10;
        }
      }
    } else if (mode === 2) {
      let indexForVertical = 10;
      for (let i = 0; i < 2; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
              playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
              "#1E72EF";
            }
            else{
              playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
            }
          indexForVertical += 10;
        }
      }
    } else if (mode === 3) {
      let indexForVertical = 10;
      for (let i = 0; i < 2; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
                "#1E72EF";
              }
              else{
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
              }
          indexForVertical += 10;
        }
      }
    } else if (mode === 4) {
      let indexForVertical = 10;
      for (let i = 0; i < 1; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
                "#1E72EF";
            }else{
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
            }
          indexForVertical += 10;
        }
      }
    }
  }
}
