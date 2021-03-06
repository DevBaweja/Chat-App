import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class SendRequest {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/requests/sent/`;
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

    createSendRequest = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}${this.user}`;
        const obj = {};
        try {
            this.data = await axios({
                method: 'POST',
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

    getAllSendRequest = async () => {
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

    deleteSentRequest = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}${this.user}`;

        try {
            this.data = await axios({
                method: 'DELETE',
                url,
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
export default SendRequest;
