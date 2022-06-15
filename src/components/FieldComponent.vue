<template>
  <div @click="markAsChecked" class="field" :class="{'checked': field.checked, 'ship-hit': true /*field.checked*/ && field.hasShip}">
    {{ field.number }}
  </div>
</template>

<script setup lang="ts">
import type Field from '@/types/Field'
import { useStore } from '@/store/index'

const props = defineProps<{
  field: Field
}>()

const store = useStore()

const markAsChecked = () => {
  store.fields[props.field.number].checked = true
}
</script>

<style scoped>
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  .field:hover {
    background-color: rgb(181, 255, 212);
    cursor: pointer;
  }

  .checked {
    background-color: rgb(143, 206, 169);
  }

  .ship-hit {
    background-color: red;
  }
  .ship-hit:before {
    content: 'X'
  }
</style>