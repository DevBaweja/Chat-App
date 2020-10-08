// State
import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Models
import Login from '../../models/Login';
// Views
import * as loginView from '../../views/auth/login.view';
import * as formView from '../../views/auth/form.view';

// CTA
export const controlLoginCta = () => {
    // 1) Rendering Login form
    loginView.renderLoginForm();
    // 2) Adding event listener to show/hide password
    select(elementStrings.forms.login.toggle).addEventListener('click', controlToggle);
    // 3) Adding event listener to forget password
    select(elementStrings.forms.login.forget).addEventListener('click', controlForget);
    // 4) Adding event listener to form submit
    select(elementStrings.forms.login.form).addEventListener('submit', controlLogin);
};

// Toggle
const controlToggle = event => {
    const { target } = event;
    // Toggle
    const element = target.closest(elementStrings.forms.login.toggle);

    // Password Element
    const passwordElement = select(elementStrings.forms.login.elements.password);

    switch (element.dataset.type) {
        case 'show':
            // Toggle
            element.dataset.type = 'hide';
            // Change view
            loginView.togglePassword(element.dataset.type);
            // Password Show
            passwordElement.type = 'text';
            break;
        case 'hide':
            // Toggle
            element.dataset.type = 'show';
            // Change view
            loginView.togglePassword(element.dataset.type);
            // Password Hide
            passwordElement.type = 'password';
            break;
    }
};

// Forget
const controlForget = () => {
    console.log('Forget');
};

// Form
const controlLogin = async event => {
    event.preventDefault();

    // 0) Prepare UI for changes
    loginView.prepareUIForLogin();

    console.log('Log in');
    // 1) Getting user inputs
    const inputs = loginView.getUserInput();
    // 2) Checking user inputs
    // { email, password }

    // 3) Init login
    if (!state['login']) state['login'] = new Login({ ...inputs });

    state['login'].setUserInput({ ...inputs });

    // 4) Making API call

    try {
        // 4) Making API call
        const data = await state['login'].loginUser();
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
                    alertsController.controlAlerts({ mode: mode.alert.login.success });
                    // 6) Clear form
                    formView.clearForm();

                    // 7) Combine User
                    combinedController.controlAll({ mode: mode.combined.user });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('Error : ', data.error);
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
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: data.message });

                    // 1) Initial UI for changes
                    loginView.initialUIForLogin();
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.login.failure });

        // 1) Initial UI for changes
        loginView.initialUIForLogin();

        // State Changes
        state['login'] = null;
        state['token'] = null;
    }
};
