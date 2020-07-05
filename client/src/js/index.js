import faker from 'faker';

const state = {
    currentUser: {},
};
import { elements } from './base';

const renderIdeal = () => {
    let markup;

    markup = `
    <div class="logo-box__name">
        Chat Fuel
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
            ${chat_panel_ideal()}
        </div>
    </div>
`;
    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);

    elements.Header.classList.add('ideal');
};

const renderUser = () => {
    let markup;
    markup = `
    <form class="search">
        <input type="text" class="search__input" placeholder="Search Friends" />
        <button class="search__button">
            <svg class="search__icon">
                <use xlink:href="img/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>
    `;
    elements.LogoBox.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <a href="#active" class="menu__link menu__link--active">
                    Active
                </a>
            </li>
            <li class="menu__item">
                <a href="#friends" class="menu__link">
                    Friends
                </a>
            </li>
            <li class="menu__item">
                <a href="#groups" class="menu__link">
                    Groups
                </a>
            </li>
            <li class="menu__item">
                <a href="#status" class="menu__link">
                    Status
                </a>
            </li>
        </ul>
    </div>
    `;
    elements.Header.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="about-me">
    <a href="#" class="about-me__link">
        <img src=${faker.image.avatar()} alt="user-photo" class="about-me__photo"/>
        
        <span class="about-me__name">${faker.fake('{{name.suffix}} {{name.firstName}} {{name.lastName}}')}</span>
    </a>
    </div>
    `;

    elements.Header.insertAdjacentHTML('beforeend', markup);

    const chat_panel__item = () => ` 
    <li class="chat-panel-user__item">
    <a href="#" class="chat-panel-user__link">
        <img src=${faker.image.avatar()} alt="photo" class="chat-panel-user__userphoto" />
        <span class="chat-panel-user__username">${faker.fake('{{name.firstName}} {{name.lastName}}')}</span>
        <svg class="chat-panel-user__option">
            <use xlink:href="img/sprite.svg#icon-dots-three-vertical"></use>
        </svg>
    </a>
    </li>
    `;
    markup = `
    <div class="chat-panel-user">                    
        <div class="chat-panel-user__title">
            Active Now <span class="chat-panel-user__count">(10)</span>
            <svg class="chat-panel-user__reload">
                <use xlink:href="img/sprite.svg#icon-spinner"></use>
            </svg>
        </div>
        <ul class="chat-panel-user__list">
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}

            <li class="chat-panel-user__item chat-panel-user__item--active">
            <a href="#" class="chat-panel-user__link">
                <img src=${faker.image.avatar()} alt="photo" class="chat-panel-user__userphoto" />
                <span class="chat-panel-user__username">${faker.fake('{{name.firstName}} {{name.lastName}}')}</span>
                <svg class="chat-panel-user__option">
                    <use xlink:href="img/sprite.svg#icon-dots-three-vertical"></use>
                </svg>
            </a>
            </li>
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
            ${chat_panel__item()}
        </ul>
    </div>

    `;

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
                <use xlink:href="img/sprite.svg#icon-spinner"></use>
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
    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="chat-box-user__null">
        <div class="chat-box-user__null--container">
            <div class="chat-box-user__null--svg">
                <svg>
                <use xlink:href="img/sprite.svg#icon-null"></use>
                </svg>
            </div>
            <div class="chat-box-user__null--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    elements.ChatBox.insertAdjacentHTML('beforeend', markup);

    elements.Header.classList.add('user');
};

const init = () => {
    if (state.currentUser) {
        renderUser();
    } else {
        renderIdeal();
    }
};

init();
