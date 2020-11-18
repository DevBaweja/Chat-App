// State
import state from '../../state';
// Utils
import { elementStrings, mode, setToken } from '../../utils/base.util';
// Controllers
import * as formController from './form.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as themeController from '../theme/theme.controller';
import * as combinedController from '../combined.controller';
// Models
import Login from '../../models/Login';
import Setting from '../../models/Setting';
// Views
import * as loginView from '../../views/auth/login.view';
import * as formView from '../../views/auth/form.view';

export const controlTogglePassword = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.login.toggle.password,
        elementStrings.forms.login.elements.password,
        loginView.togglePassword
    );

// Form
export const controlLogin = async event => {
    event.preventDefault();

    console.log('Log in');
    // 0) Prepare UI for changes
    loginView.prepareUIForLogin();

    // 1) Getting user inputs
    const inputs = loginView.getUserInput();
    // 2) Checking user inputs
    // { email, password }

    // 3) Init login
    if (!state['login']) state['login'] = new Login({ ...inputs });

    state['login'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['login'].loginUser();
        switch (data.status) {
            case 'success':
                {
                    // !For Development
                    // Token Assign
                    state['token'] = data.token;
                    setToken(state['token']);
                    // Getting User
                    const { user } = data.data;
                    // Assign User
                    state['user'] = user;
                    // 1) Initializing Setting
                    if (!state['setting']) state['setting'] = new Setting();
                    // Getting Setting
                    const settingData = await state['setting'].getMySetting();

                    switch (settingData.status) {
                        case 'success': {
                            // Getting Setting
                            const { setting } = settingData.data;
                            // Assign Setting
                            state['setting'].setInput({ ...setting });

                            // 5) Success Alert
                            alertsController.controlAlerts({ mode: mode.alert.login.success });

                            // 6) Clear form
                            formView.clearForm();

                            // 7) Theme
                            themeController.controlTheme({ mode: setting.theme, color: setting.color });

                            // 8) Combine User
                            combinedController.controlAll({ mode: mode.combined.user });
                        }
                    }
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

                    // 1) Initial UI
                    loginView.initialUIForLogin();
                }
                break;
        }
        //  Clear login
        state['login'] = null;
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.login.failure });

        // 1) Initial UI
        loginView.initialUIForLogin();

        // State Changes
        state['token'] = null;
        setToken(state['token']);
        state['user'] = null;
        state['login'] = null;
    }
};

// ! For Development
window.controlLogin = controlLogin;
