// State
import state from '../state';
// Utils
import { elementStrings } from '../utils/base.util';
// Models
import Signup from '../models/Signup';
// Views
import * as signupView from '../views/signup.view';

// Forms
const controlSignup = async event => {
    event.preventDefault();

    console.log('Sign up');
    // 0) Prepare UI for changes
    signupView.prepareUIForSignup();

    // 1) Getting user inputs
    const inputs = signupView.getUserInput();
    //! 2) Checking user inputs
    // { name, email, password, passwordConfirm }

    // 3) Init signup
    state.signup = new Signup({ ...inputs });

    try {
        // 4) Making API call
        const user = await state.signup.signupUser();
        console.log(user);
        // 5) Success Alert
    } catch (err) {
        // Error Alert
        console.log('ERROR', err.message);
    }
};

// CTA
export const controlSignupCta = () => {
    // 1) Rendering Signup form
    signupView.renderSignupForm();
    // 2) Adding event listener to form
    document.querySelector(elementStrings.forms.signupForm).addEventListener('submit', controlSignup);
};
