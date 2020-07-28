// Views
import * as chatPanelDropdownView from '../../views/dropdowns/chat-panel-dropdown.view';
// Controllers
import { getCoordinate } from '../../views/dropdowns.view';

const controlChatPanelDropdown = event => {
    // 0) Positioning of Dropdown
    const { top, left } = getCoordinate(event);

    // 1) Render Dropdown For About Me
    chatPanelDropdownView.renderChatPanelDropdown({ coordinate: { top, left } });
    // 2) Add Event Listener
};

export default controlChatPanelDropdown;
