// Utils
import { elementStrings } from '../../utils/base.util';
// Views
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

const controlAboutMeDropdown = event => {
    const target = event.target;
    // 0) Positioning of Dropdown
    const top = `${event.clientY}px`;
    const left = `${event.clientX}px`;

    // 1) Render Dropdown For About Me
    aboutMeDropdownView.renderAboutMeDropdown({ coordinate: { top, left } });
    // 2) Add Event Listener
    document
        .querySelector(elementStrings.dropdowns.aboutMeDropdown)
        .addEventListener('click', controlAboutMeDropdownOptions);
};
const controlAboutMeDropdownOptions = event => {
    console.log(event.target.closest('.about-me__dropdown--item'));
};

export default controlAboutMeDropdown;
