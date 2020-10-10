import { elements, elementStrings, select } from '../../utils/base.util';

export const renderUser = user => {
    const markup = `
    <div class="chat-profile__user">
    <form class="chat-profile__user--form">
        <div class="chat-profile__user-pic">
            <img src="${user.photo}" class="chat-profile__user-pic--img" alt="" />
            <div class="chat-profile__user-pic--upload">
                <label class="chat-profile__user-pic--label" for="photo" title="Change profile pic">
                    <svg class="chat-profile__user-pic--svg">
                        <use xlink:href="svg/sprite.svg#icon-camera"></use>
                    </svg>
                </label>
                <input class="chat-profile__user-pic--input" accept="image/*" type="file" id="photo" name="photo" />
            </div>
            <div class="chat-profile__user-pic--name">${user.name}</div>
        </div>
        <div class="chat-profile__user-avatar">
            <div class="chat-profile__user-avatar--label">
                Choose your avatar
            </div>
            <div class="chat-profile__user-avatar--container">
                <div class="chat-profile__user-avatar--group" title="Boy">
                    <img src="img/avatar/boy.png" alt="" class="chat-profile__user-avatar--img"/>
                    <div class="chat-profile__user-avatar--icon chat-profile__user-avatar--icon-selected">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-profile__user-avatar--group" title="Girl">
                    <img src="img/avatar/girl.png" alt="" class="chat-profile__user-avatar--img"/>
                    <div class="chat-profile__user-avatar--icon">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-profile__user-avatar--group" title="Men">
                    <img src="img/avatar/male.png" alt="" class="chat-profile__user-avatar--img"/> 
                    <div class="chat-profile__user-avatar--icon">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-profile__user-avatar--group" title="Women">
                    <img src="img/avatar/female.png" alt="" class="chat-profile__user-avatar--img"/> 
                    <div class="chat-profile__user-avatar--icon">
                        <svg class="chat-profile__user-avatar--svg">
                            <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-profile__user-about">
            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="name" class="chat-profile__user-about--label"> Name </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Name" data-type="name">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="name" class="chat-profile__user-about--input chat-profile__user-about--input-name" value="${user.name}" disabled/>
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="email" class="chat-profile__user-about--label"> Email </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Email" data-type="email">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>
                <input type="text" id="email" class="chat-profile__user-about--input chat-profile__user-about--input-email" value="${user.email}" disabled />
            </div>

            <div class="chat-profile__user-about--group">
                <div class="chat-profile__user-about--edit">
                    <label for="bio" class="chat-profile__user-about--label"> Bio </label>
                    <svg class="chat-profile__user-about--svg" title="Edit Bio" data-type="bio">
                        <use xlink:href="svg/sprite.svg#icon-edit"></use>
                    </svg>
                </div>

                <textarea id="bio" class="chat-profile__user-about--input chat-profile__user-about--input-bio" rows="4" disabled>${user.bio}</textarea>
            </div>
        </div>
    </form>
</div>

    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const renderSaveProfile = () => {
    const saveElement = select(elementStrings.chatProfile.user.save);
    if (saveElement) saveElement.remove();

    const markup = `
    <div class="chat-profile__user-save" title="Save profile">
        <button class="chat-profile__user--update">Save profile</button>
    </div>`;
    const formElement = select(elementStrings.chatProfile.user.form);

    formElement.insertAdjacentHTML('beforeend', markup);
};
