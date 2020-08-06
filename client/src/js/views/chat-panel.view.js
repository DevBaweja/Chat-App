import { elementStrings, elementClasses, elements, select,selectAll } from '../utils/base.util';
import faker from 'faker';

export const clearChatPanel = () => (select(elements.ChatPanel).innerHTML = '');

export const getItem = event => {
    const item = event.target.closest(elementStrings.items.chatPanelItem);
    return item;
};
export const getUser = item => {
    const { user } = item.dataset;
    return user;
};
export const addSelected = item => {
    item.classList.add(elementClasses.selected.chatPanelItem);
};
export const removeSelected = () => {
    const items = selectAll(elementStrings.items.chatPanelItem);
    items.forEach(item => {
        item.classList.remove(elementClasses.selected.chatPanelItem);
    });
};
export const renderIdeal = () => {
    const chat_panel_ideal = () => `
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

    const markup = `
    <div class="chat-panel-ideal">
        <div class="chat-panel-ideal__title"></div>
        <div class="chat-panel-ideal__dimmer">
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
            ${chat_panel_ideal()}
        </div>
    </div>
`;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};

export const renderEmpty = () => {
    const chat_panel_empty = () => `
    <div class="chat-panel-null__dimmer--item">
        <div class="chat-panel-null__dimmer--circle">
            <svg viewBox="0 0 50 50">
                <circle></circle>
            </svg>
        </div>
        <div class="chat-panel-null__dimmer--rect">
            <svg viewBox="0 0 180 40">
                <rect></rect>
            </svg>
        </div>
    </div>
    `;

    // No users
    const markup = `
    <div class="chat-panel-null">
        <div class="chat-panel-user__title">
            Active Now <span class="chat-panel-user__count" title="#">(0)</span>
            <svg class="chat-panel-user__reload" title="Reload">
                <use xlink:href="svg/sprite.svg#icon-spinner"></use>
            </svg>
        </div>
        <div class="chat-panel-user__dimmer">
            ${chat_panel_empty()}
            ${chat_panel_empty()}
            ${chat_panel_empty()}
            ${chat_panel_empty()}
            ${chat_panel_empty()}
            ${chat_panel_empty()}
            ${chat_panel_empty()}
            ${chat_panel_empty()}
        </div>
    </div>
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};

export const renderRecentChat = () => {
    const chat_panel__item = () => ` 
    <li class="chat-panel-user__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
    <div class="chat-panel-user__link" role="button">
        <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
        <!-- User Info -->
        <div class="chat-panel-user__info">
            <span class="chat-panel-user__username">${faker.name.findName()}</span>
            <div class="chat-panel-user__settings">
               
            </div>
        </div>
        
        <!-- OPTIONS -->
        <svg class="chat-panel-user__option chat-panel__drop title="Chat Options">
            <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
        </svg>
        <!-- ACTIVE -->
        <svg class="chat-panel-user__state chat-panel-user__state--inactive">
            <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
        </svg>
        
    </div>
    </li>
    `;
    const markup = `
    <div class="chat-panel-user">                    
        <div class="chat-panel-user__title">
            Active Now <span class="chat-panel-user__count">(10)</span>
            <svg class="chat-panel-user__reload">
                <use xlink:href="svg/sprite.svg#icon-spinner"></use>
            </svg>
        </div>
        <ul class="chat-panel-user__list">
            ${chat_panel__item()}
            <li class="chat-panel-user__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
    <div class="chat-panel-user__link" role="button">
        <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
        <!-- User Info -->
        <div class="chat-panel-user__info">
            <span class="chat-panel-user__username">${faker.name.findName()}</span>
            <div class="chat-panel-user__settings">
               
            </div>
        </div>
        <!-- ACTIVE -->
        <svg class="chat-panel-user__state chat-panel-user__state--inactive">
            <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
        </svg>

        <!-- OPTION -->
        <svg class="chat-panel-user__option chat-panel__drop " title="Chat Options">
            <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
        </svg>
       
       
        
    </div>
    </li>
            ${chat_panel__item()}

            <!-- Settings -->
            <li class="chat-panel-user__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
            <div class="chat-panel-user__link" role="button">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                <svg class="chat-panel-user__settings--icons icon-dot-single--notification" title="Unread Messages">
                <use xlink:href="svg/sprite.svg#icon-dot-single--notification"></use>
                </svg>
                <svg class="chat-panel-user__settings--icons icon-pin-chat" title="Chat Pinned">
                <use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
                </svg>
                <svg class="chat-panel-user__settings--icons icon-mute-notification" title="Chat Muted">
                <use xlink:href="svg/sprite.svg#icon-mute-notification"></use>
                </svg> 
               
                </div>
            </div>
                <svg class="chat-panel-user__option chat-panel__drop" title="Chat Options">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--active">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}

            <!-- Selected -->
            <li class="chat-panel-user__item chat-panel-user__item--selected" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
            <div class="chat-panel-user__link" role="button">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-user__option chat-panel__drop" title="Chat Options">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--inactive">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}
            <!-- Active -->
            <li class="chat-panel-user__item chat-panel-user__item--selected" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
            <div class="chat-panel-user__link" role="button">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-user__option chat-panel__drop" title="Chat Options">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--active">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}
            ${chat_panel__item()}
        </ul>
    </div>

    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
