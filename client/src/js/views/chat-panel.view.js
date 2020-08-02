import { elementStrings, elements } from '../utils/base.util';
import faker from 'faker';

export const clearChatPanel = () => (elements.ChatPanel.innerHTML = '');

export const getUserId = event => {
    const item = event.target.closest(elementStrings.items.chatPanelItem);
    const { userid: userId } = item.dataset;
    return userId;
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
    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);
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
            Active Now <span class="chat-panel-user__count">(0)</span>
            <svg class="chat-panel-user__reload">
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

    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);
};

export const renderRecentChat = () => {
    const chat_panel__item = () => ` 
    <li class="chat-panel-user__item" data-userId="1234">
    <div class="chat-panel-user__link" role="button">
        <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
        <!-- User Info -->
        <div class="chat-panel-user__info">
            <span class="chat-panel-user__username">${faker.name.findName()}</span>
            <div class="chat-panel-user__settings">
               
            </div>
        </div>
        
        <!-- OPTIONS -->
        <svg class="chat-panel-user__option chat-panel__drop">
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
            <li class="chat-panel-user__item">
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
        <svg class="chat-panel-user__option ">
            <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
        </svg>
       
       
        
    </div>
    </li>
            ${chat_panel__item()}

            <!-- Settings -->
            <li class="chat-panel-user__item">
            <div class="chat-panel-user__link" role="button">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                <svg class="chat-panel-user__settings--icons icon-dot-single--notification">
                <use xlink:href="svg/sprite.svg#icon-dot-single--notification"></use>
                </svg>
                <svg class="chat-panel-user__settings--icons icon-pin-chat">
                <use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
                </svg>
                <svg class="chat-panel-user__settings--icons icon-mute-notification">
                <use xlink:href="svg/sprite.svg#icon-mute-notification"></use>
                </svg> 
               
                </div>
            </div>
                <svg class="chat-panel-user__option">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--active">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}

            <!-- Selected -->
            <li class="chat-panel-user__item chat-panel-user__item--selected">
            <div class="chat-panel-user__link" role="button">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-user__option">
                    <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                </svg>
                <svg class="chat-panel-user__state chat-panel-user__state--inactive">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--active"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}
            <!-- Active -->
            <li class="chat-panel-user__item chat-panel-user__item--selected">
            <div class="chat-panel-user__link" role="button">
                <img src="${faker.image.avatar()}" alt="photo" class="chat-panel-user__userphoto" />
                <div class="chat-panel-user__info">
                <span class="chat-panel-user__username">${faker.name.findName()}</span>
                <div class="chat-panel-user__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-user__option">
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
    elements.ChatPanel.insertAdjacentHTML('beforeend', markup);
};
