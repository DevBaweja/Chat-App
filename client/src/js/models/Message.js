import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Message {
    constructor({ user }) {
        this.user = user;
        this.url = `${url[state['mode'].mode]}api/v1/messages/`;
        this.params = {
            sort: '+createdAt',
        };
    }

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    setUser = ({ user }) => {
        this.user = user;
    };

    setContent = ({ content }) => {
        this.type = 'text';
        this.content = content;
    };

    getAllMyMessage = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}my/${this.user}`;
        try {
            this.data = await axios({
                method: 'GET',
                url,
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

    createMyMessage = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}my/${this.user}`;
        const obj = { type: this.type, content: this.content };
        try {
            this.data = await axios({
                method: 'POST',
                url,
                params: this.params,
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

export default Message;
