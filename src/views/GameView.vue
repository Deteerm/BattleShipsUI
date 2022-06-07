<script setup lang="ts">
import Board from "@/components/Board.vue";
import Chat from '@/components/Chat.vue';
</script>

<template>
  <main>
    <div class="container">
      <Board class="board" />
      <Chat />
    </div>
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