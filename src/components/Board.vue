<template>
  <section class="game-grid">
    <FieldComponent v-for="field in store.fields" :field="field" @click="handleClick(field)"></FieldComponent>
  </section>
</template>

<script setup lang="ts">
import FieldComponent from '@/components/FieldComponent.vue'
import type Field from '@/types/Field'
import { useStore } from '@/store/index'

const store = useStore()
const emit = defineEmits(['guess'])

const handleClick = (payload: Field): void => { emit('guess', payload) }
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
    background-color: #d4f1f9;
    border: 1px solid black;
  }
</style>