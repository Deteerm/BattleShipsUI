import { defineStore } from 'pinia';
import type Field from '@/types/Field'
import createShips from '@/utils/createShips';

interface StateData {
      ships: object[],
      occupiedFields: Field[],
      gameState: string
}

const stateData: StateData = {
  ships: [],
  occupiedFields: [],
  gameState: 'playing',
}

createShips(stateData.ships)

export const useStore = defineStore('main', {
  state: () => {
    return stateData
  }
})