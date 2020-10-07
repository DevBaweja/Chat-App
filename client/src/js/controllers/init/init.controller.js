import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as themeController from '../theme/theme.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Model
import Init from '../../models/Init';
// Views

export const controlInit = async () => {
    console.log('Initializing App');

    // 1) Initializing init
    if (!state.init) state.init = new Init();

    // 2) Establish Connection
    try {
        const io = await state.init.establishConnection();
    } catch (err) {
        // Error Alert
        console.log('ERROR: ', err.message);
    }

    // 3) isLogin
    try {
        // !For Development
        state.token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2RjMmYxOGRkYjZjNjM1MDQ0NmUzOSIsImlhdCI6MTYwMjA3NzQzNiwiZXhwIjoxNjAyMjUwMjM2fQ.TJ2p7rxYkA2_PDPO-xvRayDYf9Ejnugbug2V1PyAMYc';
        // Checking for Login
        const data = await state.init.isLogin();

        switch (data.status) {
            case 'success':
                {
                    // 0) Getting User
                    const { user } = data.data;
                    // 1) User Assign
                    state.user = user;

                    // 2) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.success, data: 'Welcome back!' });

                    // Theme
                    themeController.controlTheme({ mode: mode.theme.dark, color: mode.theme.color.orange });

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
                    themeController.controlTheme({ mode: mode.theme.light, color: mode.theme.color.yellow });

                    // Combined Ideal
                    combinedController.controlAll({ mode: mode.combined.ideal });
                }
                break;
        }
    } catch (err) {
        // Error Alert
        console.log('ERROR: ', err.message);
    }
};
