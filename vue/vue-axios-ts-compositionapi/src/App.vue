<template>
  <div>
    <button @click='listar()'>Listar Clientes</button>
    <button @click='buscar()'>Buscar Cliente -> ID</button>
    <input type='text' placeholder='ID' size='1' v-model='id'/>
    <button @click='alterar()'>Alterar ID 1</button>
    <button @click='incluir()'>Incluir Novo</button>
    <button @click='excluir()'>Excluir</button>
    <input type='text' placeholder='ID' size='1' v-model='id'/>
    <h4>Resposta</h4>
    {{  resposta }}
  </div>

</template>

<script>


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
      console.log('listando ... ')
      
      console.log('listagem concluida ')
    },
    async buscar(){
      console.log('buscando ... ')
      
      console.log('busca concluida ... ')
    },
    async alterar(){
      //const registro= { 'nome': 'gleyson sampaio de oliveira', 'cpf': '897870', 'dataNascimento': '1982-01-01', 'rendaMensal': 1234.5, 'sexo': 'MASCULINO', 'id': 1 }
      console.log('alterando ... ')
      
      console.log('alteração concluida ... ')
    },
    async incluir(){
      //const registro= { 'nome': 'marilene sampaio', 'cpf': '4564567', 'dataNascimento': '1967-04-01', 'rendaMensal': 9097.5, 'sexo': 'FEMININO'}
      console.log('incluindo ... ')
      
      console.log('inclusão concluida ... ')
    },
    async excluir(){
      console.log('excluindo ... ')
      
      console.log('exclusão concluida ... ')
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
