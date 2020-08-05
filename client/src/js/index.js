import faker from 'faker';

// State
import state from './state';
// Utils
import { elements, mode } from './utils/base.util';
// ---------------------
// Models

// ---------------------
// Views
// ---------------------
// Controllers
import * as themeController from './controllers/theme/theme.controller';
import * as headerController from './controllers/header.controller';
import * as initController from './controllers/init/init.controller';
import * as dropdownsController from './controllers/dropdowns/dropdowns.controller';
import * as chatPanelController from './controllers/chat-panel.controller';
import * as chatBoxController from './controllers/chat-box.controller';
import * as chatProfileController from './controllers/chat-profile.controller';

const addListeners = () => {
    // Dropdown
    document.querySelector(elements.App).addEventListener('click', dropdownsController.controlDropdowns);
};

const init = () => {
    // Init
    initController.controlInit();
    // Theme
    themeController.controlTheme({ mode: mode.theme.dark });

    // Header
    headerController.controlHeader({ mode: mode.header.user });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.user.recentChat });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.user });

    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });

    addListeners();
};

init();
