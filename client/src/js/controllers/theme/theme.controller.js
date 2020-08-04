import state from '../../state';
import { mode } from '../../utils/base.util';
// Controllers
import * as chatBoxController from '../../controllers/chat-box.controller';
// Models
import Theme from '../../models/Theme';
// Views
import * as themeView from '../../views/theme/theme.view';

export const controlTheme = info => {
    // Init Theme
    if (!state.theme) state.theme = new Theme(info.mode);
    // Prepare UI
    themeView.clearTheme(state.theme.mode);

    // Changing Data
    state.theme.setMode(info.mode);

    // Render it to App
    themeView.renderTheme(state.theme.mode);

    // SVG
    if (!state.chatBox) return;
    const valids = [mode.chatBox.ideal, mode.chatBox.empty];
    const isValid = valids.find(valid => valid === state.chatBox.mode);
    if (isValid) chatBoxController.controlChatBox({ mode: state.chatBox.mode, data: { theme: info.mode } });
};
