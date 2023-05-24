<script setup>
import { ref, onMounted, computed } from 'vue'
import { aulasStore } from '../stores/aulas'
const store = aulasStore();

const aulas = store.aulas;
//só para o component atual - se precisar globalizar
//use o getters da store
const size = computed(()=>store.size)

const exists = store.exists(10);
onMounted(() => {
  
})

</script>

<template>
  <div>
    <h1>This is HOME page</h1>
    <p>total de aulas: {{ size }}</p> 
    {{ aulas }}
    <p></p>
    {{ exists }}
  </div>
</template>

//0800 400 4758