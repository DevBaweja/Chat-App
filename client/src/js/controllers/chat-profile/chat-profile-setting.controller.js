import state from '../../state';
// Utils
import { mode, elementStrings, select } from '../../utils/base.util';
// Controllers
import * as chatProfileController from '../chat-profile.controller';
import * as themeController from '../theme/theme.controller';
import * as backgroundImageController from '../background-image.controller';
import * as formController from '../auth/form.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as logoutController from '../auth/logout.controller';
// Models
import SubSetting from '../../models/SubSetting';
import DeleteAccount from '../../models/DeleteAccount';
// Views
import * as chatProfileSettingView from '../../views/chat-profile/chat-profile-setting.view';

export const controlSetting = info => {
    // Init Sub Settings
    state.set('subSetting', info, SubSetting);

    // Reset chatProfile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.settingSub });

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
    // Render for wallpaper
    // state['subSetting'] = null;
};

// ! For Development
window.controlSetting = controlSetting;

const color = () => {
    console.log('Color');
    // Getting color from state
    const { color } = state['theme'];
    // Render Color
    chatProfileSettingView.renderColor(color);
    // Event Listener
    // Back
    select(elementStrings.chatProfile.subSetting.color.back).addEventListener('click', () =>
        chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting })
    );
    // List
    select(elementStrings.chatProfile.subSetting.color.list).addEventListener('click', async event => {
        const { target } = event;
        // Item Element
        const itemElement = target.closest(elementStrings.chatProfile.subSetting.color.item);
        if (!itemElement) return;
        // Icon Element
        const iconElement = select(elementStrings.chatProfile.subSetting.color.icon, itemElement);
        // Remove Selected
        chatProfileSettingView.removeSelectedColor();
        // Add Selected
        chatProfileSettingView.addSelectedColor(iconElement);

        // Type
        const type = itemElement.dataset.type;
        if (!type) return;

        //  Changing State
        state['setting'].setColor(type);
        const data = await state['setting'].updateMySetting();

        switch (data.status) {
            case 'success': {
                // Getting Setting
                const { setting } = data.data;
                // Assign Setting
                state['setting'].setInput({ ...setting });
                // Render Theme
                themeController.controlTheme({ color: type });
                // Success Alert
                alertsController.controlAlerts({ mode: mode.alert.update.color });
            }
        }
    });
};
const wallpaper = () => {
    console.log('Wallpaper');
    // Getting theme from state
    const { theme } = state;
    const { backgroundImage } = state;
    // Render Wallpaper
    chatProfileSettingView.renderWallpaper({ theme, backgroundImage });
    // Event Listener
    // Back
    select(elementStrings.chatProfile.subSetting.wallpaper.back).addEventListener('click', () =>
        chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting })
    );
    // List
    select(elementStrings.chatProfile.subSetting.wallpaper.list).addEventListener('click', async event => {
        const { target } = event;
        // Item Element
        const itemElement = target.closest(elementStrings.chatProfile.subSetting.wallpaper.item);
        if (!itemElement) return;
        // Content Element
        const contentElement = select(elementStrings.chatProfile.subSetting.wallpaper.content, itemElement);
        // Remove Selected
        chatProfileSettingView.removeSelectedWallpaper();
        // Add Selected
        chatProfileSettingView.addSelectedWallpaper(contentElement);

        // Type
        const type = itemElement.dataset.type;
        if (!type) return;

        //  Changing State
        const theme = type.split('-')[0];
        state['setting'].setWallpaper({ ...state['setting'].wallpaper, [theme]: type });

        const data = await state['setting'].updateMySetting();

        switch (data.status) {
            case 'success': {
                // Getting Setting
                const { setting } = data.data;
                // Assign Setting
                state['setting'].setInput({ ...setting });
                // Success Alert
                alertsController.controlAlerts({ mode: mode.alert.update.background });
                // Render BackgroundImage
                backgroundImageController.controlBackgroundImage({ mode: type });
            }
        }
    });
};
const privacy = () => {
    console.log('Privacy');
    // Render Privacy
    chatProfileSettingView.renderPrivacy();
    // Event Listener
};

const updatePassword = () => {
    console.log('Update Password');
    // Re render Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
    // Form
    formController.controlForm({ mode: mode.form.update });
};

const deleteAccount = async () => {
    console.log('Delete Account');
    // Re render Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });

    // Init Delete Account
    if (!state['deleteAccount']) state['deleteAccount'] = new DeleteAccount();

    try {
        // Making API call
        const data = await state['deleteAccount'].deleteAccount();
        switch (data.status) {
            case 'success':
                {
                    // Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.delete.account.success });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);

                    // 0) Error Alerts
                    alertsController.controlAlerts({ data: mode.alert.delete.account.failure });
                }
                break;
        }

        // Clear deleteAccount
        state['deleteAccount'] = null;
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ data: mode.alert.delete.account.failure });

        // State Changes
        state['deleteAccount'] = null;
    }

    // Log out
    logoutController.controlLogout();
};
