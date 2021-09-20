import http from '../httpclient'

class BaseService<Request, Response> {

    protected endpoint: string = '';

    constructor (endpoint: string) {
        this.endpoint = endpoint;
    }

    async get(id: number) : Promise<Response> {
        return await http.get(`${this.endpoint}/${id}`);
    }

    async post(request: Request) : Promise<Response> {
        return await http.post(this.endpoint, request);
    }
}

export default BaseService;