import state from '../../state';
// Utils
import { elementStrings, select, mode, actions } from '../../utils/base.util';
// Controllers
import * as themeController from '../theme/theme.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
import * as chatProfileController from '../chat-profile.controller';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

const controlAboutMeDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For About Me
    aboutMeDropdownView.renderAboutMeDropdown({ coordinate });

    const height = select(elementStrings.dropdowns.aboutMeDropdown).offsetHeight;
    const width = select(elementStrings.dropdowns.aboutMeDropdown).offsetWidth;
    console.log({ height, width });

    // 2) Add Event Listener
    select(elementStrings.dropdowns.aboutMeDropdown).addEventListener('click', controlAboutMeDropdownItems);
};

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
        case actions.aboutMe.logout:
            logout();
            break;
    }
};

// Actions
const theme = () => {
    console.log('Theme');
    themeController.controlTheme({ mode: state['theme'].toggleMode() });
};

const profile = () => {
    console.log('Profile');
    if (state['chatProfile'].mode === mode.chatProfile.user) return;
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
};

const setting = () => {
    console.log('Setting');
    if (state['chatProfile'].mode === mode.chatProfile.setting) return;
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
};
const logout = () => {
    // 0) Success Alert
    alertsController.controlAlerts({ mode: mode.alert.logout.success });

    // Combined Ideal
    combinedController.controlAll({ mode: mode.combined.ideal });

    // 2) Clear state
    // 3) Clear token
};

export default controlAboutMeDropdown;
