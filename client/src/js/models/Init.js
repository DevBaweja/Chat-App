import axios from 'axios';
import socket from 'socket.io-client';
import state from '../state';
import { url } from '../utils/base.util';

class Init {
    constructor() {
        this.url = `${url[state.mode.mode]}api/v1/users/isLogin`;
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
        try {
            this.data = await axios({
                method: 'GET',
                url: this.url,
                headers: {
                    authorization: 'Bearer ' + state.token,
                },
                validateStatus: () => true,
                // For validation
            });
            console.log(this.data);

            this.parseData();
            return this.data;
        } catch (err) {
            console.log('Error', err.message);
        }
    };
}
export default Init;
