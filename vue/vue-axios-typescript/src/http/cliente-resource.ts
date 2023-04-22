import http from "./index";

class ClienteResource {
    servico = "/clientes";
    listar(): Promise<any> {
        return http.get(this.servico);
    }

    get(id: any): Promise<any> {
        return http.get(`${this.servico}/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post(this.servico, data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`${this.servico}/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`${this.servico}/${id}`);
    }
}

export const clienteResource = new ClienteResource()