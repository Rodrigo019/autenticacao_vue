import http from '../httpclient'
import Response from '@/models/requests/response'

class BaseService<Request> {

    protected endpoint = '';

    constructor (endpoint: string) {
        this.endpoint = endpoint;
    }

    public async get(id: number) : Promise<Response<Request>> {
        return await http.get(`${this.endpoint}/${id}`);
    }

    public async getPaged(initialPage: number = 1, quantity: number) : Promise<Response<any>> {
        return await http.get(`${this.endpoint}Paged?PaginacaoInicio=${initialPage}&PaginacaoQuantidade=${quantity}`);
    }

    public async post(request: Request) : Promise<Response<Request>> {
        return await http.post(this.endpoint, request);
    }
}

export default BaseService;