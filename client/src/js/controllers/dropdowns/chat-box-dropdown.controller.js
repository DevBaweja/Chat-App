// Utils
import { elementStrings, select } from '../../utils/base.util';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as chatBoxDropdownView from '../../views/dropdowns/chat-box-dropdown.view';

export const controlMessageOutDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For Message Out
    chatBoxDropdownView.renderMessageOutDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatBoxDropdown.out).addEventListener('click', controlMessageOutDropdownItems);
};

export const controlMessageInDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For Message In
    chatBoxDropdownView.renderMessageInDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatBoxDropdown.in).addEventListener('click', controlMessageInDropdownItems);
};

export const controlOptionsDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For Message Out
    chatBoxDropdownView.renderMessageOptionsDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.chatBoxDropdown.options).addEventListener('click', controlOptionsDropdownItems);
};
