// State
import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Models
import Logout from '../../models/Logout';
// Views

// Form
export const controlLogout = async () => {
    console.log('Log out');
    // 0) Prepare UI for changes

    // 1) Init logout
    if (!state['logout']) state['logout'] = new Logout();

    try {
        // 4) Making API call
        const data = await state['logout'].logoutUser();
        switch (data.status) {
            case 'success':
                {
                    // 0) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.logout.success });

                    // Combined Ideal
                    combinedController.controlAll({ mode: mode.combined.ideal });

                    // 2) Clear state
                    state['user'] = null;
                    // state['backgroundImage'] = null;
                    // !For Development
                    // 3) Clear token
                    state['token'] = null;
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('Error : ', data.error);
                    // 0) Error Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: data.message });
                }
                break;
        }
        // Clear logout
        state['logout'] = null;
    } catch (err) {
        console.log('ERROR', err.message);

        // Clear logout
        state['logout'] = null;
    }
};

// ! For Development
window.controlLogout = controlLogout;
