import axios from 'axios';
import state from '../state';
import { url, mode } from '../utils/base.util';

class UpdateProfile {
    constructor({ name, email, bio }) {
        this.name = name;
        this.email = email;
        this.bio = bio;
        this.url = `${url[state['mode'].mode]}api/v1/users/updateMe`;
    }

    setUserInput = ({ name, email, bio }) => {
        this.name = name;
        this.email = email;
        this.bio = bio;
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
            const obj = { name: this.name, email: this.email, bio: this.bio };
            this.data = await axios({
                method: 'PATCH',
                url: this.url,
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
export default UpdateProfile;
