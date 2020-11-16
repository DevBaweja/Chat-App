import faker from 'faker';
import { elements, select } from '../../utils/base.util';

export const renderRecentChat = () => {
    const chat_panel__item = () => ` 
    <li class="chat-panel-recent-chat__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
    <div class="chat-panel-recent-chat__link" role="button">
        <img src="${faker.image.avatar()}" alt="" class="chat-panel-recent-chat__photo" />
        <!-- User Info -->
        <div class="chat-panel-recent-chat__info">
            <span class="chat-panel-recent-chat__name">${faker.name.findName()}</span>
            <div class="chat-panel-recent-chat__settings">
               
            </div>
        </div>
        
        <!-- OPTIONS -->
        <svg class="chat-panel-recent-chat__option chat-panel__drop" title="Chat Options">
            <use xlink:href="svg/sprite.svg#icon-down"></use>
        </svg>
        <!-- ACTIVE -->
        <svg class="chat-panel-recent-chat__state chat-panel-recent-chat__state--inactive">
            <use xlink:href="svg/sprite.svg#icon-dot"></use>
        </svg>
        
    </div>
    </li>
    `;
    const markup = `
    <div class="chat-panel-recent-chat">                    
        <div class="chat-panel-recent-chat__title">
           <span class="chat-panel-recent-chat__label">Recent Chats</span> 
           <span class="chat-panel-recent-chat__count">(10)</span>
        </div>
        <ul class="chat-panel-recent-chat__list">
            ${chat_panel__item()}
            <li class="chat-panel-recent-chat__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
    <div class="chat-panel-recent-chat__link" role="button">
        <img src="${faker.image.avatar()}" alt="" class="chat-panel-recent-chat__photo" />
        <!-- USER INFO -->
        <div class="chat-panel-recent-chat__info">
            <span class="chat-panel-recent-chat__name">${faker.name.findName()}</span>
            <div class="chat-panel-recent-chat__settings">
               
            </div>
        </div>
        <!-- ACTIVE -->
        <svg class="chat-panel-recent-chat__state chat-panel-recent-chat__state--inactive">
            <use xlink:href="svg/sprite.svg#icon-dot"></use>
        </svg>

        <!-- OPTION -->
        <svg class="chat-panel-recent-chat__option chat-panel__drop" title="Chat Options">
            <use xlink:href="svg/sprite.svg#icon-down"></use>
        </svg>
       
       
        
    </div>
    </li>
            ${chat_panel__item()}

            <!-- Settings -->
            <li class="chat-panel-recent-chat__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
            <div class="chat-panel-recent-chat__link" role="button">
                <img src="${faker.image.avatar()}" alt="" class="chat-panel-recent-chat__photo" />
                <div class="chat-panel-recent-chat__info">
                <span class="chat-panel-recent-chat__name">${faker.name.findName()}</span>
                <div class="chat-panel-recent-chat__settings">
                <svg class="chat-panel-recent-chat__settings--icons icon-dot-single--notification" title="Unread Messages">
                <use xlink:href="svg/sprite.svg#icon-dot-single--notification"></use>
                </svg>
                <svg class="chat-panel-recent-chat__settings--icons icon-pin-chat" title="Chat Pinned">
                <use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
                </svg>
                <svg class="chat-panel-recent-chat__settings--icons icon-mute-notification" title="Chat Muted">
                <use xlink:href="svg/sprite.svg#icon-mute-notification"></use>
                </svg> 
               
                </div>
            </div>
                <svg class="chat-panel-recent-chat__option chat-panel__drop" title="Chat Options">
                    <use xlink:href="svg/sprite.svg#icon-down"></use>
                </svg>
                <svg class="chat-panel-recent-chat__state chat-panel-recent-chat__state--active">
                    <use xlink:href="svg/sprite.svg#icon-dot"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}

            <!-- Selected -->
            <li class="chat-panel-recent-chat__item chat-panel-recent-chat__item--selected" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
            <div class="chat-panel-recent-chat__link" role="button">
                <img src="${faker.image.avatar()}" alt="" class="chat-panel-recent-chat__photo" />
                <div class="chat-panel-recent-chat__info">
                <span class="chat-panel-recent-chat__name">${faker.name.findName()}</span>
                <div class="chat-panel-recent-chat__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-recent-chat__option chat-panel__drop" title="Chat Options">
                    <use xlink:href="svg/sprite.svg#icon-down"></use>
                </svg>
                <svg class="chat-panel-recent-chat__state chat-panel-recent-chat__state--inactive">
                    <use xlink:href="svg/sprite.svg#icon-dot"></use>
                </svg>
            </div>
            </li>
            ${chat_panel__item()}
            <!-- Active -->
            <li class="chat-panel-recent-chat__item chat-panel-recent-chat__item--selected" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
            <div class="chat-panel-recent-chat__link" role="button">
                <img src="${faker.image.avatar()}" alt="" class="chat-panel-recent-chat__photo" />
                <div class="chat-panel-recent-chat__info">
                <span class="chat-panel-recent-chat__name">${faker.name.findName()}</span>
                <div class="chat-panel-recent-chat__settings">
                    
                </div>
            </div>
                <svg class="chat-panel-recent-chat__option chat-panel__drop" title="Chat Options">
                    <use xlink:href="svg/sprite.svg#icon-down"></use>
                </svg>
                <svg class="chat-panel-recent-chat__state chat-panel-recent-chat__state--active">
                    <use xlink:href="svg/sprite.svg#icon-dot"></use>
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
