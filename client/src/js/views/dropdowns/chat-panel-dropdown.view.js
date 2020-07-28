import { renderDropdowns } from '../dropdowns.view';

export const renderChatPanelDropdown = () => {
    const markup = `
    <!-- Chat Panel Dropdown -->
<div class="chat-panel-user__dropdown">
    <ul class="chat-panel-user__dropdown--list">
        <li class="chat-panel-user__dropdown--item">
            <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-dot">
                <use xlink:href="svg/sprite.svg#icon-dot-single--notification"></use>
            </svg>
            <span class="chat-panel-user__dropdown--span">Mark as unread</span>
        </li>

        <li class="chat-panel-user__dropdown--item">
            <!-- pin or unpin -->
            <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-pin">
                <use xlink:href="svg/sprite.svg#icon-unpin-chat"></use>
            </svg>
            <span class="chat-panel-user__dropdown--span">Pin Chat</span>
        </li>
        <li class="chat-panel-user__dropdown--item">
            <!-- mute or unmute -->
            <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-mute">
                <use xlink:href="svg/sprite.svg#icon-unmute-notification"></use>
            </svg>
            <span class="chat-panel-user__dropdown--span">Mute Notifications</span>
        </li>
        <li class="chat-panel-user__dropdown--item">
            <!-- star-fill or star-empty -->
            <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-star">
                <use xlink:href="svg/sprite.svg#icon-star-empty"></use>
            </svg>
            <span class="chat-panel-user__dropdown--span">Add to Favourites</span>
        </li>
        <li class="chat-panel-user__dropdown--item">
            <svg class="chat-panel-user__dropdown--svg chat-panel-user__dropdown--svg-delete">
                <use xlink:href="svg/sprite.svg#icon-delete"></use>
            </svg>
            <span class="chat-panel-user__dropdown--span chat-panel-user__dropdown--span-delete">Delete Chat</span>
        </li>
    </ul>
</div>
`;
    renderDropdowns(markup);
};
