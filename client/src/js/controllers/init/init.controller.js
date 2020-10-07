import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as alertsController from '../alerts/alerts.controller';
import * as headerController from '../header.controller';
import * as chatPanelController from '../chat-panel.controller';
import * as chatBoxController from '../chat-box.controller';
import * as chatProfileController from '../chat-profile.controller';
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
        // Checking for Login
        const data = await state.init.isLogin();

        switch (data.status) {
            case 'success':
                {
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state.user = user;

                    // 7) User State of header, chat panel, chat box, chat profile
                    headerController.controlHeader({ mode: mode.header.user });
                    chatPanelController.controlChatPanel({ mode: mode.chatPanel.user.recentChat });
                    chatBoxController.controlChatBox({ mode: mode.chatBox.user });
                    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
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
    } catch (err) {
        // Error Alert
        console.log('ERROR: ', err.message);
    }
};
