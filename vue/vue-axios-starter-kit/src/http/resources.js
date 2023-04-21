import ROOT_API from './index';

export default class Resources {
    constructor(path) {
        this.path = '/' + path;
    }

    post(sufix, body){
        const config =  this.config({});
        const url = `${this.path}${sufix}`
        console.log('POST->', url);
        return ROOT_API.post(url,body,config)
    }

    put(sufix,body){
        const config =  this.config({});
        const url = `${this.path}${sufix}`
        console.log('PUT->', url);
        return ROOT_API.put(url,body,config)
    }
    
    patch(sufix, body){
        const config =  this.config({});
        const url = `${this.path}${sufix}`
        console.log('PATCH->', url);
        return ROOT_API.patch(url,body,config)
    }
    
    get(sufix, params) {
        const config =  this.config(params);
        return ROOT_API.get(this.path+sufix,config)
    }
    
    delete(id){
        const url = `${this.path}/${id}`
        console.log('DELETE', url);
        return ROOT_API.delete(url)
    }

    config(params){
        //** REMOVA SE NÃO PRECISAR */
        for (const key in params) {
            if (!params[key]) {
                delete params[key];
            }
        }
        
        //** REMOVA SE NÃO PRECISAR */
        const config={
            params:params,
            transformResponse:[function(data){
                const response = JSON.parse(data);
                if(response.code!=200){
                    response.data=[];
                    response.page={totalItems:0};
                    if(response.code >=500)
                        response.error=true

                    console.log('response-error', response)
                }
                return response
            }]
        }
        return config;
    }

}
