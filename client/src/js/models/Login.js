import state from '../state';
import { url } from '../utils/base.util';
import axios from 'axios';

class Login {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
        this.url = `${url[state.mode]}api/v1/users/login`;
    }

    setUserInput = ({ email, password }) => {
        this.email = email;
        this.password = password;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    loginUser = async () => {
        try {
            const obj = { email: this.email, password: this.password };
            this.data = await axios.post(this.url, obj);
            this.parseData();
            return this.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
}

export default Login;
