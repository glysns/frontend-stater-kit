import Resources from "@/_infra/http/resources";

class PublicResource extends Resources {
    constructor(){
        super('public')
    }
    logar(login) {
        return this.post('/login',login);
    }
}

export const publicResource = new PublicResource()