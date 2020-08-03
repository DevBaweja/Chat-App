import state from '../../state';
// Models
import Theme from '../../models/Theme';
// Views
import * as themeView from '../../views/theme/theme.view';

export const controlTheme = () => {
    // Init Theme
    if (!state.theme) state.theme = new Theme('dark-green');
    // Render it to App
    themeView.renderTheme(state.theme.theme);
};

export const toggleTheme = () => {
    themeView.clearTheme(state.theme.theme);
    // Change theme
    state.theme.changeTheme('dark-purple');
    // Render theme
    themeView.renderTheme(state.theme.theme);
};
