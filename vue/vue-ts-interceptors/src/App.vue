<template>
  <div>
    <button @click='logar()'>Login</button>
    <button @click='logarErro()'>Login - Erro</button>
    <button @click='listar()'>Listar Clientes</button>
    <button @click='buscar()'>Buscar Cliente -> ID</button>
    <input type='text' placeholder='ID' size='1' v-model='id'/>
    <button @click='alterar()'>Alterar ID 1</button>
    <button @click='incluir()'>Incluir Novo</button>
    <button @click='excluir()'>Excluir</button>
    <input type='text' placeholder='ID' size='1' v-model='id'/>
    
    <h4>Resposta</h4>
    <textarea v-model="resposta" rows="15" cols="100"></textarea>
    <h4>Resposta Data (Body)</h4>
    <textarea v-model="body" rows="15" cols="100"></textarea>
  </div>

</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

import { clienteResource } from '@/http/cliente-resource';
import { publicResource } from '@/http/public-resource';

export default defineComponent({
  setup() {
    let id = ref(0);
    let resposta = ref('SEM RESPOSTA');
    let body = ref('SEM CORPO');
    
    async function listar(){
      console.log('listando ... ')
      const response:any = await clienteResource.listar();
      resposta.value = response;
      body.value = response.data;resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('listagem concluida ')
    }

    async function buscar(){
      console.log('buscando ... ')
      const response = await clienteResource.buscar(id.value);
      resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('busca concluida ... ')
    }

    async function alterar(){
      const registro= { 'nome': 'gleyson sampaio de oliveira', 'cpf': '897870', 'dataNascimento': '1982-01-01', 'rendaMensal': 1234.5, 'sexo': 'MASCULINO', 'id': 1 }
      console.log('alterando ... ')
      const response = await clienteResource.alterar(1,registro);
      resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('alteração concluida ... ')
    }

    async function incluir(){
      const registro= { 'nome': 'marilene sampaio', 'cpf': '4564567', 'dataNascimento': '1967-04-01', 'rendaMensal': 9097.5, 'sexo': 'FEMININO'}
      console.log('incluindo ... ')
      const response = await clienteResource.incluir(registro);
      resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('inclusão concluida ... ')
    }

    async function excluir(){
      console.log('excluindo ... ')
      const response = await clienteResource.excluir(id.value);
      resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('exclusão concluida ... ')
    }

    async function logar(){
      console.log('logando ... ')
      const registro= {'username': 'digytal','password': 'Jwt@123'}
      const response = await publicResource.logar(registro);
      resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('login realizado com sucesso ')
    }
    
    async function logarErro(){
      console.log('logando ... ')
      const registro= {'username': 'desconhecido','password': 'errada'}
      const response = await publicResource.logar(registro);
      resposta.value = JSON.stringify(response,null, 2);
      body.value = JSON.stringify(response.data,null, 2);
      console.log('login realizado com sucesso ')
    }

    return{
      id, resposta, body,
      listar,buscar, incluir, alterar, excluir, logar, logarErro
    }
  }

  
})
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
