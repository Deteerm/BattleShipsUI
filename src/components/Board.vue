<template>
  <section class="game-grid">
    <Field v-for="n in 100" :n="n" @click="handleClick(n)"></Field>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Field from '@/components/Field.vue'

export default defineComponent({
    setup() {
        return {};
    },
    components: { Field },
    methods: {
      handleClick(payload: Number) {
        this.$emit('guess', payload)
      }
    }
})
</script>

<style scoped>
  .game-grid {
    width: 70vw;
    height: 70vw;
    max-width: 600px;
    max-height: 600px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: rgb(119, 245, 171);
    border: 1px solid black;
  }
</style>