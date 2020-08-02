// Utils
import { elementStrings, actions } from '../../utils/base.util';
import state from '../../state';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

import * as themeView from '../../views/theme/theme.view';
import * as chatProfileView from '../../views/chat-profile.view';

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
    // Remove theme
    themeView.clearTheme(state.theme.theme);
    // Change theme
    state.theme.changeTheme('dark-green');
    // Render theme
    themeView.renderTheme(state.theme.theme);
};

const myProfile = () => {
    // Loading
    chatProfileView.renderMyProfile();
};

export default controlAboutMeDropdown;
