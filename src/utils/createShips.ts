import type { StateData } from "@/store/index";
import type Ship from "@/types/Ship";

export default function createShips(state: StateData) {
  placeShip(state, 5);
  placeShip(state, 4);
  placeShip(state, 4);
}

function placeShip(state: StateData, shipSize: number): void | Function {
  let ship: Ship = [];
  let start = Math.floor(Math.random() * 100);
  const direction = Math.floor(Math.random() * 2);

  // vertical
  if (direction) {
    if (start + 10 * (shipSize - 1) < 99) {
      // down
      for (let field of state.fields) {
        for (let i = 0; i < shipSize; i++) {
          if (field.number === start + i * 10 && field.hasShip)
            return placeShip(state, shipSize);
        }
      }

      for (let j = 0; j < shipSize; j++) {
        state.fields[start + j * 10].hasShip = true;
        ship.push(state.fields[start + j * 10]);
      }
    } else {
      // up
      for (let field of state.fields) {
        for (let i = 0; i < shipSize; i++) {
          if (field.number === start - i * 10 && field.hasShip)
            return placeShip(state, shipSize);
        }
      }

      for (let j = 0; j < shipSize; j++) {
        state.fields[start - j * 10].hasShip = true;
        ship.push(state.fields[start - j * 10]);
      }
    }
  }
  // hosizontal
  else {
    if (start + (shipSize - 1) < Math.floor(start / 10) * 10 + 9) {
      // right
      for (let field of state.fields) {
        for (let i = 0; i < shipSize; i++) {
          if (field.number === start + i && field.hasShip)
            return placeShip(state, shipSize);
        }
      }

      for (let j = 0; j < shipSize; j++) {
        state.fields[start + j].hasShip = true;
        ship.push(state.fields[start + j]);
      }
    } else {
      // left
      for (let field of state.fields) {
        for (let i = 0; i < shipSize; i++) {
          if (field.number === start - i && field.hasShip)
            return placeShip(state, shipSize);
        }
      }

      for (let j = 0; j < shipSize; j++) {
        state.fields[start - j].hasShip = true;
        ship.push(state.fields[start - j]);
      }
    }
  }

  state.ships.push(ship);
  state.shipsAfloat += 1;
}
