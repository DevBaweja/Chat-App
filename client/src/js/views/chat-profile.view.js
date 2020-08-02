import { elements } from '../utils/base.util';
import faker from 'faker';

export const clearChatProfile = () => (elements.ChatProfile.innerHTML = '');

export const renderMyProfile = () => {
    const name = faker.name.findName();
    const markup = `
    <div class="chat-profile__user">
    <form class="chat-profile__user--form">
        <div class="chat-profile__user-pic">
            <img src="img//avatar/boy.png" class="chat-profile__user-pic--img" alt="" />
            <div class="chat-profile__user-pic--upload">
                <label class="chat-profile__user-pic--label" for="photo">
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
                    <svg class="chat-profile__user-about--svg">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="name" class="chat-profile__user-about--input" value="${name}" />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="email" class="chat-profile__user-about--label"> Email </label>
                    <svg class="chat-profile__user-about--svg">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="email" class="chat-profile__user-about--input" value="${faker.internet.email()}" disabled />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="bio" class="chat-profile__user-about--label"> Bio </label>
                    <svg class="chat-profile__user-about--svg">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>

                <textarea id="bio" class="chat-profile__user-about--input" rows="4" disabled>${faker.hacker.phrase()}</textarea>
            </div>
        </div>
        <!--
        <div class="chat-profile__user-save">
                <button class="chat-profile__user--update">Save profile</button>
        </div>
        -->
    </form>
</div>

    `;

    elements.ChatProfile.insertAdjacentHTML('beforeend', markup);
};
