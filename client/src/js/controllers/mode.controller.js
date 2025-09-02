import state from '../state';
// Utils
import { mode } from '../utils/base.util';
// Models
import Mode from '../models/Mode';

export const initMode = () => {
    switch (true) {
        case window.location.hostname.includes('localhost'):
            controlMode({ mode: mode.mode.development });
            break;
        case window.location.hostname.includes('herokuapp'):
            controlMode({ mode: mode.mode.production });
            break;
        case window.location.hostname.includes('onrender.com'):
            controlMode({ mode: mode.mode.production });
            break;
        default:
            controlMode({ mode: mode.mode.development });
    }
};

export const controlMode = info => {
    // Init Mode
    state.set('mode', info, Mode);
};

// ! For Development
window.controlMode = controlMode;
