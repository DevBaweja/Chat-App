// Utils
import { elementStrings, select, actions } from '../../utils/base.util';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as chatBoxDropdownView from '../../views/dropdowns/chat-box-dropdown.view';

export const controlChatBoxInDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For Message In
    chatBoxDropdownView.renderMessageInDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatBoxDropdown.in).addEventListener('click', controlChatBoxInDropdownItems);
};

// ! For Development
window.controlChatBoxInDropdown = controlChatBoxInDropdown;

// Items
const controlChatBoxInDropdownItems = event => {
    const { target } = event;
    const item = target.closest(elementStrings.dropdownItems.chatBoxDropdownItem.in);
    if (!item) return;
    const { type } = item.dataset;
    switch (type) {
        case actions.chatBox.in.copy:
            copy();
            break;
        case actions.chatBox.in.like:
            like();
            break;
        case actions.chatBox.in.unlike:
            unlike();
            break;
        case actions.chatBox.in.reply:
            reply();
            break;
        case actions.chatBox.in.delete:
            deleteMessage();
            break;
    }
};

// Actions
const copy = () => {
    console.log('Copy');
};
const like = () => {
    console.log('Like');
};
const unlike = () => {
    log('Unlike');
};
const reply = () => {
    console.log('Reply');
};
const deleteMessage = () => {
    console.log('Delete');
};
