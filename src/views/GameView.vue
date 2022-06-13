<script setup lang="ts">
import {ref} from 'vue';

import Board from "@/components/Board.vue";
import Chat from '@/components/Chat.vue';

let guess = ref<number>(0)

const handleGuess = (payload: number) => {
  guess.value = payload
}
</script>

<template>
  <main class="container">
    <Board @guess="handleGuess($event)" class="board" />
    <Chat :guess="guess" />
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