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
