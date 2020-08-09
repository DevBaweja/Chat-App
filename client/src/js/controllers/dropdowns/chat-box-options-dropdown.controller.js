// Utils
import { elementStrings, select } from '../../utils/base.util';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as chatBoxDropdownView from '../../views/dropdowns/chat-box-dropdown.view';

export const controlChatBoxOptionsDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For Message Out
    chatBoxDropdownView.renderMessageOptionsDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatBoxDropdown.options).addEventListener(
        'click',
        controlChatBoxOptionsDropdownItems
    );
};

// Items
const controlChatBoxOptionsDropdownItems = () => {};

// Actions
