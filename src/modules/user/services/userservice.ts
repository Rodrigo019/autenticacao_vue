import BaseService from "@/services/base/baseservice";
import User from "../models/user";


class UserService extends BaseService<User> {

    constructor() {
        super('Usuario');
    }
}

export default new UserService();