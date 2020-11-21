import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderAboutGroup } from '../chat-profile.view';

export const renderStranger = () => {
    // ! For Development
    const name = faker.name.findName();
    const email = faker.internet.email();
    const bio = faker.hacker.phrase();
    // Data
    const data = [
        { type: 'name', label: 'Name', id: 'name', value: name, isInput: true },
        { type: 'email', label: 'Email', id: 'email', value: email, isInput: true },
        { type: 'bio', label: 'Bio', id: 'bio', value: bio, isInput: false },
    ];
    const className = 'stranger';

    const markup = `
    <div class="chat-profile__stranger">
        <form class="chat-profile__stranger--form">
            <div class="chat-profile__stranger-content">
                <div class="chat-profile__stranger-content--pic">
                <img src="img/avatar/girl.png" class="chat-profile__stranger-content--img" alt="" />
                <div class="chat-profile__stranger-content--icon" title="Send Request">
                    <svg class="chat-profile__stranger-content--svg">
                        <use xlink:href="svg/sprite.svg#icon-send-request"></use>
                    </svg>
                </div>
            </div>
                <div class="chat-profile__stranger-content--name">${name}</div>
            </div>

            <div class="chat-profile__stranger-about">
                ${data.map(item => renderAboutGroup(item, className)).join('')}
            </div>
        </form>
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
