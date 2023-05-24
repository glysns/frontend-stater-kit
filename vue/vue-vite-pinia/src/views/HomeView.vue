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

function assistirAula( id){
  store.assistirAula(id)
}

function concluirAula( id){
  store.concluirAula(id)
}

</script>

<template>
  <div>
    <h1>This is HOME page</h1>
    <p>total de aulas: {{ size }}</p> 
    
    <p></p>
    {{ exists }}

    <template v-for="(a) in aulas" :key="a.id">
      <p></p> 
      <button @click="assistirAula(a.id)">Assisitir {{ a.id }} - {{ a.titulo }}</button>
      <p></p> 
      <button @click="concluirAula(a.id)">Concluir {{ a.id }} - {{ a.titulo }}</button> 
    </template>
    <p></p> 
    {{ aulas }}
  </div>
</template>

//0800 400 4758