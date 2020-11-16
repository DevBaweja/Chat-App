import { elements, elementStrings, elementClasses, select, selectAll, capitalize } from '../../utils/base.util';

// Setting
export const renderSetting = () => {
    // Data
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

    // Markup
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
    // Rendering Markup
    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

// Remove, Add, Render Selected Function
const removeSelected = (itemsClass, selectedClass) => {
    const items = selectAll(itemsClass);
    items.forEach(item => item.classList.remove(selectedClass));
};

const addSelected = (item, itemClass) => item.classList.add(itemClass);

const renderSelected = (info, itemClass, subItemClass, selectedClass) => {
    const itemElement = select(`${itemClass}[data-type="${info}"]`);
    if (!itemElement) return;

    const subElement = select(subItemClass, itemElement);
    addSelected(subElement, selectedClass);
};

// Color
export const removeSelectedColor = () =>
    removeSelected(elementStrings.chatProfile.subSetting.color.icon, elementClasses.selected.chatProfile.color);

export const addSelectedColor = item => addSelected(item, elementClasses.selected.chatProfile.color);

const renderSelectedColor = ({ color }) =>
    renderSelected(
        color,
        elementStrings.chatProfile.subSetting.color.item,
        elementStrings.chatProfile.subSetting.color.icon,
        elementClasses.selected.chatProfile.color
    );

export const renderColor = theme => {
    // Data
    const color = [
        '#fd122e',
        '#01c0c8',
        '#0ad80a',
        '#4286f4',
        '#ef5b5b',
        '#0448ff',
        '#f44286',
        '#a613f6',
        '#738491',
        '#9c9e3c',
        '#e1ad01',
        '#b666d2',
        '#42af66',
        '#db4906',
        '#37b49b',
        '#f37e3b',
        '#c70b37',
        '#f10043',
        '#965326',
        '#089e37',
        '#6f6f6f',
    ];
    const type = [
        'red',
        'aqua',
        'green',
        'blueberry',
        'peach',
        'blue',
        'pink',
        'purple',
        'metal',
        'gold',
        'yellow',
        'lilac',
        'forest',
        'orange',
        'teal',
        'carrot',
        'maroon',
        'blood',
        'mud',
        'grass',
        'grey',
    ];
    // Markup
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
            <div class="chat-profile-setting-color__content" style="background-color: ${
                color[index]
            }" title="${capitalize(item)}">
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

    // Rendering Markup
    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);

    renderSelectedColor(theme);
};

// Wallpaper
export const removeSelectedWallpaper = () =>
    removeSelected(
        elementStrings.chatProfile.subSetting.wallpaper.content,
        elementClasses.selected.chatProfile.wallpaper
    );

export const addSelectedWallpaper = item => addSelected(item, elementClasses.selected.chatProfile.wallpaper);

const renderSelectedWallpaper = ({ mode }) =>
    renderSelected(
        mode,
        elementStrings.chatProfile.subSetting.wallpaper.item,
        elementStrings.chatProfile.subSetting.wallpaper.content,
        elementClasses.selected.chatProfile.wallpaper
    );

export const renderWallpaper = ({ theme, backgroundImage }) => {
    // Data
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

    // Markup
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

    // Rendering Markup
    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);

    renderSelectedWallpaper(backgroundImage);
};

// Privacy
export const renderPrivacy = () => {};
