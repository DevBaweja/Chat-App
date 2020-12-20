import state from '../../state';
import { mode, select, elements } from '../../utils/base.util';
// Controllers
import * as headerController from '../header.controller';
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

    // Favicon
    controlFavicon();

    // Only User
    if (!state['user']) return;
    // SVG
    controlSvg();
    // Control Animate
    controlAnimate();
    // Wallpaper
    controlWallpaper();
    // Header
    controlHeader();
};

const controlFavicon = () => {
    // Getting color from state
    const { color } = state['theme'];

    const faviconElement = select(elements.Favicon);
    const location = `svg/themes/favicon/favicon-${color}.svg`;
    faviconElement.setAttribute('href', location);
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

const controlAnimate = () => {
    if (!state['chatBox']) return;
    const valids = [mode.chatBox.animate];
    const isValid = valids.find(valid => valid === state['chatBox'].mode);

    if (isValid) {
        const { mode: type } = state['animate'];
        chatBoxController.controlChatBox({
            mode: state['chatBox'].mode,
            type,
        });
    }
};

const controlWallpaper = () => {
    const { wallpaper } = state['setting'];
    backgroundImageController.controlBackgroundImage({ mode: wallpaper[state['theme'].mode] });

    if (!state['chatProfile'] || !state['subSetting']) return;
    const valids = [{ chatProfile: mode.chatProfile.settingSub, setting: mode.setting.wallpaper }];
    const isValid = valids.find(
        valid => valid.chatProfile === state['chatProfile'].mode && valid.setting === state['subSetting'].mode
    );
    if (isValid) chatProfileSettingController.controlSetting({ mode: state['subSetting'].mode });
};

const controlHeader = () => {
    headerController.controlHeader({ mode: mode.header.user });
};
// ! For Development
window.controlTheme = controlTheme;
