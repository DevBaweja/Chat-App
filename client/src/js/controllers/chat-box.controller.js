import state from '../state';
// Utils
import { elementStrings, mode } from '../utils/base.util';
// Models
import ChatBox from '../models/ChatBox';
// Views
import * as chatPanelView from '../views/chat-panel.view';
import * as chatBoxView from '../views/chat-box.view';

export const controlChatBox = info => {
    // Init Chat Box
    if (!state.chatBox) state.chatBox = new ChatBox({ mode: info.mode });
    state.chatBox.setMode(info.mode);

    // Prepare UI
    chatBoxView.clearChatBox();

    switch (info.mode) {
        case mode.chatBox.ideal:
            ideal(info);
            break;
        case mode.chatBox.empty:
            empty(info);
            break;
        case mode.chatBox.user:
            user(info);
            break;
        case mode.chatBox.drag:
            drag(info);
            break;
    }
};
const ideal = ({ data }) => {
    // Render Ideal
    chatBoxView.renderIdeal(data);
};
const empty = ({ data }) => {
    // Render Empty
    chatBoxView.renderEmpty(data);
};
const user = ({ data }) => {
    // Render User
    chatBoxView.renderUser();
    // Add Event Listeners
    document.querySelector(elementStrings.chatBox.header.back).addEventListener('click', () => {
        controlChatBox({ mode: mode.chatBox.empty, data: { theme: state.theme.mode } });
    });
};
const drag = ({ data }) => {
    // Render Drag
    chatBoxView.renderDrag(data);
    // Add Event Listeners
    // To make it dropable elements
    const dropable = document.querySelector(elementStrings.drags.chatPanelDrag);
    dropable.addEventListener('dragover', event => {
        event.preventDefault();
    });
    dropable.addEventListener('drop', event => {
        const user = event.dataTransfer.getData('user');
        // Model
        if (user) controlChatBox({ mode: mode.chatBox.user });
        // Remove Selected
        chatPanelView.removeSelected();
        // Getting Item
        const item = document.querySelector(`${elementStrings.items.chatPanelItem}[data-user="${user}"]`);
        // Add Selected
        chatPanelView.addSelected(item);
    });
};
