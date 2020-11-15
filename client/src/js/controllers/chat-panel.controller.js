import state from '../state';
// Utils
import { elementStrings, mode, select } from '../utils/base.util';
// Controllers
import * as chatBoxController from '../controllers/chat-box.controller';
// Models
import ChatPanel from '../models/ChatPanel';
// Views
import * as chatPanelView from '../views/chat-panel.view';

export const controlChatPanel = info => {
    // Init Chat Panel
    state.set('chatPanel', info, ChatPanel);

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

// ! For Development
window.controlChatPanel = controlChatPanel;

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

    // Drag Start
    list.addEventListener('dragstart', event => {
        const { target } = event;
        // Getting item
        const item = target.closest(elementStrings.items.chatPanelItem);
        if (!item) return;
        // Getting user
        const user = item.dataset.user;
        if (!user) return;
        // Saving user
        event.dataTransfer.setData('user', user);
        // Drag Mode of chat box
        chatBoxController.controlChatBox({ mode: mode.chatBox.drag, data: { user: user } });
    });
    // Drag End
    list.addEventListener('dragend', () => {
        if (state['chatBox'].mode === mode.chatBox.drag) chatBoxController.controlChatBox({ mode: mode.chatBox.empty });
    });

    // Click
    list.addEventListener('click', event => {
        const { target } = event;
        // Don't do anything in case of drop
        if (target.matches(`${elementStrings.drops.chatPanelDrop}, ${elementStrings.drops.chatPanelDrop} *`)) return;
        // Getting item
        const item = target.closest(elementStrings.items.chatPanelItem);
        if (!item) return;
        // Getting user
        const user = item.dataset.user;
        if (!user) return;
        // Remove Selected
        chatPanelView.removeSelected();
        // Add Selected
        chatPanelView.addSelected(item);
        // User Mode of Chat Box
        chatBoxController.controlChatBox({
            mode: mode.chatBox.user,
            data: { user: user },
        });
    });
};
