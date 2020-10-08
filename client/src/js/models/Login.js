import axios from 'axios';
import state from '../state';
import { url } from '../utils/base.util';

class Login {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
        this.url = `${url[state['mode'].mode]}api/v1/users/login`;
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
            this.data = await axios({
                method: 'POST',
                url: this.url,
                data: obj,
                validateStatus: () => true,
                // For validation
            });

            this.parseData();
            return this.data;
        } catch (err) {
            throw err;
        }
    };
}

export default Login;
