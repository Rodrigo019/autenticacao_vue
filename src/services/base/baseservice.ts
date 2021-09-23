import http from '../httpclient'
import Response from '@/models/requests/response'

class BaseService<Request> {

    protected endpoint = '';

    constructor (endpoint: string) {
        this.endpoint = endpoint;
    }

    public get(id: number) : Promise<Response<Request>> {
        return http.get(`${this.endpoint}/${id}`);
    }

    public getPaged(initialPage = 1, quantity: number) : Promise<Response<any>> {
        return http.get(`${this.endpoint}Paged?PaginacaoInicio=${initialPage}&PaginacaoQuantidade=${quantity}`);
    }

    public post(request: Request) : Promise<Response<Request>> {
        return http.post(this.endpoint, request);
    }
}

export default BaseService;