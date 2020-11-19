import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class DeleteAccount {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/users/deleteMe`;
    }

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    deleteAccount = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        try {
            this.data = await axios({
                method: 'DELETE',
                url: this.url,
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
export default DeleteAccount;
