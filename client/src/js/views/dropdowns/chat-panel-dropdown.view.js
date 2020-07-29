import { renderDropdowns, assignCoordinate } from './dropdowns.view';
import { elementStrings } from '../../utils/base.util';

export const renderChatPanelDropdown = ({ coordinate }) => {
    // Rendering Dropdown
    const markup = `
    <!-- Chat Panel Dropdown -->
    <div class="chat-panel-user__dropdown">
        <ul class="chat-panel-user__dropdown--list">
            <li class="chat-panel-user__dropdown--item" data-type="mark-read">
                <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-dot">
                    <use xlink:href="svg/sprite.svg#icon-dot-single--notification"></use>
                </svg>
                <span class="chat-panel-user__dropdown--span">Mark as read</span>
            </li>

            <li class="chat-panel-user__dropdown--item" data-type="pin-chat">
                <!-- pin or unpin -->
                <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-pin">
                    <use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
                </svg>
                <span class="chat-panel-user__dropdown--span">Pin Chat</span>
            </li>
            <li class="chat-panel-user__dropdown--item" data-type="mute-notification">
                <!-- mute or unmute -->
                <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-unmute">
                    <use xlink:href="svg/sprite.svg#icon-unmute-notification"></use>
                </svg>
                <span class="chat-panel-user__dropdown--span">Mute Notifications</span>
            </li>
            <li class="chat-panel-user__dropdown--item" data-type="add-favorite">
                <!-- star-fill or star-empty -->
                <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-star">
                    <use xlink:href="svg/sprite.svg#icon-star-empty"></use>
                </svg>
                <span class="chat-panel-user__dropdown--span">Add to Favourites</span>
            </li>
            <li class="chat-panel-user__dropdown--item" data-type="delete-chat">
                <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-delete">
                    <use xlink:href="svg/sprite.svg#icon-delete"></use>
                </svg>
                <span class="chat-panel-user__dropdown--span chat-panel-user__dropdown--span-delete">Delete Chat</span>
            </li>
        </ul>
    </div>
`;
    renderDropdowns(markup);

    assignCoordinate(elementStrings.dropdowns.chatPanelDropdown, coordinate);

    document.querySelector(elementStrings.dropdowns.chatPanelDropdown).style.setProperty('transition', 'all 1s');
    document.querySelector(elementStrings.dropdowns.chatPanelDropdown).style.setProperty('transform', 'scale(1)');
};
