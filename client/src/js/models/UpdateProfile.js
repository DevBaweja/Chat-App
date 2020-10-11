import axios from 'axios';
import state from '../state';
import { url, mode } from '../utils/base.util';

class UpdateProfile {
    constructor({ inputs }) {
        this.inputs = inputs;
        this.url = `${url[state['mode'].mode]}api/v1/users/updateMe`;
    }

    setUserInput = ({ inputs }) => {
        this.inputs = inputs;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    updateProfile = async () => {
        let headers = {};
        // ! For Development
        switch (state['mode'].mode) {
            case mode.mode.development:
                headers['authorization'] = 'Bearer ' + state['token'];
        }
        try {
            this.data = await axios({
                method: 'PATCH',
                url: this.url,
                data: this.inputs,
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
export default UpdateProfile;
