import axios from 'axios';

const ROOT_API = axios.create({
    baseURL:"http://localhost:8080"
})


//** REMOVA SE NÃO PRECISAR */

//PARA APIS QUE POSSUEM ADAPTAÇÃO ESTRUTURAL NAS REQUISIÇÕES
//COMO VALIDAR USO DE TOKEN

/*

ROOT_API.interceptors.request.use(function(config){
    return config;
})

*/

//** REMOVA SE NÃO PRECISAR */

//PARA APIS QUE POSSUEM ADAPTAÇÃO ESTRUTURAL NAS RESPOTAS
//COMO UMA RESPOSTA CUSTOMIZADA

/*
ROOT_API.interceptors.response.use(function (res) {
    //normalizando a minha response para o meu contexto de negócio
    return response(res);
   
}, function (error) {
    //quando houver erro eu pego a resposta do erro
    return Promise.resolve(response( error.response));
});

*/


//** REMOVA SE NÃO PRECISAR */

const response = function(res){
    const response =
        {
            baseURL:res.config?.baseURL,
            url:res.config?.url,
            data:res.data?.body,
            message:res.data?.message,
            success:res.data?.success
        }
    return response;
}

export default ROOT_API;

