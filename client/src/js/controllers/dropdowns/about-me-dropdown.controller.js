import state from '../../state';
// Utils
import { elementStrings, select, mode, actions } from '../../utils/base.util';
// Controllers
import * as themeController from '../theme/theme.controller';
import * as logoutController from '../auth/logout.controller';
import * as chatProfileController from '../chat-profile.controller';
import * as alertsController from '../alerts/alerts.controller';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

const controlAboutMeDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // Getting Theme
    const { mode: theme } = state['theme'];
    // 1) Render Dropdown For About Me
    aboutMeDropdownView.renderAboutMeDropdown({ coordinate, theme });

    // 2) Add Event Listener
    select(elementStrings.dropdowns.aboutMeDropdown).addEventListener('click', controlAboutMeDropdownItems);
};

// ! For Development
window.controlAboutMeDropdown = controlAboutMeDropdown;

// Items
const controlAboutMeDropdownItems = event => {
    const item = event.target.closest(elementStrings.dropdownItems.aboutMeDropdownItem);
    if (!item) return;
    const { type } = item.dataset;
    switch (type) {
        case actions.aboutMe.profile:
            profile();
            break;
        case actions.aboutMe.theme:
            theme();
            break;
        case actions.aboutMe.setting:
            setting();
            break;
        case actions.aboutMe.activity:
            activity();
            break;
        case actions.aboutMe.logout:
            logout();
            break;
    }
};

// Actions
export const theme = async () => {
    console.log('Theme');
    //  Changing State
    state['setting'].setTheme(state['theme'].toggleMode());
    const data = await state['setting'].updateMySetting();

    switch (data.status) {
        case 'success': {
            // Getting Setting
            const { setting } = data.data;
            // Assign Setting
            state['setting'].setInput({ ...setting });
            // Render Theme
            themeController.controlTheme({ mode: setting.theme });
            // Success Alert
            alertsController.controlAlerts({ mode: mode.alert.update.theme });
        }
    }
};

export const profile = () => {
    console.log('Profile');
    if (state['chatProfile'].mode === mode.chatProfile.user) return;
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
};

export const setting = () => {
    console.log('Setting');
    if (state['chatProfile'].mode === mode.chatProfile.setting) return;
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
};

export const activity = () => {
    console.log('Activity');
    if (state['chatProfile'].mode === mode.chatProfile.activity) return;
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.activity });
};

export const logout = () => {
    logoutController.controlLogout();
};

export default controlAboutMeDropdown;
