import Gameboard from "../src/Gameboard";

test("ReceiveAttack Function in Gameboard", () => {
  const gameboard = Gameboard();

  expect(gameboard.receivedAttack("G6")).toBe("You hit Ship 5");
  expect(gameboard.receivedAttack("H6")).toBe("You hit Ship 5");
  expect(gameboard.playerAllShipSunk()).toBe(false);
  expect(gameboard.receivedAttack("D7")).toBe("You miss");
  expect(gameboard.receivedAttack("A2")).toBe("You hit Ship 1");
  expect(gameboard.receivedAttack("B2")).toBe("You hit Ship 1");
  expect(gameboard.receivedAttack("C2")).toBe("You hit Ship 1");
  expect(gameboard.receivedAttack("D2")).toBe("You hit Ship 1");
  expect(gameboard.receivedAttack("E2")).toBe("You hit Ship 1");
  expect(gameboard.receivedAttack("F1")).toBe("You hit Ship 2");
  expect(gameboard.receivedAttack("F2")).toBe("You hit Ship 2");
  expect(gameboard.receivedAttack("F3")).toBe("You hit Ship 2");
  expect(gameboard.receivedAttack("F4")).toBe("You hit Ship 2");
  expect(gameboard.receivedAttack("H10")).toBe("You hit Ship 3");
  expect(gameboard.receivedAttack("I10")).toBe("You hit Ship 3");
  expect(gameboard.receivedAttack("J10")).toBe("You hit Ship 3");
  expect(gameboard.playerAllShipSunk()).toBe(false);
  expect(gameboard.receivedAttack("D8")).toBe("You hit Ship 4");
  expect(gameboard.receivedAttack("D9")).toBe("You hit Ship 4");
  expect(gameboard.receivedAttack("D10")).toBe("Game is done");
  expect(gameboard.playerAllShipSunk()).toBe(true);
});
