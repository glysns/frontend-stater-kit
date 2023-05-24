import { defineStore } from 'pinia'

export const aulasStore = defineStore('aulas', {
  state:() =>{
    return {
        aulas:[{"id":1,"titulo":"Java Setup","situacao":{"id":null,"usuario":null,"dataHoraInicio":null,"dataHoraFim":null},"assistida":false},{"id":2,"titulo":"Variaveis","situacao":{"id":null,"usuario":null,"dataHoraInicio":null,"dataHoraFim":null},"assistida":false},{"id":3,"titulo":"Controle de fluxo","situacao":{"id":null,"usuario":null,"dataHoraInicio":null,"dataHoraFim":null},"assistida":false}]
    }
  },
  getters:{
    //size:(state) => {return state.aulas.length }
    size:(state) => state.aulas.length,
    exists:(state) => {
        return (id) => state.aulas.some(a=>a.id==id)
    }
  }
})
