// Views
import * as chatPanelDropdownView from '../../views/dropdowns/chat-panel-dropdown.view';

const controlChatPanelDropdown = event => {
    const target = event.target;
    // 1) Render Dropdown For About Me
    chatPanelDropdownView.renderChatPanelDropdown();
    // 2) Add Event Listener
};

export default controlChatPanelDropdown;
