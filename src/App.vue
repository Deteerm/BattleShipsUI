<script setup lang="ts">
import { RouterView } from "vue-router";
import { useStore } from '@/store/index'

const store = useStore()
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  display: flex;
  justify-content: center;
}
</style>
