import state from '../state';
import { elements } from '../utils/base.util';
import faker from 'faker';

export const clearHeader = () => (document.querySelector(elements.Header).innerHTML = '');

export const toggleClass = className => {
    // Removing class
    document.querySelector(elements.Header).classList.remove(state.header.className);
    // Changing state
    state.header.className = className;
    // Adding class
    document.querySelector(elements.Header).classList.add(state.header.className);
};
export const renderLogo = () => {
    const markup = `
    <div class="logo-box">
        <svg class="logo-box__svg">
           <use xlink:href="svg/sprite.svg#icon-chat"></use>
        </svg>
        <div class="logo-box__name">
            #ChatFuel
        </div>
    </div>
    `;

    document.querySelector(elements.Header).insertAdjacentHTML('beforeend', markup);
};
export const renderIdeal = () => {
    const markup = `
    <div class="cta">
        <div class="cta__btn">
            <button class="cta__sign-up cta__action" title="Create your new account">Sign Up</button>
            <button class="cta__log-in cta__action" title="Already Registered? Log in">Log In</button>
        </div>
    </div>
    `;

    document.querySelector(elements.Header).insertAdjacentHTML('beforeend', markup);
};

export const renderUser = () => {
    let markup;
    markup = `
    <form class="search">
        <input type="text" class="search__input" placeholder="Search Friends" />
        <button class="search__button" title="Search Friends">
            <svg class="search__icon">
                <use xlink:href="svg/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>
    `;
    document.querySelector(elements.Header).insertAdjacentHTML('beforeend', markup);

    const menu__item = item => `
    <li class="menu__item">
        <div class="menu__link" role="button" data-goTo="${item.toLowerCase()}" title="${item}">
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
    </div>`;

    // document.querySelector(elements.Header).insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="about-me">
    <div class="about-me__link about-me__drop" title="User Options">
        <img src="img/avatar/boy.png" alt="user-photo" class="about-me__photo"/>
        
        <span class="about-me__name">${faker.name.findName()}</span>
    </div>
    </div>
    `;
    document.querySelector(elements.Header).insertAdjacentHTML('beforeend', markup);
};
