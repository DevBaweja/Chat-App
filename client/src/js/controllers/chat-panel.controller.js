import state from '../state';
// Utils
import { elementStrings, mode, select } from '../utils/base.util';
// Controllers
import * as chatBoxController from '../controllers/chat-box.controller';
import * as backgroundImageController from '../controllers/background-image.controller';
// Models
import ChatPanel from '../models/ChatPanel';
// Views
import * as chatPanelView from '../views/chat-panel.view';

export const controlChatPanel = info => {
    // Init Chat Panel
    if (!state.chatPanel) state.chatPanel = new ChatPanel(info);
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
    const list = select(elementStrings.lists.chatPanelList);
    // Drag
    list.addEventListener('dragstart', event => {
        // Getting item
        const item = chatPanelView.getItem(event);
        if (!item) return;
        // Getting user
        const user = chatPanelView.getUser(item);
        // Saving user
        event.dataTransfer.setData('user', user);
        // Drag Mode of chat box
        chatBoxController.controlChatBox({ mode: mode.chatBox.drag, data: { user: user } });
    });
    list.addEventListener('dragend', event => {
        if (state.chatBox.mode === mode.chatBox.drag)
            // User Mode is chat box
            chatBoxController.controlChatBox({
                mode: mode.chatBox.user,
                data: { user: 'id' },
            });
        // Changing background
        backgroundImageController.controlBackgroundImage({
            mode: mode.background[state.theme.mode][1],
        });
    });
    // Click
    list.addEventListener('click', event => {
        const { target } = event;
        // Don't do anything in case of drop
        if (target.matches(`${elementStrings.drops.chatPanelDrop}, ${elementStrings.drops.chatPanelDrop} *`)) return;
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
        chatBoxController.controlChatBox({
            mode: mode.chatBox.user,
            data: { user: user },
        });
        // Changing background
        backgroundImageController.controlBackgroundImage({
            mode: mode.background[state.theme.mode][1],
        });
    });
};
