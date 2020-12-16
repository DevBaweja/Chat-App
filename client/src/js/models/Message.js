import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Message {
    constructor({ user }) {
        this.user = user;
        this.url = `${url[state['mode'].mode]}api/v1/messages/`;
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

    getAllMyMessage = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}all/${this.user}`;
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

export default Message;
