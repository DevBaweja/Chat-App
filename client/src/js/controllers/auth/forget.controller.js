// State
import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
// Models
import Forget from '../../models/Forget';
// Views
import * as forgetView from '../../views/auth/forget.view';

// Form
export const controlForget = async event => {
    event.preventDefault();

    console.log('Forget Password');
    // 0) Prepare UI for changes
    forgetView.prepareUIForForget();

    // 1) Getting user inputs
    const inputs = forgetView.getUserInput();
    // 2) Checking user inputs
    // { email }

    // 3) Init login
    if (!state['forget']) state['forget'] = new Forget({ ...inputs });

    state['forget'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['forget'].forgetPassword();
        switch (data.status) {
            case 'success':
                {
                    // 0) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.forget.success });
                    // 1) No Clear form
                    // formView.clearForm();

                    // 2) Resend UI
                    forgetView.resendUIForForget();
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('Error : ', data.error);
                    // 0) Error Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: data.message });

                    // 1) Initial UI
                    forgetView.initialUIForForget();
                }
                break;
        }
        //  Clear forget
        state['forget'] = null;
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.forget.failure });

        // 1) Initial UI
        forgetView.initialUIForForget();

        //  Clear forget
        state['forget'] = null;
    }
};

// ! For Development
window.controlForget = controlForget