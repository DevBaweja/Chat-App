import { elements, select } from '../../utils/base.util';
import { renderAboutGroup } from '../chat-profile.view';
import faker from 'faker';

export const renderSentRequest = () => {
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

    const className = 'sent-request';

    const markup = `
    <div class="chat-profile__sent-request">
        <form class="chat-profile__sent-request--form">
            <div class="chat-profile__sent-request-content">
                <div class="chat-profile__sent-request-content--pic">
                <img src="img/avatar/girl.png" class="chat-profile__sent-request-content--img" alt="" />
                <div class="chat-profile__sent-request-content--icon" title="Cancel Request">
                    <svg class="chat-profile__sent-request-content--svg">
                        <use xlink:href="svg/sprite.svg#icon-cancel-request"></use>
                    </svg>
                </div>
            </div>
                <div class="chat-profile__sent-request-content--name">${name}</div>
            </div>

            <div class="chat-profile__sent-request-about">
                ${data.map(item => renderAboutGroup(item, className)).join('')}
            </div>
        </form>
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
