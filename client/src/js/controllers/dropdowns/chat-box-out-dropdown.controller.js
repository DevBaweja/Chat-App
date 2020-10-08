// Utils
import { elementStrings, select, actions } from '../../utils/base.util';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as chatBoxDropdownView from '../../views/dropdowns/chat-box-dropdown.view';

export const controlChatBoxOutDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For Message Out
    chatBoxDropdownView.renderMessageOutDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatBoxDropdown.out).addEventListener('click', controlChatBoxOutDropdownItems);
};

// ! For Development
window.controlChatBoxOutDropdown = controlChatBoxOutDropdown;

// Items
const controlChatBoxOutDropdownItems = () => {
    const item = event.target.closest(elementStrings.dropdownItems.chatBoxDropdownItem.out);
    if (!item) return;
    const { type } = item.dataset;
    switch (type) {
        case actions.chatBox.out.copy:
            copy();
            break;
        case actions.chatBox.out.edit:
            edit();
            break;
        case actions.chatBox.out.reply:
            reply();
            break;
        case actions.chatBox.out.delete:
            deleteMessage();
            break;
    }
};

// Actions
const copy = () => {
    console.log('Copy');
};
const edit = () => {
    console.log('Edit');
};
const reply = () => {
    console.log('Reply');
};
const deleteMessage = () => {
    console.log('Delete');
};
