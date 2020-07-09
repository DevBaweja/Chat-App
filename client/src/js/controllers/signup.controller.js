// State
import state from '../state';
// Utils
import { elementStrings } from '../utils/base.util';
// Models
import Signup from '../models/Signup';
// Views
import * as signupView from '../views/signup.view';

// Forms
const controlSignup = event => {
    event.preventDefault();

    console.log('Sign up');
    // event.preventDefault();
    // 1) Getting user inputs
    const inputs = signupView.getUserInput();
    //! 2) Checking user inputs
    // { name, email, password, passwordConfirm }

    // 3) Init signup
    state.signup = new Signup({ ...inputs });
    console.log(state.signup);
};
// CTA
export const controlSignupCta = () => {
    // 1) Rendering Signup form
    signupView.renderSignupForm();
    // 2) Adding event listener to form
    document.querySelector(elementStrings.signupForm).addEventListener('submit', controlSignup);
};
