import axios from 'axios';
import state from '../state';
import { url } from '../utils/base.util';

class Forget {
    constructor({ email }) {
        this.email = email;
        this.url = `${url[state['mode'].mode]}api/v1/users/forgetPassword`;
    }

    setUserInput = ({ email }) => {
        this.email = email;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    forgetPassword = async () => {
        try {
            const obj = { email: this.email };
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
export default Forget;
