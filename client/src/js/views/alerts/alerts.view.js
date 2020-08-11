import { elements, select } from '../../utils/base.util';

export const clearAlerts = () => (select(elements.Alerts).innerHTML = '');

export const renderAlerts = ({ type, text }) => {
    const markup = `
    <div class="alert alert--${type}">
        <svg class="alert__svg alert__svg--${type}">
            <use xlink:href="svg/sprite.svg#icon-${type}"></use>
        </svg>
        <span class="alert__message">${text}</span>
    </div>
    `;
    select(elements.Alerts).insertAdjacentHTML('beforeend', markup);
};
