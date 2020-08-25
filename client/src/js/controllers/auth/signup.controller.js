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

    state.signup.setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state.signup.signupUser();
        console.log(data);
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
                    // 7) Clear form
                    formView.clearForm();
                    // 6) Empty State of header, chat panel, chat box
                    headerController.controlHeader({ mode: mode.header.user });
                    chatPanelController.controlChatPanel({ mode: mode.chatPanel.empty });
                    chatBoxController.controlChatBox({ mode: mode.chatBox.empty });
                    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
                }
                break;
            case 'error': {
            }
        }
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.signup.failure });

        // 1) Initial UI for changes
        signupView.initialUIForSignup();

        // State Changes
        state.user = null;
        state.signup = null;
        state.token = null;
    }
};
