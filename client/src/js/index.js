import faker from 'faker';

// State
import state from './state';
// Utils
import { elements, elementStrings, mode } from './utils/base.util';
// ---------------------
// Models

// ---------------------
// Views
// ---------------------
// Controllers
import * as themeController from './controllers/theme/theme.controller';
import * as formController from './controllers/auth/form.controller';
import * as loginController from './controllers/auth/login.controller';
import * as signupController from './controllers/auth/signup.controller';
import * as initController from './controllers/init/init.controller';
import * as dropdownsController from './controllers/dropdowns/dropdowns.controller';
import * as chatPanelController from './controllers/chat-panel.controller';
import * as chatBoxController from './controllers/chat-box.controller';
import * as chatProfileController from './controllers/chat-profile.controller';

const renderIdeal = () => {
    let markup;

    markup = `
    <div class="logo-box__name">
        #ChatFuel
    </div>
    `;

    elements.LogoBox.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="cta">
        <div class="cta__btn">
            <button class="cta__sign-up cta__action">Sign Up</button>
            <button class="cta__log-in cta__action">Log In</button>
        </div>
    </div>
    `;

    elements.Header.insertAdjacentHTML('beforeend', markup);

    elements.Header.classList.add('ideal');
};

const renderUser = () => {
    let markup;
    markup = `
    <div class="logo-box__name">
        #ChatFuel
    </div>
    `;
    elements.LogoBox.insertAdjacentHTML('beforeend', markup);

    markup = `
    <form class="search">
        <input type="text" class="search__input" placeholder="Search Friends" />
        <button class="search__button">
            <svg class="search__icon">
                <use xlink:href="svg/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>
    `;

    elements.Header.insertAdjacentHTML('beforeend', markup);

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
    markup = `
    <div class="menu"></div>
    `;

    const name = faker.name.findName();
    markup = `
    <div class="about-me">
    <div class="about-me__link about-me__drop">
        <img src="img//avatar/boy.png" alt="user-photo" class="about-me__photo"/>
        
        <span class="about-me__name">${name}</span>
    </div>
    </div>
    `;

    elements.Header.insertAdjacentHTML('beforeend', markup);

    elements.Header.classList.add('user');
};
// ------------------------------
// Event Listeners
const addUserListener = () => {
    // Active Status
    initController.controlInit();
    // Theme
    themeController.controlTheme();
    // Chat Panel
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.recentChat });
    // Chat Box
    chatBoxController.controlChatBox({ mode: mode.chatBox.user });
    // Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.myProfile });

    // Dropdown
    elements.App.addEventListener('click', dropdownsController.controlDropdowns);
};
const addIdealListeners = () => {
    // Log In
    const loginCtaBtn = document.querySelector(elementStrings.btns.loginCtaBtn);
    loginCtaBtn.addEventListener('click', loginController.controlLoginCta);
    // Sign Up
    const signupCtaBtn = document.querySelector(elementStrings.btns.signupCtaBtn);
    signupCtaBtn.addEventListener('click', signupController.controlSignupCta);
    // Form Closing
    elements.Forms.addEventListener('click', formController.controlForm);
};

const init = () => {
    if (state.user) {
        renderUser();
        addUserListener();
    } else {
        renderIdeal();
        addIdealListeners();
    }
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
