import state from '../../state';
import { mode } from '../../utils/base.util';
// Controllers
import * as chatBoxController from '../chat-box.controller';
import * as backgroundImageController from '../background-image.controller';
import * as chatProfileSettingController from '../chat-profile/chat-profile-setting.controller';
// Models
import Theme from '../../models/Theme';
// Views
import * as themeView from '../../views/theme/theme.view';

export const controlTheme = info => {
    // Init Theme
    if (!state['theme']) state['theme'] = new Theme(info);
    // Prepare UI
    themeView.clearTheme(state['theme'].mode);
    themeView.clearColor();

    // Changing Data
    state['theme'].setMode(info.mode || state['theme'].mode);
    state['theme'].setColor(info.color || state['theme'].color);

    // Render it to App
    themeView.renderTheme(state['theme'].mode);
    themeView.renderColor(state['theme'].color);

    // SVG
    controlSvg();
    // Image
    controlImage();
    // Wallpaper
    controlWallpaper();
};

const controlSvg = () => {
    if (!state['chatBox']) return;
    const valids = [mode.chatBox.ideal, mode.chatBox.empty];
    const isValid = valids.find(valid => valid === state['chatBox'].mode);
    if (isValid)
        chatBoxController.controlChatBox({
            mode: state['chatBox'].mode,
        });
};

const controlImage = () => {
    if (!state['chatBox']) return;
    const valids = [mode.chatBox.user];
    const isValid = valids.find(valid => valid === state['chatBox'].mode);
    const initial = 1;
    if (isValid)
        backgroundImageController.controlBackgroundImage({ mode: mode.background[state['theme'].mode][initial] });
};

const controlWallpaper = () => {
    if (!state['chatProfile'] || !state['setting']) return;
    const valids = [{ chatProfile: mode.chatProfile.settingSub, setting: mode.setting.wallpaper }];
    const isValid = valids.find(
        valid => valid.chatProfile === state['chatProfile'].mode && valid.setting === state['setting'].mode
    );
    if (isValid) chatProfileSettingController.controlSetting({ mode: state['setting'].mode });
};
// ! For Development
window.controlTheme = controlTheme;
