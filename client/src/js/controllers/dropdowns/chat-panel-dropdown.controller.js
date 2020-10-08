// Utils
import { elementStrings, select, actions } from '../../utils/base.util';

// Views
import * as chatPanelView from '../../views/chat-panel.view';
import * as chatPanelDropdownView from '../../views/dropdowns/chat-panel-dropdown.view';
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';

const controlChatPanelDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 0) Getting User Id
    const item = chatPanelView.getItem(event);
    const user = chatPanelView.getUser(item);
    // 0) Get User Info
    // const data  = state['chatPanel'].getUserInfo(user)

    // 1) Render Dropdown For About Me
    // data
    chatPanelDropdownView.renderChatPanelDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatPanelDropdown).addEventListener('click', controlAboutMeDropdownItems);
};

// Items
const controlAboutMeDropdownItems = ({ target }) => {
    const item = target.closest(elementStrings.dropdownItems.chatPanelDropdownItem);
    const { type } = item.dataset;
    switch (type) {
        case actions.chatPanel.read:
            read();
            break;
        case actions.chatPanel.unread:
            unread();
            break;
        case actions.chatPanel.pin:
            pin();
            break;
        case actions.chatPanel.unpin:
            unpin();
            break;
        case actions.chatPanel.mute:
            mute();
            break;
        case actions.chatPanel.unmute:
            unmute();
            break;
        case actions.chatPanel.add:
            add();
            break;
        case actions.chatPanel.remove:
            remove();
            break;
        case actions.chatPanel.delete:
            deleteChat();
            break;
    }
};

// Actions
const read = () => {
    console.log('Read');
};
const unread = () => {
    console.log('Unread');
};
const pin = () => {
    console.log('Pin');
};
const unpin = () => {
    console.log('Unpin');
};
const mute = () => {
    console.log('Mute');
};
const unmute = () => {
    console.log('Unmute');
};
const add = () => {
    console.log('Add');
};
const remove = () => {
    console.log('Remove');
};
const deleteChat = () => {
    console.log('Delete');
};

export default controlChatPanelDropdown;
