import state from '../state';
import { url } from '../utils/base.util';
import axios from 'axios';
import { detect } from 'gender-detection';

class Signup {
    constructor({ name, email, password, passwordConfirm }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.photo = this.getPhoto();
        this.url = `${url[state.mode.mode]}api/v1/users/signup`;
    }

    setUserInput = ({ name, email, password, passwordConfirm }) => {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.photo = this.getPhoto();
    };

    getPhoto = () => {
        const ext = 'png';
        const photo = detect(this.name);
        const path = 'img/avatar/';
        if (photo === 'unknown') return `${path}default.${ext}`;
        return `${path}${photo}.${ext}`;
    };

    parseData = () => {
        const { data } = this.data;
        this.data = data;
    };

    signupUser = async () => {
        try {
            const obj = {
                name: this.name,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
                photo: this.photo,
            };

            this.data = await axios({
                method: 'POST',
                url: this.url,
                data: obj,
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

export default Signup;
