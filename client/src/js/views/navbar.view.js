import state from '../state';
import { elements, select } from '../utils/base.util';

export const clearNavbar = () => (select(elements.Navbar).innerHTML = '');

export const toggleClass = className => {
    // Removing class
    select(elements.Navbar).classList.remove(state['navbar'].className);
    // Changing state
    state['navbar'].className = className;
    // Adding class
    select(elements.Navbar).classList.add(state['navbar'].className);
};

export const renderLogo = type => `
    <div class="navbar-${type}__icon">
        <div class="navbar-${type}__icon--logo">
            <svg class="navbar-${type}__icon--svg">
                <use xlink:href="svg/sprite.svg#icon-chat"></use>
            </svg>
        </div>
    </div>
    `;

export const renderIdeal = () => {
    const markup = `
    <div class="navbar-ideal">
        ${renderLogo('ideal')}
    </div>
    `;

    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};

export const renderUser = user => {
    const markup = `
        <div class="navbar-user">
            ${renderLogo('user')}
            <div class="navbar-user__content">
            </div>
            <div class="navbar-user__photo">
                ${user.name}
            </div>
        </div>
    `;
    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};
