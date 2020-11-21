import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class ReceiveRequest {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/requests/receive/`;
        this.params = {
            sort: '-createdAt',
        };
    }

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    setUserInput = ({ user }) => {
        this.user = user;
    };

    updateReceiveRequest = async obj => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}${this.user}`;
        try {
            this.data = await axios({
                method: 'PATCH',
                url,
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
    declineReceiveRequest = async () => {
        const obj = { status: 'declined' };
        return await this.updateReceiveRequest(obj);
    };

    acceptReceiveRequest = async () => {
        const obj = { status: 'accepted' };
        return await this.updateReceiveRequest(obj);
    };

    getAllReceiveRequest = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        try {
            this.data = await axios({
                method: 'GET',
                url: this.url,
                params: this.params,
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
