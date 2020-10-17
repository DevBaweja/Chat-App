import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as chatProfileController from '../chat-profile.controller';
import * as formController from '../auth/form.controller';
// Models
import Setting from '../../models/Setting';

export const controlSetting = info => {
    // Init Settings
    state.set('setting', info, Setting);

    switch (info.mode) {
        case mode.setting.color:
            color();
            break;
        case mode.setting.wallpaper:
            wallpaper();
            break;
        case mode.setting.privacy:
            privacy();
            break;
        case mode.setting.updatePassword:
            updatePassword();
            break;
        case mode.setting.deleteAccount:
            deleteAccount();
            break;
    }
    // Clear setting
    state['setting'] = null;
};

// ! For Development
window.controlSetting = controlSetting;

const color = () => {
    console.log('Color');
};
const wallpaper = () => {
    console.log('Wallpaper');
};
const privacy = () => {
    console.log('Privacy');
};
const updatePassword = () => {
    console.log('Update Password');
    // Re render Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
    // Form
    formController.controlForm({ mode: mode.form.update });
};
const deleteAccount = () => {
    console.log('Delete Account');
    // Re render Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
};
