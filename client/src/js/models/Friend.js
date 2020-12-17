import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Friend {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/friends/myFriend/`;
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
    setUpdateObject = ({ update }) => {
        this.update = update;
    };

    createFriend = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}${this.user}`;
        try {
            this.data = await axios({
                method: 'POST',
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

    getAllFriend = async () => {
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

    updateFriend = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}${this.user}`;
        try {
            this.data = await axios({
                method: 'PATCH',
                url,
                data: this.update,
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
export default Friend;
