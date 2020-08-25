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
import Login from '../../models/Login';
// Views
import * as loginView from '../../views/auth/login.view';
import * as formView from '../../views/auth/form.view';

// CTA
export const controlLoginCta = () => {
    // 1) Rendering Login form
    loginView.renderLoginForm();
    // 2) Adding event listener to form
    select(elementStrings.forms.loginForm).addEventListener('submit', controlLogin);
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
    if (!state.login) state.login = new Login({ ...inputs });

    state.login.setUserInput({ ...inputs });

    // 4) Making API call

    try {
        // 4) Making API call
        const data = await state.login.loginUser();
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
                    alertsController.controlAlerts({ mode: mode.alert.login.success });
                    // 6) Clear form
                    formView.clearForm();

                    // 7) User State of header, chat panel, chat box, chat profile
                    headerController.controlHeader({ mode: mode.header.user });
                    chatPanelController.controlChatPanel({ mode: mode.chatPanel.user.recentChat });
                    chatBoxController.controlChatBox({ mode: mode.chatBox.user });
                    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
                }
                break;
            case 'error': {
            }
        }
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.login.failure });

        // 1) Initial UI for changes
        loginView.initialUIForLogin();

        // State Changes
        state.login = null;
        state.token = null;
    }
};
