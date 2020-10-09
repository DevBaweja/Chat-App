import axios from 'axios';
import state from '../state';
import { url } from '../utils/base.util';

class Reset {
    constructor({ token, password, passwordConfirm }) {
        this.token = token;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.url = `${url[state['mode'].mode]}api/v1/users/resetPassword/${token}`;
    }

    setUserInput = ({ token, password, passwordConfirm }) => {
        this.token = token;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.url = `${url[state['mode'].mode]}api/v1/users/resetPassword/${token}`;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    resetPassword = async () => {
        try {
            const obj = { password: this.password, passwordConfirm: this.passwordConfirm };
            this.data = await axios({
                method: 'PATCH',
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
export default Reset;
