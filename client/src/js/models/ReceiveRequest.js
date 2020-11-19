import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class ReceiveRequest {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/requests/receive`;
    }

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    getAllReceiveRequest = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        try {
            this.data = await axios({
                method: 'GET',
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
export default ReceiveRequest;
