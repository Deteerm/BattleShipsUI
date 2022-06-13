import { defineStore } from 'pinia';
import type Field from '@/types/Field'
import type Ship from '@/types/Ship'
import createShips from '@/utils/createShips';

interface StateData {
      ships: Ship[],
      fields: Field[],
      gameState: string
}

const stateData: StateData = {
  ships: [],
  fields: [],
  gameState: 'playing',
}

for (let i = 0; i < 100; i++) {
  stateData.fields.push({number: i, checked: false})
}

export const useStore = defineStore('main', {
  state: () => {
    return stateData
  }
})
