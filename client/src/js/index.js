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

    markup = `
    <div class="chat-box-ideal">
        <div class="chat-box-ideal--container">
            <div class="chat-box-ideal--svg">
                <svg>
                <use xlink:href="svg/themes/ideal.svg#icon-ideal-${state.theme}"></use>
                </svg>
            </div>
            <div class="chat-box-ideal--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    elements.ChatBox.insertAdjacentHTML('beforeend', markup);

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

    markup = `
    <div class="chat-box-null">
        <div class="chat-box-null--container">
            <div class="chat-box-null--svg">
                <svg>
                    <use xlink:href="svg/themes/null.svg#icon-null-${state.theme}"></use>
                </svg>
            </div>
            <div class="chat-box-null--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    // elements.ChatBox.insertAdjacentHTML('beforeend', markup);
    const date = '2020-08-01T00:00:00.000+00:00';

    const messageIn = () => `
    <li class="chat-box-user__main--item">
        <div class="chat-box-user__main--message">
            <div class="chat-box-user__main--message-in">
                <div class="chat-box-user__drop-in">
                    <svg class="chat-box-user__drop-in--svg">
                        <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                    </svg>
                </div>
                <span class="chat-box-user__main--message-in-span">${faker.lorem.sentence().trim()}</span>
                <span class="chat-box-user__main--message-in-info">
                    ${new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
            </div>
        </div>
    </li>
    `;
    const reg = new RegExp(
        '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?'
    );
    console.log(reg.test('https://web.whatsapp.com'));
    console.log('https://web.whatsapp.com'.match(reg));
    const messageOut = () => `
    <li class="chat-box-user__main--item">
        <div class="chat-box-user__main--message">
            <div class="chat-box-user__main--message-out">
                <div class="chat-box-user__drop-out">
                    <svg class="chat-box-user__drop-out--svg">
                        <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                    </svg>
                </div>
                <span class="chat-box-user__main--message-out-span">${faker.lorem.sentence().trim()}
                </span>
                <span class="chat-box-user__main--message-out-info">
                    <span class="chat-box-user__main--message-out-info--time">
                    ${new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </span>
                    <!-- sent, delivered, seen -->
                    <svg class="chat-box-user__main--message-out-info--svg chat-box-user__main--message-out-info--svg-sent">
                        <use xlink:href="svg/sprite.svg#icon-delivered"></use>
                    </svg>
                </span>
            </div>
        </div>
    </li>

    `;
    markup = `
    <div class="chat-box-user">
        <header class="chat-box-user__header">

            <div class="chat-box-user__header--back">
                <svg class="chat-box-user__header--back-svg">
                <use xlink:href="svg/sprite.svg#icon-arrow-left"></use>
                </svg>
            </div>

            <img src=${faker.image.avatar()} alt="" class="chat-box-user__header--img" />

            <div class="chat-box-user__header--content">
                <div class="chat-box-user__header--content-name">${faker.name.findName()}</div>
                <div class="chat-box-user__header--content-status">online</div>
            </div>


            <div class="chat-box-user__header--options">
                <svg class="chat-box-user__header--options-svg">
                <use xlink:href="svg/sprite.svg#icon-dots-three-vertical"></use>
                </svg>
            </div>
        
        </header>
        <div class="chat-box-user__field" style="background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url('img/background-image/chat-box-user.jpg')">
            <main class="chat-box-user__main">
                <div class="chat-box-user__main--date-fix">
                    <span class="chat-box-user__main--date-fix-span">${new Date(date).toLocaleDateString([], {
                        dateStyle: 'long',
                        // weekday: 'short',
                        // month: 'short',
                        // year: 'numeric',
                        // day: 'numeric',
                    })}</span>
                </div>
                <div class="chat-box-user__main--container">
                    <ul class="chat-box-user__main--list">
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageOut()}
                        <li class="chat-box-user__main--item">
                            <div class="chat-box-user__main--message">
                                <div class="chat-box-user__main--date">
                                    <span class="chat-box-user__main--date-span">${new Date(date).toLocaleDateString(
                                        [],
                                        {
                                            dateStyle: 'long',
                                        }
                                    )}</span>
                                </div>
                            </div>
                        </li>
                        ${messageOut()}
                        <li class="chat-box-user__main--item">
                        <div class="chat-box-user__main--message">
                            <div class="chat-box-user__main--message-out">
                                <div class="chat-box-user__drop-out">
                                    <svg class="chat-box-user__drop-out--svg">
                                        <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                                    </svg>
                                </div>
                                <span class="chat-box-user__main--message-out-span">Hi
                                </span>
                                <span class="chat-box-user__main--message-out-info">
                                    <span class="chat-box-user__main--message-out-info--time">
                                        ${new Date(date).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })}
                                    </span>
                                    <!-- sent, delivered, seen -->
                                    <svg class="chat-box-user__main--message-out-info--svg chat-box-user__main--message-out-info--svg-sent">
                                        <use xlink:href="svg/sprite.svg#icon-delivered"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </main>
            <footer class="chat-box-user__footer">
                <form class="chat-box-user__footer--form"> 
                    <div class="chat-box-user__footer--container">
                        <div class="chat-box-user__footer--emoji">
                            <svg class="chat-box-user__footer--emoji-svg">
                                <use xlink:href="svg/sprite.svg#icon-emoji"></use>
                            </svg>
                        </div>
                        <textarea rows="1" type="text" class="chat-box-user__footer--input" spellcheck="false" placeholder="Type a message"></textarea>
                        <div class="chat-box-user__footer--location">
                            <svg class="chat-box-user__footer--location-svg">
                                <use xlink:href="svg/sprite.svg#icon-location"></use>
                            </svg>
                        </div>
                        <div class="chat-box-user__footer--attach">
                            <svg class="chat-box-user__footer--attach-svg">
                                <use xlink:href="svg/sprite.svg#icon-attach"></use>
                            </svg>
                        </div>
                        <div class="chat-box-user__footer--camera">
                            <svg class="chat-box-user__footer--camera-svg">
                                <use xlink:href="svg/sprite.svg#icon-camera"></use>
                            </svg>
                        </div>
                    </div>
                    <button class="chat-box-user__footer--send">
                        <svg class="chat-box-user__footer--send-svg">
                            <use xlink:href="svg/sprite.svg#icon-send"></use>
                        </svg>
                    </button>
                </form>
            </footer>
        </div>
    </div>
`;

    elements.ChatBox.insertAdjacentHTML('beforeend', markup);
    setTimeout(() => {
        const chatBoxList = document.querySelector('.chat-box-user__main--list');
        chatBoxList.scrollTop = chatBoxList.scrollHeight - chatBoxList.scrollTop;
    }, 1000);
    // chatBoxList.scrollTop = chatBoxList.scrollHeight;
    // console.log(chatBoxList.scrollTop);

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
    chatPanelController.controlChatPanel({ mode: mode.chatPanel.empty });

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
