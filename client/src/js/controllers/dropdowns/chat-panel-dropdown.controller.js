// Utils
import { elementStrings, select } from '../../utils/base.util';

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
    // const data  = state.chatPanel.getUserInfo(user)

    // 1) Render Dropdown For About Me
    // data
    chatPanelDropdownView.renderChatPanelDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatPanelDropdown).addEventListener('click', controlAboutMeDropdownItems);
};

const controlAboutMeDropdownItems = ({ target }) => {
    const item = target.closest(elementStrings.dropdownItems.chatPanelDropdownItem);
    if (!item) return;
    console.log(item.dataset.type);
};

export default controlChatPanelDropdown;
