import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
// Models
import Setting from '../../models/Setting';

export const controlSetting = info => {
    // Init Settings
    if (!state['setting']) state['setting'] = new Setting(info);
    state['setting'].setMode(info.mode);

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
};
const deleteAccount = () => {
    console.log('Delete Account');
};
