import state from '../state';
// Models
import BackgroundImage from '../models/BackgroundImage';
// Views
import * as backgroundImageView from '../views/background-image.view';

export const controlBackgroundImage = info => {
    // Init Background Image
    state.set('backgroundImage', info, BackgroundImage);

    // Prepare UI
    backgroundImageView.clearBackgroundImage();

    const rgba = state['backgroundImage'].getRgba();

    const { mode: img } = info;
    // Render Background Image
    backgroundImageView.renderBackgroundImage({ rgba, img });
};

// ! For Development
window.controlBackgroundImage = controlBackgroundImage;
