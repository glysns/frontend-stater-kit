import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const aulasStore = defineStore('aulas', () => {
  state:() =>{
    return {
        aulas:[{"id":1,"titulo":"Java Setup","situacao":{"id":null,"usuario":null,"dataHoraInicio":null,"dataHoraFim":null},"assistida":false},{"id":2,"titulo":"Variaveis","situacao":{"id":null,"usuario":null,"dataHoraInicio":null,"dataHoraFim":null},"assistida":false},{"id":3,"titulo":"Controle de fluxo","situacao":{"id":null,"usuario":null,"dataHoraInicio":null,"dataHoraFim":null},"assistida":false}]
    }
  }
})
