<script setup lang="ts">
import {ref} from 'vue';
import Board from "@/components/Board.vue";
import Chat from '@/components/Chat.vue';
import { useStore } from '@/store/index'
import type Ship from '@/types/Ship'
import type Field from '@/types/Field'

let state = useStore()
let guess: string = ''

const handleGuess = (payload: Field) => {
  const ship = state.ships.find((ship) => ship.includes(payload))

  if (ship) {
    state.guesses.push('Hit')
  } else {
    state.guesses.push('MIss')
  }
}
</script>

<template>
  <main class="container">
    <Board @guess="handleGuess($event)" class="board" />
    <Chat />
  </main>
</template>

<style scoped>
.container {
  display: flex;
}

.board {
  margin-right: 15px;
}
</style>