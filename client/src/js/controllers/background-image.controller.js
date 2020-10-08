import state from '../state';
// Models
import BackgroundImage from '../models/BackgroundImage';
// Views
import * as backgroundImageView from '../views/background-image.view';

export const controlBackgroundImage = info => {
    // Init Background Image
    if (!state['backgroundImage']) state['backgroundImage'] = new BackgroundImage(info);

    // Prepare UI
    backgroundImageView.clearBackgroundImage();

    // Changing Data
    state['backgroundImage'].setMode(info.mode);
    const rgba = state['backgroundImage'].getRgba();

    const { mode: img } = info;
    // Render Background Image
    backgroundImageView.renderBackgroundImage({ rgba, img });
};

// ! For Development
window.controlBackgroundImage = controlBackgroundImage;