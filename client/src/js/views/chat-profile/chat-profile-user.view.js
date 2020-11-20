import { elements, elementStrings, elementClasses, select, selectAll } from '../../utils/base.util';
import { prepareUI, initialUI, getInput, getPhoto } from '../chat-profile.view';

export const prepareUIForUser = () => prepareUI(elementStrings.chatProfile.user.update, 'Saving Profile');

export const initialUIForUser = () => initialUI(elementStrings.chatProfile.user.update, 'Save Profile');

export const getUserInput = () => getInput(elementStrings.chatProfile.user.about.input);

export const getUserPhoto = inputs => getPhoto(elementStrings.chatProfile.user.content.input, inputs);

export const addSelected = item => item.classList.add(elementClasses.selected.chatProfile.avatar);

export const removeSelected = () => {
    const items = selectAll(elementStrings.chatProfile.user.avatar.icon);
    items.forEach(item => {
        item.classList.remove(elementClasses.selected.chatProfile.avatar);
    });
};

const renderSelected = ({ photo }) => {
    const imgElement = select(`${elementStrings.chatProfile.user.avatar.img}[src="${photo}"]`);
    if (!imgElement) return;

    const groupElement = imgElement.closest(elementStrings.chatProfile.user.avatar.group);
    const iconElement = select(elementStrings.chatProfile.user.avatar.icon, groupElement);

    addSelected(iconElement);
};

const renderAvatar = ({ type, title }) => `
<div class="chat-profile__user-avatar--group" title="${title}">
    <img src="img/avatar/${type}.png" alt="" class="chat-profile__user-avatar--img"/>
    <div class="chat-profile__user-avatar--icon">
        <svg class="chat-profile__user-avatar--svg">
            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
        </svg>
    </div>
</div>
`;

const renderUserGroup = ({ type, label, value, isInput }) => `
<div class="chat-profile__user-about--group">
    <div class="chat-profile__user-about--edit">
        <label for="${type}" class="chat-profile__user-about--label"> ${label} </label>
        <svg class="chat-profile__user-about--svg" title="Edit ${label}" data-type="${type}">
            <use xlink:href="svg/sprite.svg#icon-edit"></use>
        </svg>
    </div>
    ${
        isInput
            ? `<input type="text" id="${type}" class="chat-profile__user-about--input chat-profile__user-about--input-${type}" value="${value}" disabled/>`
            : `<textarea id="${type}" class="chat-profile__user-about--input chat-profile__user-about--input-${type}" rows="4" disabled>${value}</textarea>`
    }  
</div>
`;

export const renderUser = user => {
    // Data
    const { photo, name } = user;
    const avatar = [
        { type: 'boy', title: 'Boy' },
        { type: 'girl', title: 'Girl' },
        { type: 'male', title: 'Male' },
        { type: 'female', title: 'Female' },
    ];

    const data = [
        { type: 'name', label: 'Name', value: user.name, isInput: true },
        { type: 'email', label: 'Email', value: user.email, isInput: true },
        { type: 'bio', label: 'Bio', value: user.bio, isInput: false },
    ];
    // Markup
    const markup = `
    <div class="chat-profile__user">
    <form class="chat-profile__user--form">
        <div class="chat-profile__user-content">
            <div class="chat-profile__user-content--pic">
                <img src="${photo}" class="chat-profile__user-content--img" alt=" " />
                <div class="chat-profile__user-content--upload">
                    <label class="chat-profile__user-content--label" for="photo" title="Change profile image">
                        <svg class="chat-profile__user-content--svg">
                            <use xlink:href="svg/sprite.svg#icon-camera"></use>
                        </svg>
                    </label>
                    <input class="chat-profile__user-content--input" accept="image/*" type="file" id="photo" name="photo" />
                </div>
            </div>
            <div class="chat-profile__user-content--name">${name}</div>
        </div>
        <div class="chat-profile__user-avatar">
            <div class="chat-profile__user-avatar--label">
                Choose your avatar
            </div>
            <div class="chat-profile__user-avatar--container">
                ${avatar.map(item => renderAvatar(item)).join('')}
            </div>
        </div>
        <div class="chat-profile__user-about">
            ${data.map(item => renderUserGroup(item)).join('')}
        </div>
    </form>
</div>

    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);

    renderSelected(user);
};

export const renderSaveProfile = () => {
    const saveElement = select(elementStrings.chatProfile.user.save);
    if (saveElement) saveElement.remove();

    const markup = `
    <div class="chat-profile__user-save" title="Save Profile">
        <button class="chat-profile__user--update">Save Profile</button>
    </div>`;
    const formElement = select(elementStrings.chatProfile.user.form);

    formElement.insertAdjacentHTML('beforeend', markup);
};
