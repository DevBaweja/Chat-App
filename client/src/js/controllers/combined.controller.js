import state from '../state';
// Utils
import { mode } from '../utils/base.util';
// Controllers
import * as headerController from './header.controller';
import * as chatPanelController from './chat-panel.controller';
import * as chatBoxController from './chat-box.controller';
import * as chatProfileController from './chat-profile.controller';
// Models
import Combined from '../models/Combined';

export const controlAll = info => {
    // Init Combined
    if (!state['combined']) state['combined'] = new Combined(info);
    state['combined'].setMode(info.mode);

    switch (info.mode) {
        case mode.combined.ideal:
            ideal();
            break;
        case mode.combined.empty:
            empty();
            break;
        case mode.combined.user:
            user();
            break;
    }
};

const ideal = () => {
    console.log('ideal');

    // 0) Ideal State of header, chat panel, chat box, chat profile
    // Header
    headerController.controlHeader({ mode: mode.header.ideal });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.ideal });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.ideal });
    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.ideal });
};

const empty = () => {
    console.log('Empty');

    // 0) Empty State of header, chat panel, chat box, chat profile
    // Header
    headerController.controlHeader({ mode: mode.header.user });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.empty });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.empty });
    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.empty });
};
const user = () => {
    console.log('user');

    // 0) User State of header, chat panel, chat box, chat profile
    // Header
    headerController.controlHeader({ mode: mode.header.user });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.user.recentChat });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.user });
    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
};
