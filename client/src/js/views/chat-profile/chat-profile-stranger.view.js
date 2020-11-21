import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderAboutGroup, renderForm } from '../chat-profile.view';

export const renderStranger = () => {
    // ! For Development
    const id = faker.random.uuid();
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
    <div class="chat-profile__${className}-content">
        <div class="chat-profile__${className}-content--pic">
        <img src="img/avatar/girl.png" class="chat-profile__${className}-content--img" alt="" />
        <div class="chat-profile__${className}-content--icon" title="Send Request">
            <svg class="chat-profile__${className}-content--svg">
                <use xlink:href="svg/sprite.svg#icon-send-request"></use>
            </svg>
        </div>
    </div>
        <div class="chat-profile__${className}-content--name">${name}</div>
    </div>

    <div class="chat-profile__${className}-about">
        ${data.map(item => renderAboutGroup(item, className)).join('')}
    </div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', renderForm(markup, className, id));
};
