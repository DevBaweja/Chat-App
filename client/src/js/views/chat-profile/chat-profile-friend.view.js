import { elements, select } from '../../utils/base.util';
import faker from 'faker';

export const renderFriend = () => {
    const name = faker.name.findName();
    const markup = `
    <div class="chat-profile__friend">
        <form class="chat-profile__friend--form">
            <div class="chat-profile__friend-pic">
                <img src="img/avatar/female.png" class="chat-profile__friend-pic--img" alt="" />
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
