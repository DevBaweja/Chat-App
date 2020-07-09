import axios from 'axios';
class Login {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
    }

    loginUser = async () => {
        try {
            const obj = { email: this.email, password: this.password };
            const user = await axios.post(this.query, obj);
        } catch (err) {
            console.log('Error', err.message);
        }
    };
}

export default Login;
