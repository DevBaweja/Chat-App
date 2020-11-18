import state from '../state';
import { mode } from '../utils/base.util';
// Models
import BackgroundImage from '../models/BackgroundImage';
// Views
import * as backgroundImageView from '../views/background-image.view';

export const controlBackgroundImage = info => {
    // Init Background Image
    state.set('backgroundImage', info, BackgroundImage);

    // Control ChatBox
    controlChatBox(info);
};

const controlChatBox = info => {
    if (!state['chatBox']) return;
    const valids = [mode.chatBox.user];
    const isValid = valids.find(valid => valid === state['chatBox'].mode);
    if (isValid) {
        // Prepare UI
        backgroundImageView.clearBackgroundImage();

        const rgba = state['backgroundImage'].getRgba();

        const img = info.mode;
        // Render Background Image
        backgroundImageView.renderBackgroundImage({ rgba, img });
    }
};
// ! For Development
window.controlBackgroundImage = controlBackgroundImage;
