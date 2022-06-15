<template>
  <div ref="chat" class="chat">
    <p v-for="guess in state.guesses">{{ guess && guess }}</p>
  </div>
</template>

<script setup lang="ts">
import {nextTick, ref, watch} from 'vue';
import { useStore } from '@/store/index'

const state = useStore()
const chat = ref<HTMLElement>()

watch(state.guesses, () => {
  nextTick(() => { 
    if (chat.value) {
      chat.value.scroll({ top: chat.value.scrollHeight, behavior: 'smooth'})
    }
  })
})
</script>

<style>
  .chat {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 255, .2);
    width: 10vw;
    height: 70vw;
    max-height: 600px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .chat::-webkit-scrollbar {
    display: none;
  }
</style>