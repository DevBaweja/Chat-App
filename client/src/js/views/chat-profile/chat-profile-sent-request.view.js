import { elements, select } from '../../utils/base.util';
import faker from 'faker';

const renderSentRequestGroup = ({ type, label, id, value, isInput }) => `
<div class="chat-profile__sent-request-about--group">
    <div class="chat-profile__sent-request-about--edit">
        <label for="${type}" class="chat-profile__sent-request-about--label"> ${label} </label>
    </div>
    ${
        isInput
            ? ` <input type="text" id="${id}" class="chat-profile__sent-request-about--input" value="${value}" disabled />`
            : `<textarea id="${id}" class="chat-profile__sent-request-about--input" rows="4" disabled>${value}</textarea>`
    }
   
</div>
`;

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
                ${data.map(item => renderSentRequestGroup(item)).join('')}
            </div>
        </form>
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
