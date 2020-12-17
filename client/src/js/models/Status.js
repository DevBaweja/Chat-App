import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Status {
    constructor({ status }) {
        this.status = status;
        this.url = `${url[state['mode'].mode]}api/v1/users/status`;
    }

    setInputs = ({ status }) => {
        this.status = status;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    updateStatus = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const obj = {
            status: this.status,
        };
        try {
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
export default Status;
