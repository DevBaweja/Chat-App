import axios from 'axios';
import * as gender from 'gender-detection';

class Signup {
    constructor({ name, email, password, passwordConfirm }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.gender = gender.detect(name);
        // this.url = `${window.location}api/v1/users/signup`;
        this.url = `http://localhost:3000/api/v1/users/signup`;
    }

    signupUser = async () => {
        try {
            const obj = {
                name: this.name,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
                gender: this.gender,
            };
            const user = await axios.post(this.url, obj);
            return user;
        } catch (err) {
            console.log('Error', err.message);
        }
    };
}

export default Signup;
