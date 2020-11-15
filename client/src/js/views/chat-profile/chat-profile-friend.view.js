import { elements, select } from '../../utils/base.util';
import faker from 'faker';

const renderFriendGroup = ({ type, label, id, value, isInput }) => `
<div class="chat-profile__friend-about--group">
    <div class="chat-profile__friend-about--edit">
        <label for="${type}" class="chat-profile__friend-about--label"> ${label} </label>
    </div>
    ${
        isInput
            ? ` <input type="text" id="${id}" class="chat-profile__friend-about--input" value="${value}" disabled />`
            : `<textarea id="${id}" class="chat-profile__friend-about--input" rows="4" disabled>${value}</textarea>`
    }
   
</div>
`;

export const renderFriend = () => {
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
                ${data.map(item => renderFriendGroup(item)).join('')}
            </div>
        </form>
    </div>`;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};
