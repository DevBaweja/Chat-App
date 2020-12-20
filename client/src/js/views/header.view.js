import { elements, select, capitalize, getReverseTheme } from '../utils/base.util';

export const clearHeader = () => (select(elements.Header).innerHTML = '');

export const renderTitle = () => {
    const markup = `
    <div class="title">
        #ChatFuel
    </div>
    `;

    select(elements.Header).insertAdjacentHTML('beforeend', markup);
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

    select(elements.Header).insertAdjacentHTML('beforeend', markup);
};

const renderUserItem = ({ type, text }) => `
<li class="about-me__item" title="${text}" data-type="${type}">
    <div class="about-me__icon">
        <svg class="about-me__svg about-me__svg--${type}">
            <use xlink:href="svg/sprite.svg#icon-${type}"></use>
        </svg>
    </div>
</li>
`;

export const renderUser = ({ user, theme }) => {
    // Data
    const { photo, name } = user;
    const { mode } = theme;
    const groups = [
        {
            type: 'theme',
            text: `${capitalize(getReverseTheme(mode))} Theme`,
        },
        {
            type: 'setting',
            text: 'Settings',
        },
        {
            type: 'activity',
            text: 'Activities',
        },
        {
            type: 'logout',
            text: 'Log out',
        },
    ];
    // Markup
    const markup = `
    <div class="about-me">

        <ul class="about-me__list">   
            ${groups.map(item => renderUserItem(item)).join('')}             
        </ul>

        <div class="about-me__link about-me__drop" title="My Profile">
            <img src="${photo}" alt=" " class="about-me__photo"/>
            
           <!--  <span class="about-me__name">${name}</span> -->
        </div>
    </div>
    `;
    select(elements.Header).insertAdjacentHTML('beforeend', markup);
};
