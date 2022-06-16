<template>
  <div ref="chat" class="chat">
    <div v-for="guess in state.guesses">
      <p class="msg" :class="{'sunken': guess === 'Hit and sunken!'}">{{ guess }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {nextTick, ref, watch} from 'vue';
import { useStore, type StateData} from '@/store/index'

const state: StateData = useStore()
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
    width: 200px;
    height: 70vw;
    max-height: 600px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: 880px) {
    .chat {
      height: 200px !important;
      width: 70vw !important;
      margin-top: 1.5rem;
    }
  }

  .chat::-webkit-scrollbar {
    display: none;
  }

  .msg {
    font-size: 1.2rem;
    border-bottom: 1px solid black;
  }

  .sunken {
    background-color: black;
    color: white;
  }
</style>