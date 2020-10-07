import state from '../state';
// Models
import Mode from '../models/Mode';

export const controlMode = info => {
    // Init Mode
    if (!state.mode) state.mode = new Mode(info);
    state.mode.setMode(info.mode);
};
