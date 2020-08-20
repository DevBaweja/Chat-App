// State
import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
// Models
import Signup from '../../models/Signup';
// Views
import * as signupView from '../../views/auth/signup.view';

// CTA
export const controlSignupCta = () => {
    // 1) Rendering Signup form
    signupView.renderSignupForm();
    // 2) Adding event listener to form
    select(elementStrings.forms.signupForm).addEventListener('submit', controlSignup);
};

// Form
const controlSignup = async event => {
    event.preventDefault();

    console.log('Sign up');
    // 0) Prepare UI for changes
    signupView.prepareUIForSignup();

    // 1) Getting user inputs
    const inputs = signupView.getUserInput();
    // 2) Checking user inputs
    // { name, email, password, passwordConfirm }

    // 3) Init signup
    if (!state.signup) state.signup = new Signup({ ...inputs });

    try {
        // 4) Making API call
        const data = await state.signup.signupUser();
        // !For Development
        // Token Assign
        state.token = data.token;
        // Getting User
        const { user } = data.data;
        // 5) Success Alert
        alertsController.controlAlerts({ mode: mode.alert.signup.success, data: { user: user.name } });
    } catch (err) {
        // Error Alert
        console.log('ERROR', err.message);
        alertsController.controlAlerts({ mode: mode.alert.signup.failure });
    }
};
