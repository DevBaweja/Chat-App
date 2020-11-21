import { elements, select, selectAll, getTime, bold, capitalize } from '../utils/base.util';

export const clearChatPanel = () => (select(elements.ChatPanel).innerHTML = '');

// Get Input
export const getInput = className => {
    const inputs = selectAll(className);
    let obj = {};
    inputs.forEach(input => {
        obj[input.id] = input.value;
    });
    return obj;
};

export const addSelected = (itemElement, selectedClass) => itemElement.classList.add(selectedClass);

export const removeSelected = (itemClass, selectedClass) => {
    const items = selectAll(itemClass);
    items.forEach(item => {
        item.classList.remove(selectedClass);
    });
};

const renderIdealGroup = () => `
<div class="chat-panel-ideal__dimmer--item">
    <div class="chat-panel-ideal__dimmer--circle">
        <svg viewBox="0 0 50 50">
            <circle></circle>
        </svg>
    </div>
    <div class="chat-panel-ideal__dimmer--rect">
        <svg viewBox="0 0 180 40">
            <rect></rect>
        </svg>
    </div>
</div>
`;
// Ideal
export const renderIdeal = () => {
    // Data
    const data = new Array(8).fill(0);
    const markup = `
    <div class="chat-panel-ideal">
        <div class="chat-panel-ideal__title"></div>
        <div class="chat-panel-ideal__dimmer">
            ${data.map(() => renderIdealGroup()).join('')}
        </div>
    </div>
`;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};

const renderEmptyGroup = () => `
<div class="chat-panel-empty__dimmer--item">
    <div class="chat-panel-empty__dimmer--circle">
        <svg viewBox="0 0 50 50">
            <circle></circle>
        </svg>
    </div>
    <div class="chat-panel-empty__dimmer--rect">
        <svg viewBox="0 0 180 40">
            <rect></rect>
        </svg>
    </div>
</div>
`;
// Empty
export const renderEmpty = () => {
    // Data
    const data = new Array(8).fill(0);

    const title = {
        label: 'Active Now',
        count: 0,
    };
    const className = 'empty';
    // No users
    const markup = `
    <div class="chat-panel-empty">
        ${renderTitle(title, className)}
        <div class="chat-panel-empty__dimmer">
        ${data.map(() => renderEmptyGroup()).join('')}
        </div>
    </div>
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};

// Title
export const renderTitle = ({ label, count }, className) => `
    <div class="chat-panel-${className}__title">
        <div class="chat-panel-${className}__all">
            <span class="chat-panel-${className}__label">${label}</span> 
            <span class="chat-panel-${className}__count">(${count})</span>
        </div>
    </div>
`;

// Partial Item
export const renderPartialItem = ({ _id, photo, name, createdAt }, className, real) => `
<li class="chat-panel-${className}__item" data-user=${_id} title="${name}" draggable="true">
    <div class="chat-panel-${className}__link" role="button">
        <div class="chat-panel-${className}__visual">
            <img src="${photo}" alt="" class="chat-panel-${className}__photo" />
        </div>
        <!-- USER INFO -->
        <div class="chat-panel-${className}__info">
            <span class="chat-panel-${className}__name">${
    real ? bold(capitalize(real)) + name.slice(real.length) : name
}</span>
            ${createdAt ? `<span class="chat-panel-${className}__time">${getTime(createdAt)} ago</span>` : ''}
        </div>
    </div>
</li>
`;

// Item
export const renderItem = ({ user, photo, name, status, setting }, className) => `
<li class="chat-panel-${className}__item" data-user=${user} title="${name}" draggable="true">
    <div class="chat-panel-${className}__link" role="button">
        <div class="chat-panel-${className}__visual">
            <img src="${photo}" alt="" class="chat-panel-${className}__photo" />
            <!-- STATUS -->
            <svg class="chat-panel-${className}__status chat-panel-${className}__status--${status}" data-type="${status}">
                <use xlink:href="svg/sprite.svg#icon-dot"></use>
            </svg>
        </div>
        <!-- USER INFO -->
        <div class="chat-panel-${className}__info">
            <span class="chat-panel-${className}__name">${name}</span>
            <!-- SETTING -->
            <div class="chat-panel-${className}__setting">
            ${setting
                .map(
                    ({ type }) => `
                <svg class="chat-panel-${className}__setting--icon chat-panel-${className}__setting--icon-${type}">
                    <use xlink:href="svg/sprite.svg#icon-${type}"></use>
                </svg>
            `
                )
                .join('')}
            </div>
        </div>
        
        <!-- OPTION -->
        <svg class="chat-panel-${className}__option chat-panel__drop" title="Chat Options">
            <use xlink:href="svg/sprite.svg#icon-down"></use>
        </svg>
    </div>
</li>
`;
