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

export default async function getComputerCoordinates() {
  return new Promise((resolve, reject) => {
    let mode = 0;
    const rotations = ["horizontal", "vertical"];
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let collector = [];
    let firstCoordinate = [];
    let secondCoordinate = [];
    let thirdCoordinate = [];
    let fourthCoordinate = [];
    let fifthCoordinate = [];

    if (mode === 0) {
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      if (randomRotation === "horizontal") {
        while (ship1HorizontalInValid.includes(random)) {
          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          random = randomLetter + randomNumber;
        }

        const letter = random.charAt(0);
        const number = parseInt(random.charAt(1));

        let sum = number;
        for (let i = 0; i < 5; i++) {
          const sumStr = sum.toString();
          firstCoordinate.push(`${letter}${sumStr}`);
          collector.push(`${letter}${sumStr}`);
          sum++;
        }
      } else {
        while (ship1VerticalInValid.includes(random)) {
          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          random = randomLetter + randomNumber;
        }
        const letter = random.charAt(0);
        const number = random.charAt(1);

        let pointer = letters.indexOf(letter);
        for (let i = 0; i < 5; i++) {
          const getLetter = letters[pointer];
          firstCoordinate.push(`${getLetter}${number}`);
          collector.push(`${getLetter}${number}`);
          pointer++;
        }
      }
      mode++;
    }
    if (mode === 1) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (ship2HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 4; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (ship2VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 4; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            collector.push(value);
            secondCoordinate.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 2nd Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }
    if (mode === 2) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (ship3HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 3; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (ship3VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 3; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            collector.push(value);
            thirdCoordinate.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 3rd Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }
    if (mode === 3) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (ship4HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 3; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (ship4VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 3; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            fourthCoordinate.push(value);
            collector.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 4th Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }
    if (mode === 4) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (ship5HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 2; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (ship5VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 2; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            fifthCoordinate.push(value);
            collector.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 5th Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }

    resolve([
      firstCoordinate,
      secondCoordinate,
      thirdCoordinate,
      fourthCoordinate,
      fifthCoordinate,
    ]);
  });
}
