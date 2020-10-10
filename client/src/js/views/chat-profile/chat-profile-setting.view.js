import { elements, select } from '../../utils/base.util';

export const renderSetting = () => {
    const markup = `
    <div class="chat-profile__setting">
        <ul class="chat-profile__setting--list">
            <li class="chat-profile__setting--item chat-profile__setting--item-active">
                <div class="chat-profile__setting--title">
                    <span class="chat-profile__setting--span">
                        Appearance
                    </span>
                    <svg class="chat-profile__setting--svg">
                        <use xlink:href="svg/sprite.svg#icon-down"></use>
                    </svg>
                </div>
                <div class="chat-profile__setting--content">
                    Color + Theme
                    <br/>
                    Theme + Wallpaper
                </div>
            </li>
            <li class="chat-profile__setting--item chat-profile__setting--item-active">
                <div class="chat-profile__setting--title">
                    <span class="chat-profile__setting--span">
                        Notifications
                    </span>
                    <svg class="chat-profile__setting--svg">
                        <use xlink:href="svg/sprite.svg#icon-down"></use>
                    </svg>
                </div>
                <div class="chat-profile__setting--content">
                    Sound
                </div>
            </li>
            <li class="chat-profile__setting--item chat-profile__setting--item-active">
                <div class="chat-profile__setting--title">
                    <span class="chat-profile__setting--span">
                        Privacy
                    </span>
                    <svg class="chat-profile__setting--svg">
                        <use xlink:href="svg/sprite.svg#icon-down"></use>
                    </svg>
                </div>
                <div class="chat-profile__setting--content">
                    Status
                    <br/>
                    Bio
                    <br/>
                    Pic
                </div>
            </li>
            <li class="chat-profile__setting--item chat-profile__setting--item-active">
                <div class="chat-profile__setting--title">
                    <span class="chat-profile__setting--span">
                        Account
                    </span>
                    <svg class="chat-profile__setting--svg">
                        <use xlink:href="svg/sprite.svg#icon-down"></use>
                    </svg>
                </div>
                <div class="chat-profile__setting--content">
                    Password
                    <br/>
                    Delete
                </div>
            </li>
        </ul>
    </div>`;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
