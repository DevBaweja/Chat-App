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

export const removeSelectedWallpaper = () => {
    const items = selectAll(elementStrings.chatProfile.subSetting.wallpaper.content);
    items.forEach(item => {
        item.classList.remove(elementClasses.selected.chatProfile.wallpaper);
    });
};

export const addSelectedWallpaper = item => {
    item.classList.add(elementClasses.selected.chatProfile.wallpaper);
};

const renderSelectedWallpaper = ({ mode }) => {
    const itemElement = select(`${elementStrings.chatProfile.subSetting.wallpaper.item}[data-type="${mode}"]`);
    if (!itemElement) return;

    const contentElement = select(elementStrings.chatProfile.subSetting.wallpaper.content, itemElement);
    addSelectedWallpaper(contentElement);
};

export const renderWallpaper = ({ theme, backgroundImage }) => {
    const mode = theme.mode;
    const type = {
        light: ['light-1'],
        dark: ['dark-1', 'dark-2', 'dark-3', 'dark-4', 'dark-5', 'dark-6', 'dark-7', 'dark-8', 'dark-9'],
    };
    const rgba = {
        light: ['rgba(0,0,0,0.06)'],
        dark: [
            'rgba(0,0,0,0.4)',
            'rgba(0,0,0,0.1)',
            'rgba(255, 255, 255, 0.035)',
            'rgba(255,255,255,0.085)',
            'rgba(255,255,255,0.05)',
            'rgba(255,255,255,0.01)',
            'rgba(255,255,255,0.08)',
            'rgba(0,0,0,0.6)',
            'rgba(0,0,0,0.6)',
        ],
    };

    let markup = `
    <div class="chat-profile-setting-wallpaper">
        <div class="chat-profile-setting-wallpaper__header">
            <div class="chat-profile-setting-wallpaper__header--back">
                <svg class="chat-profile-setting-wallpaper__header--back-svg">
                    <use xlink:href="svg/sprite.svg#icon-back"></use>
                </svg>
            </div>
            <div class="chat-profile-setting-wallpaper__header--heading">
                Wallpaper
            </div>
        </div>
        <ul class="chat-profile-setting-wallpaper__list">
        ${type[mode]
            .map(
                (item, index) => `
            <li class="chat-profile-setting-wallpaper__item" data-type="${item}">
                <div class="chat-profile-setting-wallpaper__content" style="background-image: linear-gradient(to right bottom, ${rgba[mode][index]},${rgba[mode][index]}), url(img/background-image/${item}.jpg); background-size: cover;">
                </div>
            </li>
            `
            )
            .join('')}
        </ul> 
    </div>
        `;

    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);

    renderSelectedWallpaper(backgroundImage);
};
export const renderPrivacy = () => {};
