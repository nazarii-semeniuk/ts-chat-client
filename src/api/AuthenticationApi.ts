import Api from "./Api";

export default class AuthenticationApi extends Api {
    constructor() {
        super('auth');
    }

    public async login(email: string, password: string) {
        return await this.axios.post('/login', { email, password });
    }

    public async register(email: string, password: string, firstName: string) {
        return await this.axios.post('/register', {  email, password, firstName });
    }

    public async logout() {
        return await this.axios.post('/logout');
    }

}