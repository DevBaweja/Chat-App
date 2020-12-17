// Utils
import { elementStrings, select, actions, capitalize } from '../../utils/base.util';

// Views
import * as chatPanelDropdownView from '../../views/dropdowns/chat-panel-dropdown.view';
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';

const controlChatPanelDropdown = event => {
    const { target } = event;
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 0) Getting User Id
    // Getting item
    const itemElement = target.closest(elementStrings.chatPanel.item);
    if (!itemElement) return;
    // Getting user
    const user = JSON.parse(itemElement.dataset.user);
    // Getting set
    const set = itemElement.dataset.set;
    // Getting setting
    const settingElement = select(elementStrings.chatPanel.setting, itemElement);
    const setting = JSON.parse(settingElement.dataset.setting);
    // 1) Render Dropdown For About Me
    // data
    chatPanelDropdownView.renderChatPanelDropdown({ user, set, setting, coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatPanelDropdown).addEventListener('click', event =>
        controlAboutMeDropdownItems(event, { user, set })
    );
};

// ! For Development
window.controlChatPanelDropdown = controlChatPanelDropdown;

// Items
const controlAboutMeDropdownItems = (event, { user, set }) => {
    const { target } = event;
    const item = target.closest(elementStrings.dropdownItems.chatPanelDropdownItem);
    if (!item) return;

    const { type } = item.dataset;
    const [value, key] = type.split('-');

    if (!key) {
        deleteChat();
        return;
    }

    const action = `${key}${capitalize(set)}`;
    const update = { [action]: value };
    call(user, update);

    switch (value) {
        case actions.chatPanel.mark:
            mark();
            break;
        case actions.chatPanel.unmark:
            unmark();
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
            deleteChat;
            break;
    }
};

const call = async (user, update) => {
    state['friend'].setUserInput({ user: user._id });
    state['friend'].setUpdateObject({ update });

    // Making API call
    const data = await state['friend'].updateFriend();
    try {
        switch (data.status) {
            case 'success':
                {
                }
                git;
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

// Actions
const mark = () => {
    console.log('Mark');
};
const unmark = () => {
    console.log('Unmark');
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
