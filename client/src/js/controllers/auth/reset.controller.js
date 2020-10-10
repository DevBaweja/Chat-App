// State
import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as formController from './form.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Models
import Reset from '../../models/Reset';
// Views
import * as resetView from '../../views/auth/reset.view';
import * as formView from '../../views/auth/form.view';

export const controlTogglePassword = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.reset.toggle.password,
        elementStrings.forms.reset.elements.password,
        resetView.togglePassword
    );

export const controlTogglePasswordConfirm = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.reset.toggle.passwordConfirm,
        elementStrings.forms.reset.elements.passwordConfirm,
        resetView.togglePasswordConfirm
    );

// Form
export const controlReset = async event => {
    event.preventDefault();

    console.log('Reset Password');
    // 0) Prepare UI for changes
    resetView.prepareUIForReset();

    // 1) Getting user inputs
    const inputs = resetView.getUserInput();
    // 2) Checking user inputs
    // { token, password, passwordConfirm }

    // 3) Init Reset
    if (!state['reset']) state['reset'] = new Reset({ ...inputs });

    state['reset'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['reset'].resetPassword();
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
                    alertsController.controlAlerts({ mode: mode.alert.reset.success });
                    // 6) Clear form
                    formView.clearForm();

                    // Combined User
                    combinedController.controlAll({ mode: mode.combined.user });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);
                    // Better Alerts
                    let newMessage = data.message;
                    switch (true) {
                        case data.message.includes('passwordConfirm'):
                            newMessage = 'Passwords must match.';
                            break;
                    }
                    // 0) Error Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: newMessage });

                    // 1) Initial UI
                    resetView.initialUIForReset();
                }
                break;
        }

        // Clear signup
        state['reset'] = null;
    } catch (err) {
        console.log('ERROR', err.message);

        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.reset.failure });

        // 1) Initial UI
        resetView.initialUIForReset();

        // State Changes
        state['token'] = null;
        state['user'] = null;
        state['reset'] = null;
    }
};
