// Utils
import { elementStrings } from '../../utils/base.util';
// Views
import * as chatPanelDropdownView from '../../views/dropdowns/chat-panel-dropdown.view';
// Controllers
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';

const controlChatPanelDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For About Me
    chatPanelDropdownView.renderChatPanelDropdown({ coordinate });
    // 2) Add Event Listener
    document
        .querySelector(elementStrings.dropdowns.chatPanelDropdown)
        .addEventListener('click', controlAboutMeDropdownItems);
};

const controlAboutMeDropdownItems = event => {
    const item = event.target.closest(elementStrings.items.chatPanelItem);
    if (!item) return;
    console.log(item.dataset.type);
};

export default controlChatPanelDropdown;
