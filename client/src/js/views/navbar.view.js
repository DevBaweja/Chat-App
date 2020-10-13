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

export const renderLogo = () => {
    const markup = `
    <div class="navbar__icon">
        <div class="navbar__icon--logo">
            <svg class="navbar__icon--svg">
                <use xlink:href="svg/sprite.svg#icon-chat"></use>
            </svg>
        </div>
    </div>
    `;

    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};

export const renderIdeal = () => {
    const markup = `
    `;

    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};

export const renderUser = user => {
    const markup = `
        <div class="navbar-user__content">
        </div>
        <div class="navbar-user__photo">
            ${user.name}
        </div>
    `;
    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};
