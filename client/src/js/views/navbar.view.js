import { elements, elementStrings, elementClasses, select, selectAll } from '../utils/base.util';

export const clearNavbar = () => (select(elements.Navbar).innerHTML = '');

export const replaceClass = (removeClass, addClass) => {
    // Removing class
    select(elements.Navbar).classList.remove(removeClass);
    // Adding class
    select(elements.Navbar).classList.add(addClass);
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

// Ideal
export const renderIdeal = () => {
    const markup = `
    <div class="navbar-ideal">
        ${renderLogo('ideal')}
    </div>
    `;

    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);
};

export const removeSelected = () => {
    const items = selectAll(elementStrings.navbar.user.item);
    items.forEach(item => {
        item.classList.remove(elementClasses.selected.navbar.item);
    });
};
export const addSelected = item => {
    item.classList.add(elementClasses.selected.navbar.item);
};

const renderSelected = type => {
    const itemElement = select(`${elementStrings.navbar.user.item}[data-type="${type}"]`);
    if (!itemElement) return;

    addSelected(itemElement);
};

const renderUserItem = ({ type, title, svg }) => `
<li class="navbar-user__item" title="${title}" data-type="${type}">
    <div class="navbar-user__title">
        <svg class="navbar-user__title--svg">
            <use xlink:href="svg/sprite.svg#icon-${svg}"></use>
        </svg>
    </div>
</li>
`;

// User
export const renderUser = user => {
    // Data
    const data = [
        { type: 'active-now', title: 'Active Now', svg: 'active-now' },
        { type: 'recent-chat', title: 'Recent Chats', svg: 'recent-chat' },
        { type: 'search', title: 'Search', svg: 'user-search' },
        { type: 'friend', title: 'Friends', svg: 'user-friend' },
        { type: 'request-sent', title: 'Request Sent', svg: 'request-sent' },
        { type: 'request-receive', title: 'Request Received', svg: 'request-receive' },
    ];
    const { photo } = user;

    const markup = `
        <div class="navbar-user">
            ${renderLogo('user')}
            <div class="navbar-user__content">
                <ul class="navbar-user__list">
                    ${data.map(item => renderUserItem(item)).join('')}
                </ul>
            </div>
            <div class="navbar-user__photo">
                <img src="${photo}" alt=" " class="navbar-user__photo--img"/>
            </div>
        </div>
    `;
    select(elements.Navbar).insertAdjacentHTML('beforeend', markup);

    renderSelected('recent-chat');
};
