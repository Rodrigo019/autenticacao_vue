import AuthResponse  from '../models/authresponse';
import AuthRequest from '../models/authrequest';

import BaseService from "@/services/base/baseservice";

class AuthService extends BaseService<AuthRequest, AuthResponse> {

    constructor (){
        super('login');
    }

    login(request: AuthRequest) : AuthResponse {
        return  this.post(request);
    }
}

export default new AuthService();