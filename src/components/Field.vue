<template>
  <div class="field">
    {{ n }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
      n: Number
  },
})
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
</style>