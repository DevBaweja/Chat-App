// State
import state from '../../state';
// Utils
import { elementStrings, mode, setToken } from '../../utils/base.util';
// Controllers
import * as formController from './form.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Models
import UpdatePassword from '../../models/UpdatePassword';
// Views
import * as updateView from '../../views/auth/update.view';
import * as formView from '../../views/auth/form.view';

export const controlTogglePasswordCurrent = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.update.toggle.passwordCurrent,
        elementStrings.forms.update.elements.passwordCurrent,
        updateView.togglePasswordCurrent
    );

export const controlTogglePassword = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.update.toggle.password,
        elementStrings.forms.update.elements.password,
        updateView.togglePassword
    );

export const controlTogglePasswordConfirm = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.update.toggle.passwordConfirm,
        elementStrings.forms.update.elements.passwordConfirm,
        updateView.togglePasswordConfirm
    );

// Form
export const controlUpdate = async event => {
    event.preventDefault();

    console.log('Update Password');
    // 0) Prepare UI for changes
    updateView.prepareUIForUpdate();

    // 1) Getting user inputs
    const inputs = updateView.getUserInput();
    // 2) Checking user inputs
    // { passwordCurrent, password, passwordConfirm }
    // 3) Init UpdatePassword
    if (!state['updatePassword']) state['updatePassword'] = new UpdatePassword({ ...inputs });

    state['updatePassword'].setUserInput({ ...inputs });
    try {
        // 4) Making API call
        const data = await state['updatePassword'].updatePassword();
        switch (data.status) {
            case 'success':
                {
                    // !For Development
                    // Token Assign
                    state['token'] = data.token;
                    setToken(state['token']);
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state['user'] = user;

                    // 5) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.update.password.success });
                    // 6) Clear form
                    formView.clearForm();

                    // Combined Empty
                    combinedController.controlAll({ mode: mode.combined.user });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);

                    // 0) Better Alerts
                    alertsController.controlBetterAlerts({ data: data.message });
                    // 1) Initial UI
                    updateView.initialUIForUpdate();
                }
                break;
        }

        // Clear updatePassword
        state['updatePassword'] = null;
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.update.password.failure });

        // 1) Initial UI
        updateView.initialUIForUpdate();

        // State Changes
        state['updatePassword'] = null;
    }
};

// ! For Development
window.controlUpdate = controlUpdate;
