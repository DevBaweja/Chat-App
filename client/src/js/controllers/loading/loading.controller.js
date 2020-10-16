import state from '../../state';
// Views
import * as loadingView from '../../views/loading/loading.view';
// Controllers

export const controlLoading = loading => {
    // Init Loading
    if (!state['loading']) state['loading'] = loading;

    // Prepare UI
    loadingView.clearLoading();

    // Loading
    if (loading) load();
};

// ! For Development
window.controlLoading = controlLoading;

const load = () => {
    console.log('Load');
    // Render Loading
    loadingView.renderLoading();
    // Set Timer for unload
};
