import http from "./index";

class ClienteResource {
    servico = "/clientes";
    listar(): Promise<any> {
        return http.get(this.servico);
    }

    buscar(id: any): Promise<any> {
        return http.get(`${this.servico}/${id}`);
    }

    incluir(data: any): Promise<any> {
        return http.post(this.servico, data);
    }

    alterar(id: any, data: any): Promise<any> {
        return http.put(`${this.servico}/${id}`, data);
    }

    excluir(id: any): Promise<any> {
        return http.delete(`${this.servico}/${id}`);
    }
}

export const clienteResource = new ClienteResource()