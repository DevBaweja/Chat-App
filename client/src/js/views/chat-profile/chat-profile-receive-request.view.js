import { elements, select } from '../../utils/base.util';
import { renderAboutGroup } from '../chat-profile.view';
import faker from 'faker';

const renderActionIcon = ({ type, title }, className) => `
<div class="chat-profile__${className}-content--icon chat-profile__${className}-content--icon-${type}" title="${title}">
    <svg class="chat-profile__${className}-content--svg">
        <use xlink:href="svg/sprite.svg#icon-${type}"></use>
    </svg>
</div>
`;

export const renderReceiveRequest = () => {
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
    const className = 'receive-request';
    const action = [
        {
            type: 'accept-request',
            title: 'Accept Request',
        },
        {
            type: 'decline-request',
            title: 'Decline Request',
        },
    ];

    const markup = `
    <div class="chat-profile__receive-request">
        <form class="chat-profile__receive-request--form">
            <div class="chat-profile__receive-request-content">
                <img src="img/avatar/female.png" class="chat-profile__receive-request-content--img" alt="" />
                <div class="chat-profile__receive-request-content--name">${name}</div>
                <div class="chat-profile__receive-request-content--container"> 
                    ${action.map(item => renderActionIcon(item, className)).join('')}
                </div>
            </div>

            <div class="chat-profile__receive-request-about">
                ${data.map(item => renderAboutGroup(item, className)).join('')}
            </div>
        </form>
    </div>`;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
