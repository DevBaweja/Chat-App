// Utils
import { elementStrings } from '../utils/base.util';
// Controllers
import controlAboutMeDropdown from './dropdowns/about-me-dropdown.controller';
import controlChatPanelDropdown from './dropdowns/chat-panel-dropdown.controller';
// Models
// Views
import * as dropdownsView from '../views/dropdowns.view';

export const controlDropdowns = event => {
    // 0) Preparing UI for changes
    dropdownsView.clearDropdowns();

    const target = event.target;

    // About Me Dropdown
    if (target.matches(`${elementStrings.aboutMeDrop},${elementStrings.aboutMeDrop} *`)) controlAboutMeDropdown();
    // Chat Panel Dropdown
    if (target.matches(`${elementStrings.chatPanelDrop},${elementStrings.chatPanelDrop} *`)) controlChatPanelDropdown();
};
