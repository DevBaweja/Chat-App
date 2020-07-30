import axios from 'axios';
import { detect } from 'gender-detection';

class Signup {
    constructor({ name, email, password, passwordConfirm }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.photo = this.getPhoto();
        // this.url = `${window.location}api/v1/users/signup`;
        this.url = `http://localhost:3000/api/v1/users/signup`;
    }

    getPhoto = () => {
        const ext = 'png';
        const photo = detect(this.name);
        if (photo === 'unknown') return `default.${ext}`;
        return `${photo}.${ext}`;
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
            const user = await axios.post(this.url, obj);
            return user;
        } catch (err) {
            console.log('Error', err.message);
        }
    };
}

export default Signup;
