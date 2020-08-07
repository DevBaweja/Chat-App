// Utils
import { elementStrings, mode, actions } from '../../utils/base.util';
// Controllers
import * as themeController from '../theme/theme.controller';
import * as chatProfileController from '../chat-profile.controller';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

const controlAboutMeDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For About Me
    aboutMeDropdownView.renderAboutMeDropdown({ coordinate });
    // 2) Add Event Listener
    document
        .querySelector(elementStrings.dropdowns.aboutMeDropdown)
        .addEventListener('click', controlAboutMeDropdownItems);
};
const controlAboutMeDropdownItems = event => {
    const item = event.target.closest(elementStrings.dropdownItems.aboutMeDropdownItem);
    if (!item) return;
    const { type } = item.dataset;
    switch (type) {
        case actions.aboutMe.toggleTheme:
            toggleTheme();
            break;
        case actions.aboutMe.myProfile:
            myProfile();
            break;
    }
};

const toggleTheme = () => {
    themeController.controlTheme({ mode: mode.theme.darkBlue });
};

const myProfile = () => {
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
};

export default controlAboutMeDropdown;
