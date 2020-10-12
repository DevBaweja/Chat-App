import { elements, select } from '../../utils/base.util';

export const renderSetting = () => {
    let markup = `
<div class="chat-profile-setting">
    <div class="chat-profile-setting__heading">
        Settings
    </div>
    <ul class="chat-profile-setting__list">
        <li class="chat-profile-setting__item" data-type="color">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg">
                    <use xlink:href="svg/sprite.svg#icon-setting-color"></use>
                </svg>
                <span class="chat-profile-setting__span">
                    Color
                </span>
            </div>
            <div class="chat-profile-setting__content">
                Life is like a rainbow
            </div>
        </li>
        <li class="chat-profile-setting__item">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg">
                    <use xlink:href="svg/sprite.svg#icon-setting-wallpaper"></use>
                </svg>
                <span class="chat-profile-setting__span">
                    Wallpaper
                </span>
            </div>
            <div class="chat-profile-setting__content">
                Customize your wallpaper like pro
            </div>
        </li>
        <li class="chat-profile-setting__item">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg">
                    <use xlink:href="svg/sprite.svg#icon-setting-privacy"></use>
                </svg>
                <span class="chat-profile-setting__span">
                    Privacy
                </span>
            </div>
            <div class="chat-profile-setting__content">
               Everything doesn't need to be talked about
            </div>
        </li>
        <li class="chat-profile-setting__item">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg chat-profile-setting__svg--password">
                    <use xlink:href="svg/sprite.svg#icon-setting-password"></use>
                </svg>
                <span class="chat-profile-setting__span">
                    Password
                </span>
            </div>
            <div class="chat-profile-setting__content">
                Love is secret password to every soul
            </div>
        </li>
        <li class="chat-profile-setting__item">
            <div class="chat-profile-setting__title chat-profile-setting__title--delete">
                <svg class="chat-profile-setting__svg chat-profile-setting__svg--delete">
                    <use xlink:href="svg/sprite.svg#icon-setting-delete"></use>
                </svg>
                <span class="chat-profile-setting__span">
                    Delete Account
                </span>
            </div>
            <div class="chat-profile-setting__content">
                We will miss you! You can always activate again.
            </div>
        </li>
    </ul>
</div>
    `;
    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
