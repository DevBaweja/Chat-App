import state from '../state';
import { elements } from '../utils/base.util';
import faker from 'faker';

export const clearHeader = () => (elements.Header.innerHTML = '');

export const toggleClass = className => {
    // Removing class
    elements.Header.classList.remove(state.header.className);
    // Changing state
    state.header.className = className;
    // Adding class
    elements.Header.classList.add(state.header.className);
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

    elements.Header.insertAdjacentHTML('beforeend', markup);
};
export const renderIdeal = () => {
    const markup = `
    <div class="cta">
        <div class="cta__btn">
            <button class="cta__sign-up cta__action">Sign Up</button>
            <button class="cta__log-in cta__action">Log In</button>
        </div>
    </div>
    `;

    elements.Header.insertAdjacentHTML('beforeend', markup);
};

export const renderUser = () => {
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

    elements.Header.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="about-me">
    <div class="about-me__link about-me__drop">
        <img src="img//avatar/boy.png" alt="user-photo" class="about-me__photo"/>
        
        <span class="about-me__name">${faker.name.findName()}</span>
    </div>
    </div>
    `;
    elements.Header.insertAdjacentHTML('beforeend', markup);
};
