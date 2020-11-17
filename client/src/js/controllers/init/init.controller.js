import state from '../../state';
// Utils
import { mode, elements, select, randomItem, color } from '../../utils/base.util';
// Controllers
import * as dropdownsController from '../dropdowns/dropdowns.controller';
import * as themeController from '../theme/theme.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Model
import Init from '../../models/Init';

export const addListeners = () => {
    // Dropdown
    select(elements.App).addEventListener('click', dropdownsController.controlDropdowns);
};

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
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjMyNGRjYjQwZmYyM2JkMDI2NGZhYiIsImlhdCI6MTYwNTU3NzQ5OCwiZXhwIjoxNjA1NzUwMjk4fQ.QAm1GvQn_-1prn8EeDCmClSv3nr2VzGRv1J56ru7RqM';
                break;
        }
        // Checking for Login
        const data = await state['init'].isLogin();

        // User is not logged in
        if (!data) {
            // 0) Success Alert
            alertsController.controlAlerts({ mode: mode.alert.misc.success, data: 'Welcome to #ChatFuel' });

            // Theme
            themeController.controlTheme({ mode: mode.theme.dark, color: randomItem(color) });

            // Combined Ideal
            combinedController.controlAll({ mode: mode.combined.ideal });

            // Clear init
            state['init'] = null;
            return;
        }

        switch (data.status) {
            case 'success':
                {
                    // Getting User
                    const { user } = data.data;
                    // Assign User
                    state['user'] = user;
                    // Getting Setting
                    const { setting } = user;
                    // User Assign Setting
                    state['setting'] = setting;

                    //  Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.success, data: 'Welcome back!' });

                    // Theme
                    themeController.controlTheme({ mode: setting.theme, color: setting.color });

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
