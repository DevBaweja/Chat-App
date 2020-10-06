// State
import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
import * as headerController from '../header.controller';
import * as chatPanelController from '../chat-panel.controller';
import * as chatBoxController from '../chat-box.controller';
import * as chatProfileController from '../chat-profile.controller';
// Models
import Signup from '../../models/Signup';
// Views
import * as signupView from '../../views/auth/signup.view';
import * as formView from '../../views/auth/form.view';
// CTA
export const controlSignupCta = () => {
    // 1) Rendering Signup form
    signupView.renderSignupForm();
    // 2.1) Adding event listener to show/hide password
    select(elementStrings.forms.signup.toggle.password).addEventListener('click', controlTogglePassword);
    // 2.2) Adding event listener to show/hide passwordConfirm
    select(elementStrings.forms.signup.toggle.passwordConfirm).addEventListener('click', controlTogglePasswordConfirm);
    // 3) Adding event listener to form
    select(elementStrings.forms.signup.form).addEventListener('submit', controlSignup);
};

const controlTogglePassword = event => {
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

const controlTogglePasswordConfirm = event => {
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

    state.signup.setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state.signup.signupUser();
        switch (data.status) {
            case 'success':
                {
                    // !For Development
                    // Token Assign
                    state.token = data.token;
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state.user = user;

                    // 5) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.signup.success });
                    // 6) Clear form
                    formView.clearForm();

                    // 7) Empty State of header, chat panel, chat box, chat profile
                    headerController.controlHeader({ mode: mode.header.user });
                    chatPanelController.controlChatPanel({ mode: mode.chatPanel.empty });
                    chatBoxController.controlChatBox({ mode: mode.chatBox.empty });
                    chatProfileController.controlChatProfile({ mode: mode.chatProfile.empty });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);
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

                    // 1) Initial UI for changes
                    signupView.initialUIForSignup();
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.signup.failure });

        // 1) Initial UI for changes
        signupView.initialUIForSignup();

        // State Changes
        state.token = null;
        state.user = null;
        state.signup = null;
    }
};
