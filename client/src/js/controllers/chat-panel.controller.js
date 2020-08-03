import state from '../state';
// Utils
import { mode } from '../utils/base.util';
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
};
