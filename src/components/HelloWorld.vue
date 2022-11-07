<script setup lang="ts">
import { ref } from "vue";
import useCounter from "../stores/counter";

defineProps<{ msg: string }>();

const count = ref(0);

const store = useCounter();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>store: {{ store.counter }}</p>
    <p>double: {{ store.double(2) }}</p>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
