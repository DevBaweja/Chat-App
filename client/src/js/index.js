// Utils
import { elements, mode, select } from './utils/base.util';
// ---------------------
// Models
// ---------------------
// Views
// ---------------------
// Controllers
import * as modeController from './controllers/mode.controller';
import * as initController from './controllers/init/init.controller';
import * as dropdownsController from './controllers/dropdowns/dropdowns.controller';
// App
import * as App from './App';

const addListeners = () => {
    // Dropdown
    select(elements.App).addEventListener('click', dropdownsController.controlDropdowns);
};

const initMode = () => {
    switch (true) {
        case window.location.hostname.includes('localhost'):
            modeController.controlMode({ mode: mode.mode.development });
            break;
        case window.location.hostname.includes('herokuapp'):
            modeController.controlMode({ mode: mode.mode.production });
            break;
        default:
            modeController.controlMode({ mode: mode.mode.development });
    }
};

const init = () => {
    // App
    App.render();

    // Mode
    initMode();

    // Init
    initController.controlInit();

    addListeners();
};

init();
