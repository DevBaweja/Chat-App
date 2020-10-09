import axios from 'axios';
import socket from 'socket.io-client';
import state from '../state';
import { url, mode } from '../utils/base.util';

class Init {
    constructor() {
        this.url = `${url[state['mode'].mode]}api/v1/users/isLogin`;
    }

    establishConnection = async () => {
        try {
            const io = await socket(this.url);
            return io;
        } catch (err) {
            console.log('Error', err.message);
        }
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    isLogin = async () => {
        let headers = {};
        // ! For Development
        switch (state['mode'].mode) {
            case mode.mode.development:
                headers['authorization'] = 'Bearer ' + state['token'];
        }

        if (state['mode'].mode)
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
                console.log('Error', err.message);
            }
    };
}
export default Init;
