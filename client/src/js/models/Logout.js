import axios from 'axios';
import state from '../state';
import { url } from '../utils/base.util';

class Logout {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/users/logout`;
    }

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    logoutUser = async () => {
        try {
            this.data = await axios({
                method: 'GET',
                url: this.url,
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
export default Logout;
