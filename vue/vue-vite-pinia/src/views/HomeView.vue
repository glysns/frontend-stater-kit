<script setup>
import { ref, onMounted } from 'vue'
import { aulasStore } from '../stores/aulas'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div>
    <h1>This is HOME page</h1>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

//0800 400 4758