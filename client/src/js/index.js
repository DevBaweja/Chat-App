import faker from 'faker';

// State
import state from './state';
// Utils
import { elements, elementStrings } from './utils/base.util';
// ---------------------
// Models

// ---------------------
// Views
import * as formsView from './views/forms.view';
// ---------------------
// Controllers
import * as loginController from './controllers/login.controller';
import * as signupController from './controllers/signup.controller';
import * as initController from './controllers/init.controller';
import * as dropdownsController from './controllers/dropdowns.controller';

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

    const chat_panel_ideal = () => `
    <div class="chat-panel-ideal__dimmer--item">
        <div class="chat-panel-ideal__dimmer--circle">
            <svg viewBox="0 0 50 50">
                <circle></circle>
            </svg>
        </div>
        <div class="chat-panel-ideal__dimmer--rect">
            <svg viewBox="0 0 180 40">
                <rect></rect>
            </svg>
        </div>
    </div>
    `;

    markup = `
    <div class="chat-panel-ideal">
        <div class="chat-panel-ideal__title"></div>
        <div class="chat-panel-ideal__dimmer">
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
        </div>
    </div>
`;
    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="chat-box-ideal">
        <div class="chat-box-ideal--container">
            <div class="chat-box-ideal--svg">
                <svg>
                <use xlink:href="svg/sprite.svg#icon-ideal"></use>
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
    <form class="search">
        <input type="text" class="search__input" placeholder="Search Friends" />
        <button class="search__button">
            <svg class="search__icon">
                <use xlink:href="svg/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>
    `;
    elements.LogoBox.insertAdjacentHTML('beforeend', markup);

    const menu__item = item => `
    <li class="menu__item">
        <div href="#${item.toLowerCase()}" class="menu__link">
            ${item}
        </div>
    </li>
    `;

    markup = `
    <div class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <div href="#chats" class="menu__link menu__link--active">
                    Chats
                </div>
            </li>
            ${['Favourites', 'Active', 'Friends', 'Groups'].map(cur => menu__item(cur)).join('')}
        </ul>
    </div>
    `;
    elements.Header.insertAdjacentHTML('beforeend', markup);

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

    const chat_panel__item = () => ` 
    <li class="chat-panel-user__item">
    <div class="chat-panel-user__link">
        <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
        <!-- User Info -->
        <div class="chat-panel-user__info">
            <span class="chat-panel-user__username">${faker.name.findName()}</span>
            <div class="chat-panel-user__settings">
               
            </div>
        </div>
        
        <!-- OPTIONS -->
        <svg class="chat-panel-user__option chat-panel__drop">
            <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
        </svg>
        <!-- ACTIVE -->
        <svg class="chat-panel-user__state chat-panel-user__state--inactive">
            <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
        </svg>
        
    </div>
    </li>
    `;
    markup = `
    <div class="chat-panel-user">                    
        <div class="chat-panel-user__title">
            Active Now <span class="chat-panel-user__count">(10)</span>
            <svg class="chat-panel-user__reload">
                <use xlink:href="svg/sprite.svg#icon-spinner"></use>
            </svg>
        </div>
        <ul class="chat-panel-user__list">
            ${chat_panel__item()}
            <li class="chat-panel-user__item">
    <div class="chat-panel-user__link">
        <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
        <!-- User Info -->
        <div class="chat-panel-user__info">
            <span class="chat-panel-user__username">${faker.name.findName()}</span>
            <div class="chat-panel-user__settings">
               
            </div>
        </div>
        <!-- ACTIVE -->
        <svg class="chat-panel-user__state chat-panel-user__state--inactive">
            <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
        </svg>

        <!-- OPTION -->
        <svg class="chat-panel-user__option ">
            <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
        </svg>
       
       
        
    </div>
    </li>
            ${chat_panel__item()}

            <!-- Settings -->
            <li class="chat-panel-user__item">
            <div class="chat-panel-user__link">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                <svg class="chat-panel-user__settings--icons icon-dot-single--notification">
                <use xlink:href="svg/sprite.svg#icon-dot-single--notification"></use>
                </svg>
                <svg class="chat-panel-user__settings--icons icon-pin-chat">
                <use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
                </svg>
                <svg class="chat-panel-user__settings--icons icon-mute-notification">
                <use xlink:href="svg/sprite.svg#icon-mute-notification"></use>
                </svg> 
               
                </div>
            </div>
                <svg class="chat-panel-user__option">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--inactive">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}

            <!-- Selected -->
            <li class="chat-panel-user__item chat-panel-user__item--selected">
            <div class="chat-panel-user__link">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-user__option">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--inactive">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}
            <!-- Active -->
            <li class="chat-panel-user__item chat-panel-user__item--selected">
            <div class="chat-panel-user__link">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-user__option">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--active">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}
            ${chat_panel__item()}
        </ul>
    </div>

    `;
    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);

    const chat_panel_user = () => `
    <div class="chat-panel-user__null__dimmer--item">
        <div class="chat-panel-user__null__dimmer--circle">
            <svg viewBox="0 0 50 50">
                <circle></circle>
            </svg>
        </div>
        <div class="chat-panel-user__null__dimmer--rect">
            <svg viewBox="0 0 180 40">
                <rect></rect>
            </svg>
        </div>
    </div>
    `;

    // No users
    markup = `
    <div class="chat-panel-user__null">
        <div class="chat-panel-user__title">
            Active Now <span class="chat-panel-user__count">(10)</span>
            <svg class="chat-panel-user__reload">
                <use xlink:href="svg/sprite.svg#icon-spinner"></use>
            </svg>
        </div>
        <div class="chat-panel-user__dimmer">
            ${chat_panel_user()}
            ${chat_panel_user()}
            ${chat_panel_user()}
            ${chat_panel_user()}
            ${chat_panel_user()}
            ${chat_panel_user()}
            ${chat_panel_user()}
            ${chat_panel_user()}
        </div>
    </div>
    `;

    // elements.ChatPanel.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="chat-box-user__null">
        <div class="chat-box-user__null--container">
            <div class="chat-box-user__null--svg">
                <svg>
                <use xlink:href="img/themes.svg#icon-null-${state.theme}"></use>
                </svg>
            </div>
            <div class="chat-box-user__null--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;

    markup = `
    <header class="chat-box__header">

        <div class="chat-box__header--back">
            <svg class="chat-box__header--back-svg">
            <use xlink:href="svg/sprite.svg#icon-arrow-left"></use>
            </svg>
        </div>

        <img src=${faker.image.avatar()} alt="" class="chat-box__header--img" />

        <div class="chat-box__header--content">
            <div class="chat-box__header--content-name">${faker.name.findName()}</div>
            <div class="chat-box__header--content-status">online</div>
        </div>


        <div class="chat-box__header--options">
            <svg class="chat-box__header--options-svg">
            <use xlink:href="svg/sprite.svg#icon-dots-three-vertical"></use>
            </svg>
        </div>
    
    </header>
    <main class="chat-box__main" style="background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075)), url('img/background-image/chat-box.jpg')">Main
    </main>
    <footer class="chat-box__footer">Footer</footer>
`;

    elements.ChatBox.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="chat-profile__user">
    <form class="chat-profile__user--form">
        <div class="chat-profile__user-pic">
            <img src="img//avatar/boy.png" class="chat-profile__user-pic--img" alt="" />
            <div class="chat-profile__user-pic--upload">
                <label class="chat-profile__user-pic--label" for="photo">
                    <svg class="chat-profile__user-pic--svg">
                        <use xlink:href="svg/sprite.svg#icon-camera"></use>
                    </svg>
                </label>
                <input class="chat-profile__user-pic--input" type="file" id="photo" name="photo" />
            </div>
            <div class="chat-profile__user-pic--name">${name}</div>
        </div>

        <div class="chat-profile__user-about">
            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="name" class="chat-profile__user-about--label"> Name </label>
                    <svg class="chat-profile__user-about--svg">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="name" class="chat-profile__user-about--input" value="${name}" disabled />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="email" class="chat-profile__user-about--label"> Email </label>
                    <svg class="chat-profile__user-about--svg">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="email" class="chat-profile__user-about--input" value="${faker.internet.email()}" disabled />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="bio" class="chat-profile__user-about--label"> Bio </label>
                    <svg class="chat-profile__user-about--svg">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>

                <textarea id="bio" class="chat-profile__user-about--input" rows="4" disabled>${faker.hacker.phrase()}</textarea>
            </div>
        </div>
        <!--
        <div class="chat-profile__user-save">
                <button class="chat-profile__user--update">Save profile</button>
        </div>
        -->
    </form>
</div>

    `;

    elements.ChatProfile.insertAdjacentHTML('beforeend', markup);

    elements.Header.classList.add('user');
};
// ------------------------------
// Event Listeners
const addUserListener = () => {
    // Active Status
    initController.controlInit();
    // window.addEventListener('load', initController.controlInit);
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
    elements.Forms.addEventListener('click', event => {
        if (event.target.matches('.blur') || event.target.matches('.user-cross,.user-cross *')) {
            // Clearing Forms
            formsView.clearForms();
        }
    });
};

const init = () => {
    if (state.user) {
        renderUser();
        addUserListener();
    } else {
        renderIdeal();
        addIdealListeners();
    }

    elements.App.classList.add(state.theme);
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
