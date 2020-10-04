// Utils
import { elements, mode, select } from './utils/base.util';
// ---------------------
// Models
// ---------------------
// Views
// ---------------------
// Controllers
import * as modeController from './controllers/mode.controller';
import * as themeController from './controllers/theme/theme.controller';
import * as headerController from './controllers/header.controller';
import * as initController from './controllers/init/init.controller';
import * as dropdownsController from './controllers/dropdowns/dropdowns.controller';
import * as chatPanelController from './controllers/chat-panel.controller';
import * as chatBoxController from './controllers/chat-box.controller';
import * as chatProfileController from './controllers/chat-profile.controller';
// App
import * as App from './App';

const addListeners = () => {
    // Dropdown
    select(elements.App).addEventListener('click', dropdownsController.controlDropdowns);
};

const init = () => {
    // App
    App.render();
    // Mode
    modeController.controlMode({ mode: mode.mode.development });
    // Init
    initController.controlInit();
    // Theme
    themeController.controlTheme({ mode: mode.theme.dark, color: mode.theme.color.orange });

    // Header
    headerController.controlHeader({ mode: mode.header.ideal });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.user.recentChat });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.user });

    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });

    addListeners();
};

const initDev = () => {
    // App
    App.render();
    // Mode
    modeController.controlMode({ mode: mode.mode.development });
    // Init
    initController.controlInit();
    // Theme
    themeController.controlTheme({ mode: mode.theme.dark, color: mode.theme.color.purple });

    // Header
    headerController.controlHeader({ mode: mode.header.ideal });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.ideal });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.ideal });

    addListeners();
};

init();
