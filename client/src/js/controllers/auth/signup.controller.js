// State
import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Models
import Signup from '../../models/Signup';
// Views
import * as signupView from '../../views/auth/signup.view';
import * as formView from '../../views/auth/form.view';

export const controlTogglePassword = event => {
    const { target } = event;
    // Toggle
    const element = target.closest(elementStrings.forms.signup.toggle.password);

    // Password Element
    const passwordElement = select(elementStrings.forms.signup.elements.password);

    switch (element.dataset.type) {
        case 'show':
            // Toggle
            element.dataset.type = 'hide';
            // Change view
            signupView.togglePassword(element.dataset.type);
            // Password Show
            passwordElement.type = 'text';
            break;
        case 'hide':
            // Toggle
            element.dataset.type = 'show';
            // Change view
            signupView.togglePassword(element.dataset.type);
            // Password Hide
            passwordElement.type = 'password';
            break;
    }
};

export const controlTogglePasswordConfirm = event => {
    const { target } = event;
    // Toggle
    const element = target.closest(elementStrings.forms.signup.toggle.passwordConfirm);

    // Password Confirm Element
    const passwordConfirmElement = select(elementStrings.forms.signup.elements.passwordConfirm);

    switch (element.dataset.type) {
        case 'show':
            // Toggle
            element.dataset.type = 'hide';
            // Change view
            signupView.togglePasswordConfirm(element.dataset.type);
            // Password Show
            passwordConfirmElement.type = 'text';
            break;
        case 'hide':
            // Toggle
            element.dataset.type = 'show';
            // Change view
            signupView.togglePasswordConfirm(element.dataset.type);
            // Password Hide
            passwordConfirmElement.type = 'password';
            break;
    }
};

// Form
export const controlSignup = async event => {
    event.preventDefault();

    console.log('Sign up');
    // 0) Prepare UI for changes
    signupView.prepareUIForSignup();

    // 1) Getting user inputs
    const inputs = signupView.getUserInput();
    // 2) Checking user inputs
    // { name, email, password, passwordConfirm }

    // 3) Init signup
    if (!state['signup']) state['signup'] = new Signup({ ...inputs });

    state['signup'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['signup'].signupUser();
        switch (data.status) {
            case 'success':
                {
                    // !For Development
                    // Token Assign
                    state['token'] = data.token;
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state['user'] = user;

                    // 5) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.signup.success });
                    console.log(state['signup']);
                    // 6) Clear form
                    formView.clearForm();

                    // Combined Empty
                    combinedController.controlAll({ mode: mode.combined.empty });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);
                    // Better Alerts
                    let newMessage = data.message;
                    switch (true) {
                        case data.message.includes('email'):
                            newMessage = 'Please enter a valid email.';
                            break;
                        case data.message.includes('passwordConfirm'):
                            newMessage = 'Passwords must match.';
                            break;
                    }
                    // 0) Error Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: newMessage });

                    // 1) Initial UI
                    signupView.initialUIForSignup();
                }
                break;
        }

        // Clear signup
        state['signup'] = null;
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.signup.failure });

        // 1) Initial UI
        signupView.initialUIForSignup();

        // State Changes
        state['token'] = null;
        state['user'] = null;
        state['signup'] = null;
    }
};
