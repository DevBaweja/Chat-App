import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Relation {
    constructor({ id }) {
        this.url = `${url[state['mode'].mode]}api/v1/users/relation/`;
        this.id = id;
    }

    setUserInput = ({ id }) => {
        this.id = id;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    getRelation = async () => {
        const url = `${this.url}${this.id}`;
        try {
            this.data = await axios({
                method: 'GET',
                url,
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

export default Search;
