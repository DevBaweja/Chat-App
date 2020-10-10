import { elements, select } from '../../utils/base.util';
import faker from 'faker';

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
