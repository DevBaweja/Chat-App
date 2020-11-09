import { elements, elementStrings, elementClasses, select, selectAll } from '../../utils/base.util';

export const renderSetting = () => {
    const data = ['color', 'wallpaper', 'privacy', 'password', 'delete'];
    const type = ['color', 'wallpaper', 'privacy', 'update-password', 'delete-account'];
    const content = ['Color', 'Wallpaper', 'Privacy', 'Password', 'Delete Account'];
    const description = [
        'Life is like a rainbow',
        'Customize your wallpaper like pro',
        'Privacy is not up for discussion',
        'Love is secret password to every soul',
        'We will miss you!',
    ];

    let markup = `
<div class="chat-profile-setting">
    <div class="chat-profile-setting__heading">
        Settings
    </div>
    <ul class="chat-profile-setting__list">
    ${data
        .map(
            (item, index) => `
    <li class="chat-profile-setting__item" data-type="${type[index]}">
        <div class="chat-profile-setting__title">
            <svg class="chat-profile-setting__svg chat-profile-setting__svg--${item}">
                <use xlink:href="svg/sprite.svg#icon-setting-${item}"></use>
            </svg>
            <div class="chat-profile-setting__content chat-profile-setting__content--${item}">
                <span class="chat-profile-setting__span">
                    ${content[index]}
                </span>
                <span class="chat-profile-setting__description">
                    ${description[index]}
                </span>
            </div>
        </div>
    </li>
    `
        )
        .join('')}
    </ul>
</div>
    `;
    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const removeSelectedColor = () => {
    const items = selectAll(elementStrings.chatProfile.subSetting.color.icon);
    items.forEach(item => {
        item.classList.remove(elementClasses.selected.chatProfile.color);
    });
};
export const addSelectedColor = item => {
    item.classList.add(elementClasses.selected.chatProfile.color);
};

const renderSelectedColor = ({ color }) => {
    const itemElement = select(`${elementStrings.chatProfile.subSetting.color.item}[data-type="${color}"]`);
    if (!itemElement) return;

    const iconElement = select(elementStrings.chatProfile.subSetting.color.icon, itemElement);
    addSelectedColor(iconElement);
};

export const renderColor = theme => {
    const color = [
        '#01c0c8',
        '#0ad80a',
        '#0448ff',
        '#a613f6',
        '#fd122e',
        '#e1ad01',
        '#f10043',
        '#42af66',
        '#db4906',
        '#37b49b',
        '#f37e3b',
        '#6f6f6f',
    ];
    const type = [
        'aqua',
        'green',
        'blue',
        'purple',
        'red',
        'yellow',
        'pink',
        'forest',
        'orange',
        'teal',
        'carrot',
        'grey',
    ];
    let markup = `
<div class="chat-profile-setting-color">
    <div class="chat-profile-setting-color__header">
        <div class="chat-profile-setting-color__header--back">
            <svg class="chat-profile-setting-color__header--back-svg">
                <use xlink:href="svg/sprite.svg#icon-back"></use>
            </svg>
        </div>
        <div class="chat-profile-setting-color__header--heading">
            Color
        </div>
    </div>
    <ul class="chat-profile-setting-color__list">
    ${type
        .map(
            (item, index) => `
        <li class="chat-profile-setting-color__item" data-type="${item}">
            <div class="chat-profile-setting-color__content" style="background-color: ${color[index]}">
                <div class="chat-profile-setting-color__icon">
                    <svg class="chat-profile-setting-color__svg">
                        <use xlink:href="svg/sprite.svg#icon-avatar"></use>
                    </svg>
                </div>
            </div>
        </li>
        `
        )
        .join('')}
    </ul> 
</div>
    `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);

    renderSelectedColor(theme);
};
export const renderWallpaper = () => {};
export const renderPrivacy = () => {};
