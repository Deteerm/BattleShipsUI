<template>
  <section class="game-grid">
    <Field v-for="n in 100" :n="n"></Field>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Field from '@/components/Field.vue'

export default defineComponent({
    setup() {
        return {};
    },
    components: { Field }
})
</script>

<style scoped>
  .game-grid {
    width: 70vw;
    height: 70vw;
    max-width: 800px;
    max-height: 800px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: rgb(119, 245, 171);
    border: 1px solid black;
  }
</style>