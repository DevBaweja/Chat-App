import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class UpdatePassword {
    constructor({ passwordCurrent, password, passwordConfirm }) {
        this.passwordCurrent = passwordCurrent;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.url = `${url[state['mode'].mode]}api/v1/users/updateMyPassword`;
    }

    setUserInput = ({ passwordCurrent, password, passwordConfirm }) => {
        this.passwordCurrent = passwordCurrent;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    updatePassword = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        try {
            const obj = {
                passwordCurrent: this.passwordCurrent,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
            };

            this.data = await axios({
                method: 'PATCH',
                url: this.url,
                data: obj,
                headers,
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
export default UpdatePassword;
