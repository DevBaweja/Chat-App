// ---------------------
// Models
// ---------------------
// Views
// ---------------------
// Controllers
import * as loadingController from './controllers/loading/loading.controller';
import * as modeController from './controllers/mode.controller';
import * as initController from './controllers/init/init.controller';
// App
import * as App from './App';

const init = () => {
    // App
    App.render();

    // Loading
    loadingController.controlLoading(true);

    // Mode
    modeController.initMode();

    // Init
    initController.addListeners();
    initController.controlInit();
};

init();
