// Utils
import { elementStrings } from '../../utils/base.util';
// Controllers
import controlAboutMeDropdown from './about-me-dropdown.controller';
import controlChatPanelDropdown from './chat-panel-dropdown.controller';
import {
    controlMessageOutDropdown,
    controlMessageInDropdown,
    controlOptionsDropdown,
} from './chat-box-dropdown.controller';

// Models
// Views
import * as dropdownsView from '../../views/dropdowns/dropdowns.view';

export const controlDropdowns = event => {
    // 0) Preparing UI for changes
    dropdownsView.clearDropdowns();

    const { target } = event;

    switch (true) {
        // About Me Dropdown
        case target.matches(`${elementStrings.drops.aboutMeDrop},${elementStrings.drops.aboutMeDrop} *`):
            controlAboutMeDropdown(event);
            break;

        // Chat Panel Dropdown
        case target.matches(`${elementStrings.drops.chatPanelDrop},${elementStrings.drops.chatPanelDrop} *`):
            controlChatPanelDropdown(event);
            break;

        // Message Out Dropdown
        case target.matches(`${elementStrings.drops.chatBoxDrop.out},${elementStrings.drops.chatBoxDrop.out} *`):
            controlMessageOutDropdown(event);
            break;

        // Message In Dropdown
        case target.matches(`${elementStrings.drops.chatBoxDrop.in},${elementStrings.drops.chatBoxDrop.in} *`):
            controlMessageInDropdown(event);
            break;

        // Chat Box Option Dropdown
        case target.matches(
            `${elementStrings.drops.chatBoxDrop.options},${elementStrings.drops.chatBoxDrop.options} *`
        ):
            controlOptionsDropdown(event);
            break;
    }
};
