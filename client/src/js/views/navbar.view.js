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
                <ul class="navbar-user__list">
                    <li class="navbar-user__item" title="Active Now" data-type="active-now">
                        <div class="navbar-user__title">
                            <svg class="navbar-user__title--svg">
                                <use xlink:href="svg/sprite.svg#icon-active-now"></use>
                            </svg>
                        </div>
                    </li>
                    <li class="navbar-user__item navbar-user__item--selected" title="Recent Chat" data-type="recent-chat">
                        <div class="navbar-user__title">
                            <svg class="navbar-user__title--svg">
                                <use xlink:href="svg/sprite.svg#icon-recent-chat"></use>
                            </svg>
                        </div>
                    </li>
                    <li class="navbar-user__item" title="Search" data-type="search">
                        <div class="navbar-user__title">
                            <svg class="navbar-user__title--svg">
                                <use xlink:href="svg/sprite.svg#icon-user-search"></use>
                            </svg>
                        </div>
                    </li>
                    <li class="navbar-user__item" title="Friends" data-type="friend">
                        <div class="navbar-user__title">
                            <svg class="navbar-user__title--svg">
                                <use xlink:href="svg/sprite.svg#icon-user-friend"></use>
                            </svg>
                        </div>
                    </li>
                    <li class="navbar-user__item" title="Request Sent" data-type="request-sent">
                        <div class="navbar-user__title">
                            <svg class="navbar-user__title--svg">
                                <use xlink:href="svg/sprite.svg#icon-request-sent"></use>
                            </svg>
                        </div>
                    </li>
                    <li class="navbar-user__item" title="Request Received" data-type="request-receive">
                        <div class="navbar-user__title">
                            <svg class="navbar-user__title--svg">
                                <use xlink:href="svg/sprite.svg#icon-request-receive"></use>
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="navbar-user__photo">
                <img src="${user.photo}" alt=" " class="navbar-user__photo--img"/>
            </div>
        </div>
    `;
    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};
