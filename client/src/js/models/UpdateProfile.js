import axios from 'axios';
import state from '../state';
import { url, addAuthorizationHeaders } from '../utils/base.util';

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
        addAuthorizationHeaders(headers);
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
