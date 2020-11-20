import { elements, select } from '../../utils/base.util';
import faker from 'faker';

const renderStrangerGroup = ({ type, label, id, value, isInput }) => `
<div class="chat-profile__stranger-about--group">
    <div class="chat-profile__stranger-about--edit">
        <label for="${type}" class="chat-profile__stranger-about--label"> ${label} </label>
    </div>
    ${
        isInput
            ? ` <input type="text" id="${id}" class="chat-profile__stranger-about--input" value="${value}" disabled />`
            : `<textarea id="${id}" class="chat-profile__stranger-about--input" rows="4" disabled>${value}</textarea>`
    }
   
</div>
`;

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
                ${data.map(item => renderStrangerGroup(item)).join('')}
            </div>
        </form>
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
