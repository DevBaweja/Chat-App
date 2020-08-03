import faker from 'faker';

// State
import state from './state';
// Utils
import { elements, mode } from './utils/base.util';
// ---------------------
// Models

// ---------------------
// Views
// ---------------------
// Controllers
import * as themeController from './controllers/theme/theme.controller';
import * as headerController from './controllers/header.controller';
import * as initController from './controllers/init/init.controller';
import * as dropdownsController from './controllers/dropdowns/dropdowns.controller';
import * as chatPanelController from './controllers/chat-panel.controller';
import * as chatBoxController from './controllers/chat-box.controller';
import * as chatProfileController from './controllers/chat-profile.controller';

const renderUser = () => {
    let markup;

    const menu__item = item => `
    <li class="menu__item">
        <div class="menu__link" role="button" data-goTo="${item.toLowerCase()}">
            ${item}
        </div>
    </li>
    `;

    markup = `
    <div class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <div class="menu__link menu__link--active" role="button" data-goTo="chats">
                    Chats
                </div>
            </li>
            ${['Favourites', 'Active', 'Friends', 'Groups'].map(cur => menu__item(cur)).join('')}
        </ul>
    </div>
    `;
    // elements.Header.insertAdjacentHTML('beforeend', markup);
};
// ------------------------------
// Event Listeners

const init = () => {
    // Active Status
    initController.controlInit();
    // Theme
    themeController.controlTheme();
    // Header
    headerController.controlHeader({ mode: mode.header.user });
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.user.recentChat });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.user });
    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.myProfile });

    // Dropdown
    elements.App.addEventListener('click', dropdownsController.controlDropdowns);
};

init();

/* 
<svg class="chat-panel-user__settings--icons icon-pin-chat">
<use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
</svg>
<svg class="chat-panel-user__settings--icons icon-mute-notification">
<use xlink:href="svg/sprite.svg#icon-mute-notification"></use>
</svg> 
*/
