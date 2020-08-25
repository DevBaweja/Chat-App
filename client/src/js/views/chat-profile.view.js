import { elements, select } from '../utils/base.util';
import faker from 'faker';

export const clearChatProfile = () => (select(elements.ChatProfile).innerHTML = '');

export const renderStranger = () => {
    const name = faker.name.findName();
    const markup = `
    <div class="chat-profile__stranger">
        <form class="chat-profile__stranger--form">
            <div class="chat-profile__stranger-pic">
                <img src="img/avatar/girl.png" class="chat-profile__stranger-pic--img" alt="" />
                <div class="chat-profile__stranger-add--friend" title="Add Friend">
                    <svg class="chat-profile__stranger-add--svg">
                        <use xlink:href="svg/sprite.svg#icon-user-plus"></use>
                    </svg>
                </div>
                <div class="chat-profile__stranger-pic--name">${name}</div>
            </div>

            <div class="chat-profile__stranger-about">
                <div class="chat-profile__stranger-about--group">
                    <div class="chat-profile__stranger-about--edit">
                        <label for="name" class="chat-profile__stranger-about--label"> Name </label>
                    </div>
                    <input type="text" id="name" class="chat-profile__stranger-about--input" value="${name}" disabled />
                </div>

                <div class="chat-profile__stranger-about--group">
                    <div class="chat-profile__stranger-about--edit">
                        <label for="email" class="chat-profile__stranger-about--label"> Email </label>
                    </div>
                    <input type="text" id="email" class="chat-profile__stranger-about--input" value="${faker.internet.email()}" disabled />
                </div>

                <div class="chat-profile__stranger-about--group">
                    <div class="chat-profile__stranger-about--edit">
                        <label for="bio" class="chat-profile__stranger-about--label"> Bio </label>
                    </div>

                    <textarea id="bio" class="chat-profile__stranger-about--input" rows="4" disabled>${faker.hacker.phrase()}</textarea>
                </div>
            </div>
        </form>
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const renderFriend = () => {
    const name = faker.name.findName();
    const markup = `
    <div class="chat-profile__friend">
        <form class="chat-profile__friend--form">
            <div class="chat-profile__friend-pic">
                <img src="img/avatar/women.png" class="chat-profile__friend-pic--img" alt="" />
                <div class="chat-profile__friend-remove--stranger" title="Remove Friend">
                    <svg class="chat-profile__friend-remove--svg">
                        <use xlink:href="svg/sprite.svg#icon-user-minus"></use>
                    </svg>
                </div>

                <div class="chat-profile__friend-pic--name">${name}</div>
            </div>

            <div class="chat-profile__friend-about">
                <div class="chat-profile__friend-about--group">
                    <div class="chat-profile__friend-about--edit">
                        <label for="name" class="chat-profile__friend-about--label"> Name </label>
                    </div>
                    <input type="text" id="name" class="chat-profile__friend-about--input" value="${name}" disabled />
                </div>

                <div class="chat-profile__friend-about--group">
                    <div class="chat-profile__friend-about--edit">
                        <label for="email" class="chat-profile__friend-about--label"> Email </label>
                    </div>
                    <input type="text" id="email" class="chat-profile__friend-about--input" value="${faker.internet.email()}" disabled />
                </div>

                <div class="chat-profile__friend-about--group">
                    <div class="chat-profile__friend-about--edit">
                        <label for="bio" class="chat-profile__friend-about--label"> Bio </label>
                    </div>

                    <textarea id="bio" class="chat-profile__friend-about--input" rows="4" disabled>${faker.hacker.phrase()}</textarea>
                </div>
            </div>
        </form>
    </div>`;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const renderUser = user => {
    const markup = `
    <div class="chat-profile__user">
    <form class="chat-profile__user--form">
        <div class="chat-profile__user-pic">
            <img src="${user.photo}" class="chat-profile__user-pic--img" alt="" />
            <div class="chat-profile__user-pic--upload">
                <label class="chat-profile__user-pic--label" for="photo" title="Change profile pic">
                    <svg class="chat-profile__user-pic--svg">
                        <use xlink:href="svg/sprite.svg#icon-camera"></use>
                    </svg>
                </label>
                <input class="chat-profile__user-pic--input" type="file" id="photo" name="photo" />
            </div>
            <div class="chat-profile__user-pic--name">${user.name}</div>
        </div>
        <div class="chat-profile__user-avatar">
            <div class="chat-profile__user-avatar--label">
                Choose your avatar
            </div>
            <div class="chat-profile__user-avatar--container">
                <div class="chat-profile__user-avatar--group" title="Boy">
                    <img src="img/avatar/boy.png" alt="" class="chat-profile__user-avatar--img"/>
                    <div class="chat-profile__user-avatar--icon chat-profile__user-avatar--icon-selected">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-profile__user-avatar--group" title="Girl">
                    <img src="img/avatar/girl.png" alt="" class="chat-profile__user-avatar--img"/>
                    <div class="chat-profile__user-avatar--icon">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-profile__user-avatar--group" title="Men">
                    <img src="img/avatar/male.png" alt="" class="chat-profile__user-avatar--img"/> 
                    <div class="chat-profile__user-avatar--icon">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-profile__user-avatar--group" title="Women">
                    <img src="img/avatar/female.png" alt="" class="chat-profile__user-avatar--img"/> 
                    <div class="chat-profile__user-avatar--icon">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-profile__user-about">
            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="name" class="chat-profile__user-about--label"> Name </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Name">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="name" class="chat-profile__user-about--input" value="${user.name}" />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="email" class="chat-profile__user-about--label"> Email </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Email">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="email" class="chat-profile__user-about--input" value="${user.email}" disabled />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="bio" class="chat-profile__user-about--label"> Bio </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Bio">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>

                <textarea id="bio" class="chat-profile__user-about--input" rows="4" disabled>${faker.hacker.phrase()}</textarea>
            </div>
        </div>
        <div class="chat-profile__user-save" title="Save profile">
            <button class="chat-profile__user--update">Save profile</button>
        </div>
    </form>
</div>

    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

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
