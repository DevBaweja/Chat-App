import state from '../state';
// Utils
import { elementStrings, mode } from '../utils/base.util';
// Controllers
import * as chatBoxController from '../controllers/chat-box.controller';
// Models
import ChatPanel from '../models/ChatPanel';
// Views
import * as chatPanelView from '../views/chat-panel.view';

export const controlChatPanel = info => {
    // Init Chat Panel
    if (!state.chatPanel) state.chatPanel = new ChatPanel({ mode: info.mode });
    state.chatPanel.setMode(info.mode);

    // Prepare UI
    chatPanelView.clearChatPanel();

    switch (info.mode) {
        case mode.chatPanel.ideal:
            ideal();
            break;
        case mode.chatPanel.empty:
            empty();
            break;
        case mode.chatPanel.user.recentChat:
            recentChat();
            break;
    }
};
const empty = () => {
    // Render Empty
    chatPanelView.renderEmpty();
};
const ideal = () => {
    // Render Ideal
    chatPanelView.renderIdeal();
};
const recentChat = () => {
    // Render Recent Chat
    chatPanelView.renderRecentChat();
    // Add Event Listeners
    const list = document.querySelector(elementStrings.lists.chatPanelList);
    // Drag
    list.addEventListener('dragstart', event => {
        // Getting item
        const item = chatPanelView.getItem(event);
        if (!item) return;
        // Getting user
        const user = chatPanelView.getUser(item);
        // Remove Selected
        chatPanelView.removeSelected();
        // Add Selected
        chatPanelView.addSelected(item);
        // Saving user
        event.dataTransfer.setData('user', user);
        // Drag Mode of chat box
        chatBoxController.controlChatBox({ mode: mode.chatBox.drag, data: { user: user } });
    });
    list.addEventListener('dragend', event => {});
    // Click
    list.addEventListener('click', event => {
        // Getting item
        const item = chatPanelView.getItem(event);
        if (!item) return;
        // Getting user
        const user = chatPanelView.getUser(item);
        if (!user) return;
        // Remove Selected
        chatPanelView.removeSelected();
        // Add Selected
        chatPanelView.addSelected(item);
        // User Mode of chat box
        chatBoxController.controlChatBox({ mode: mode.chatBox.user, data: { user: user } });
    });
};
