import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as themeController from '../theme/theme.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Model
import Init from '../../models/Init';

export const controlInit = async () => {
    console.log('Initializing App');

    // 1) Initializing init
    if (!state['init']) state['init'] = new Init();

    // 2) Establish Connection
    /*
    // !For Development
    try {
        const io = await state['init'].establishConnection();
    } catch (err) {
        // Error Alert
        console.log('ERROR: ', err.message);
    }
    */

    // 3) isLogin
    try {
        // !For Development
        switch (state['mode'].mode) {
            case mode.mode.development:
                state['token'] =
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODdlZDA2NjNmNGNhMzAyMDRhMDExYyIsImlhdCI6MTYwMjc0MzU1OCwiZXhwIjoxNjAyOTE2MzU4fQ.LYy2GP8u1AgpwOuwgJ1oRH0Rcqg2oKwHXdqxVUUZdn0';
                break;
        }
        // Checking for Login
        const data = await state['init'].isLogin();

        // User is not logged in
        if (!data) {
            // 0) Success Alert
            alertsController.controlAlerts({ mode: mode.alert.misc.success, data: 'Welcome to #ChatFuel' });

            // Theme
            themeController.controlTheme({ mode: mode.theme.dark, color: mode.theme.color.yellow });

            // Combined Ideal
            combinedController.controlAll({ mode: mode.combined.ideal });

            // Clear init
            state['init'] = null;
            return;
        }

        switch (data.status) {
            case 'success':
                {
                    // 0) Getting User
                    const { user } = data.data;
                    // 1) User Assign
                    state['user'] = user;

                    // 2) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.success, data: 'Welcome back!' });

                    // Theme
                    themeController.controlTheme({ mode: mode.theme.dark, color: mode.theme.color.forest });

                    // Combined User
                    combinedController.controlAll({ mode: mode.combined.user });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('Error : ', data.error);
                    // 0) Error Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: data.message });

                    // Theme
                    themeController.controlTheme({ mode: mode.theme.dark, color: mode.theme.color.red });

                    // Combined Ideal
                    combinedController.controlAll({ mode: mode.combined.ideal });
                }
                break;
        }

        // Clear init
        state['init'] = null;
    } catch (err) {
        // Error
        console.log('ERROR: ', err.message);

        // Clear init
        state['init'] = null;
    }
};

// ! For Development
window.controlInit = controlInit;
