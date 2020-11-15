import state from '../state';
import { elements, select } from '../utils/base.util';

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

const renderMenuItem = ({ type, title }) => `
<li class="menu__item">
    <div class="menu__link" role="button" data-type="${type}" title="${title}">
        ${title}
    </div>
</li>
`;
export const renderUser = user => {
    // Data
    const { photo, name } = user;

    // Markup
    const markup = `
    <div class="about-me">
        <div class="about-me__link about-me__drop" title="User Options">
            <img src="${photo}" alt=" " class="about-me__photo"/>
            
            <span class="about-me__name">${name}</span>
        </div>
    </div>
    `;
    select(elements.Header).insertAdjacentHTML('beforeend', markup);
};
