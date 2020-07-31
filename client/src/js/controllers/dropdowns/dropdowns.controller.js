// Utils
import { elementStrings } from '../../utils/base.util';
// Controllers
import controlAboutMeDropdown from './about-me-dropdown.controller';
import controlChatPanelDropdown from './chat-panel-dropdown.controller';
// Models
// Views
import * as dropdownsView from '../../views/dropdowns/dropdowns.view';

export const controlDropdowns = event => {
    // 0) Preparing UI for changes
    dropdownsView.clearDropdowns();

    const { target } = event;

    // About Me Dropdown
    if (target.matches(`${elementStrings.drops.aboutMeDrop},${elementStrings.drops.aboutMeDrop} *`))
        controlAboutMeDropdown(event);

    // Chat Panel Dropdown
    if (target.matches(`${elementStrings.drops.chatPanelDrop},${elementStrings.drops.chatPanelDrop} *`))
        controlChatPanelDropdown(event);
};
