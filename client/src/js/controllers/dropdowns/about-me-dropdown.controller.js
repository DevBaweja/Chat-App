// Views
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

const controlAboutMeDropdown = event => {
    const target = event.target;
    // 0) Positioning of Dropdown
    const top = `${event.clientY}px`;
    const left = `${event.clientX}px`;

    // 1) Render Dropdown For About Me
    aboutMeDropdownView.renderAboutMeDropdown({ top, left });
    // 2) Add Event Listener
};

export default controlAboutMeDropdown;
