<template>
  <div @click="handleClick" class="field" :class="[ field.checked ? 'checked' : 'unchecked', field.checked && field.hasShip ? 'ship-hit' : '' ]">
  </div>
</template>

<script setup lang="ts">
import { useStore, type StateData } from '@/store/index'
import type Ship from '@/types/Ship'
import type Field from '@/types/Field'

const props = defineProps<{
  field: Field
}>()

const state: StateData = useStore()

const markAsChecked = () => {
  state.fields[props.field.number].checked = true
}

const handleClick = () => {
  if (props.field.checked) return
  if (state.shipsAfloat === 0) return
  
  markAsChecked()

  const ship: Ship = state.ships.find((ship: Ship) => ship.includes(props.field)) || []

  if (ship.length > 0) {
    if (ship.every((field: Field) => field.checked)) {
      state.guesses.push('Hit and sunken!')
      state.shipsAfloat -= 1;
    } else state.guesses.push('Hit!')
  } else {
    state.guesses.push('Miss!')
  }
}
</script>

<style scoped>
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  .unchecked:hover {
    box-shadow: #ff7272 0 0 8px 6px inset;
    /* #72e1ff */
    cursor: crosshair;
  }

  .checked {
    background-color: #89b6db;
    box-shadow: #577b99 0 0 1rem 2px inset;
    /* #5a9dd3 */
  }

  .checked:hover {
    cursor: not-allowed;
  }

  .ship-hit:before {
    content: '\2715';
    font-size: 1.75rem;
  }

  .ship-hit {
    background-color: red;
    box-shadow: #000000 0 0 1rem 2px inset;
  }

  .ship-hit:hover {
    background-color: red;
  }
</style>