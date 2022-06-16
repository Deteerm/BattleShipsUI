import { defineStore } from "pinia";
import type Field from "@/types/Field";
import type Ship from "@/types/Ship";
import createShips from "@/utils/createShips";
import type Score from "@/types/Score";

export interface StateData {
  ships: Ship[];
  fields: Field[];
  guesses: string[];
  shipsAfloat: number;
  scores: Score[];
}

const scoresString: string = localStorage.getItem("scores") || "[]";

const stateData: StateData = {
  ships: [],
  fields: [],
  guesses: [],
  shipsAfloat: 0,
  scores: JSON.parse(scoresString),
};

for (let i = 0; i < 100; i++) {
  stateData.fields.push({ number: i, checked: false, hasShip: false });
}

createShips(stateData);

export const useStore = defineStore("main", {
  state: () => {
    return stateData;
  },
});
