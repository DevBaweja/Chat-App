import state from '../../state';
import { mode } from '../../utils/base.util';
// Controllers
import * as chatBoxController from '../../controllers/chat-box.controller';
import * as backgroundImageController from '../../controllers/background-image.controller';
// Models
import Theme from '../../models/Theme';
// Views
import * as themeView from '../../views/theme/theme.view';

export const controlTheme = info => {
    // Init Theme
    if (!state.theme) state.theme = new Theme(info);
    // Prepare UI
    themeView.clearTheme(state.theme.mode);
    themeView.clearColor();

    // Changing Data
    state.theme.setMode(info.mode || state.theme.mode);
    state.theme.setColor(info.color || state.theme.color);

    // Render it to App
    themeView.renderTheme(state.theme.mode);
    themeView.renderColor(state.theme.color);

    // SVG
    controlSvg();
    // Image
    controlImage();
    // ! For Development
    window.controlTheme = controlTheme;
};

const controlSvg = () => {
    if (!state.chatBox) return;
    const valids = [mode.chatBox.ideal, mode.chatBox.empty];
    const isValid = valids.find(valid => valid === state.chatBox.mode);
    if (isValid)
        chatBoxController.controlChatBox({
            mode: state.chatBox.mode,
            data: { color: state.theme.color },
        });
};

const controlImage = () => {
    if (!state.chatBox) return;
    const valids = [mode.chatBox.user];
    const isValid = valids.find(valid => valid === state.chatBox.mode);
    if (isValid) backgroundImageController.controlBackgroundImage({ mode: mode.background[state.theme.mode][1] });
};
