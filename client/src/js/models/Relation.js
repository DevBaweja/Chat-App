import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Relation {
    constructor({ user }) {
        this.url = `${url[state['mode'].mode]}api/v1/users/relation/`;
        this.user = user;
    }

    setUserInput = ({ user }) => {
        this.user = user;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    getRelation = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const url = `${this.url}${this.user}`;
        try {
            this.data = await axios({
                method: 'GET',
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

export default Relation;
