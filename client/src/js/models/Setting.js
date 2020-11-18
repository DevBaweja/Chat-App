import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

class Setting {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/settings/`;
    }
    setTheme = theme => {
        this.theme = theme;
    };
    setColor = color => {
        this.color = color;
    };

    setInput = ({ theme, color }) => {
        this.theme = theme;
        this.color = color;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };
    createMySetting = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const data = {
            theme: this.theme,
            color: this.color,
        };
        try {
            this.data = await axios({
                method: 'POST',
                url: `${this.url}mySetting`,
                headers,
                data,
                validateStatus: () => true,
                // For validation
            });

            this.parseData();
            return this.data;
        } catch (err) {
            throw err;
        }
    };
    getMySetting = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        try {
            this.data = await axios({
                method: 'GET',
                url: `${this.url}mySetting`,
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
    updateMySetting = async () => {
        let headers = {};
        addAuthorizationHeaders(headers);
        const data = {
            theme: this.theme,
            color: this.color,
        };
        try {
            this.data = await axios({
                method: 'PATCH',
                url: `${this.url}mySetting`,
                headers,
                data,
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
export default Setting;
