import state from '../state';
// Utils
import { elements, elementStrings, mode } from '../utils/base.util';
// Models
import ChatBox from '../models/ChatBox';
// Views
import * as chatBoxView from '../views/chat-box.view';

export const controlChatBox = info => {
    // Init Chat Box
    if (!state.chatBox) state.chatBox = new ChatBox({ mode: info.mode });
    state.chatBox.setMode(info.mode);

    // Prepare UI
    chatBoxView.clearChatBox();

    switch (info.mode) {
        case mode.chatBox.ideal:
            ideal();
            break;
        case mode.chatBox.empty:
            empty();
            break;
        case mode.chatBox.user:
            user(info);
            break;
        case mode.chatBox.drag:
            drag(info);
            break;
    }
};
const ideal = () => {
    // Render Ideal
    chatBoxView.renderIdeal();
};
const empty = () => {
    // Render Empty
    chatBoxView.renderEmpty();
};
const user = ({ data }) => {
    // Render User
    chatBoxView.renderUser();
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
        if (user) controlChatBox({ mode: mode.chatBox.user });
    });
};
