import { elementStrings, elementClasses, elements, select, selectAll } from '../utils/base.util';

export const clearChatPanel = () => (select(elements.ChatPanel).innerHTML = '');

export const addSelected = item => item.classList.add(elementClasses.selected.chatPanel.recentChat);

export const removeSelected = () => {
    const items = selectAll(elementStrings.chatPanel.recentChat.item);
    items.forEach(item => {
        item.classList.remove(elementClasses.selected.chatPanel.recentChat);
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
        className: 'empty',
    };

    // No users
    const markup = `
    <div class="chat-panel-empty">
        ${renderTitle(title)}
        <div class="chat-panel-empty__dimmer">
        ${data.map(() => renderEmptyGroup()).join('')}
        </div>
    </div>
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};

// User Title
export const renderTitle = ({ label, count, className }) => `
    <div class="chat-panel-${className}__title">
        <span class="chat-panel-${className}__label">${label}</span> 
        <span class="chat-panel-${className}__count">(${count})</span>
    </div>
`;
