<template>
  <div ref="chat" class="chat">
    <p v-for="guess in guesses">{{ guess && guess }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const props = defineProps({
  guess: { type: Number, required: true }
})

const chat = ref(null)
const guesses = ref<number[]>([])

watch(() => props.guess, () => {
  guesses.value.push(props.guess)
  if (guesses.value.length > 25) {
    guesses.value.shift()
  }
})
</script>

<style>
  .chat {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 255, .2);
    width: 10vw;
    height: auto;
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