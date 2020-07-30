// Utils
import { elementStrings } from '../../utils/base.util';
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
    console.log(item.dataset.type);
};

export default controlAboutMeDropdown;
