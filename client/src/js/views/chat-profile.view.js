import { elements } from '../utils/base.util';
import faker from 'faker';

export const clearChatProfile = () => (document.querySelector(elements.ChatProfile).innerHTML = '');

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

    document.querySelector(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
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

    document.querySelector(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const renderUser = () => {
    const name = faker.name.findName();
    const markup = `
    <div class="chat-profile__user">
    <form class="chat-profile__user--form">
        <div class="chat-profile__user-pic">
            <img src="img//avatar/boy.png" class="chat-profile__user-pic--img" alt="" />
            <div class="chat-profile__user-pic--upload">
                <label class="chat-profile__user-pic--label" for="photo" title="Change profile pic">
                    <svg class="chat-profile__user-pic--svg">
                        <use xlink:href="svg/sprite.svg#icon-camera"></use>
                    </svg>
                </label>
                <input class="chat-profile__user-pic--input" type="file" id="photo" name="photo" />
            </div>
            <div class="chat-profile__user-pic--name">${name}</div>
        </div>

        <div class="chat-profile__user-about">
            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="name" class="chat-profile__user-about--label"> Name </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Name">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="name" class="chat-profile__user-about--input" value="${name}" />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="email" class="chat-profile__user-about--label"> Email </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Email">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="email" class="chat-profile__user-about--input" value="${faker.internet.email()}" disabled />
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

    document.querySelector(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const renderSetting = () => {
    const markup = `
    `;

    document.querySelector(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
