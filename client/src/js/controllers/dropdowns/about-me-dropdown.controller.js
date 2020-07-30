// Utils
import { elements, elementStrings } from '../../utils/base.util';
import state from '../../state';
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
    if (type === 'toggle-theme') {
        elements.App.classList.remove(state.theme);
        const array = Object.keys(elementStrings.themes);

        const key = array[state.index % array.length];
        state.index++;
        state.theme = elementStrings.themes[key];
        elements.App.classList.add(state.theme);
    }
};

export default controlAboutMeDropdown;
