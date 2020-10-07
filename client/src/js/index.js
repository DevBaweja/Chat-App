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

const init = () => {
    // App
    App.render();

    // Mode
    modeController.controlMode({ mode: mode.mode.development });

    // Init
    initController.controlInit();

    addListeners();
};

init();
