import axios from 'axios';
class Signup {
    constructor({ name, email, password, passwordConfirm }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.url = `http://localhost:3000/api/v1/users/signup`;
    }

    signupUser = async () => {
        try {
            const obj = {
                name: this.name,
                email: this.email,
                password: this.password,
                passwordConfirm: this.passwordConfirm,
            };
            const user = await axios.post(this.url, obj);
            return user;
        } catch (err) {
            console.log('Error', err.message);
        }
    };
}
export default Signup;
