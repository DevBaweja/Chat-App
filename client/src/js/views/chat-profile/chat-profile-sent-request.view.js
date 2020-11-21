import { elements, select } from '../../utils/base.util';
import { renderAboutGroup, renderForm } from '../chat-profile.view';
import faker from 'faker';

export const renderSentRequest = ({ _id, photo, name, email, bio }) => {
    // Data
    const data = [
        { type: 'name', label: 'Name', id: 'name', value: name, isInput: true },
        { type: 'email', label: 'Email', id: 'email', value: email, isInput: true },
        { type: 'bio', label: 'Bio', id: 'bio', value: bio, isInput: false },
    ];

    const className = 'sent-request';

    const markup = `
    <div class="chat-profile__${className}-content">
        <div class="chat-profile__${className}-content--pic">
        <img src="${photo}" class="chat-profile__${className}-content--img" alt="" />
        <div class="chat-profile__${className}-content--icon" title="Cancel Request">
            <svg class="chat-profile__${className}-content--svg">
                <use xlink:href="svg/sprite.svg#icon-cancel-request"></use>
            </svg>
        </div>
    </div>
        <div class="chat-profile__${className}-content--name">${name}</div>
    </div>

    <div class="chat-profile__${className}-about">
        ${data.map(item => renderAboutGroup(item, className)).join('')}
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', renderForm(markup, className, _id));
};
