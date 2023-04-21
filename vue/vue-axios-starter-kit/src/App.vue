<template>
  <div>
    <button @click="listar()">Listar Clientes</button>
    <button @click="buscar()">Buscar Cliente -> ID</button>
    <input type="text" placeholder="ID" size="1" v-model="id"/>
    <button>Listar Clientes</button>
    <button>Listar Clientes</button>
    <h4>Resposta</h4>
    {{  resposta }}
  </div>

</template>

<script>

import { clienteResource } from "@/http/cliente-resource";

export default {
  name: 'App',
  data(){
    return {
      id:0,
      resposta:'SEM RESPOSTA'
    } 
  },
  methods:{
    async listar(){
      const response = await clienteResource.listar();
      this.resposta = response.data;
    },
    async buscar(){
      const response = await clienteResource.buscar(this.id);
      this.resposta = response.data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
