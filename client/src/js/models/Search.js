import axios from 'axios';
import state from '../state';
import { url, generateQuery } from '../utils/base.util';

class Search {
    constructor({ name }) {
        this.url = `${url[state['mode'].mode]}api/v1/users/search/`;
        this.name = name;
        this.params = {
            sort: '+name',
        };
    }

    setUserInput = ({ name }) => {
        this.name = name;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    getSearch = async () => {
        this.query = generateQuery(this.params);
        const url = `${this.url}${this.name}?${this.query}`;
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
