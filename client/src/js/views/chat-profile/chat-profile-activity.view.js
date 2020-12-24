import {
    elements,
    select,
    animateType,
    animateHeading,
    animateQuote,
    gameType,
    gameHeading,
    gameQuote,
} from '../../utils/base.util';

// Activity
export const renderActivity = () => {
    // Data
    const data = ['animate', 'game'];
    const type = ['animate', 'game'];
    const content = ['Animations', 'Gaming'];
    const description = ['Creating the illusion of life.', 'Play to win, But enjoy the fun.'];

    // Markup
    let markup = `
    <div class="chat-profile-activity">
        <div class="chat-profile-activity__heading">
            Activities
        </div>
        <ul class="chat-profile-activity__list">
        ${data
            .map(
                (item, index) => `
        <li class="chat-profile-activity__item" data-type="${type[index]}">
            <div class="chat-profile-activity__title">
                <svg class="chat-profile-activity__svg chat-profile-activity__svg--${item}">
                    <use xlink:href="svg/sprite.svg#icon-activity-${item}"></use>
                </svg>
                <div class="chat-profile-activity__content chat-profile-activity__content--${item}">
                    <span class="chat-profile-activity__span">
                        ${content[index]}
                    </span>
                    <span class="chat-profile-activity__description">
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

const renderHeading = (className, heading) => `
    <div class="chat-profile-activity-${className}__header">
        <div class="chat-profile-activity-${className}__header--back">
            <svg class="chat-profile-activity-${className}__header--back-svg">
                <use xlink:href="svg/sprite.svg#icon-back"></use>
            </svg>
        </div>
        <div class="chat-profile-activity-${className}__header--heading">${heading}</div>
    </div>
`;

// Animate
export const renderAnimate = () => {
    // Data
    const className = 'animate';
    const heading = 'Animations';
    // Markup
    const markup = `
    <div class="chat-profile-activity-${className}">
        ${renderHeading(className, heading)}

        <ul class="chat-profile-activity-${className}__list">
        ${animateType
            .map(
                (item, index) => `
        <li class="chat-profile-activity-${className}__item" data-type="${item}">
            <div class="chat-profile-activity-${className}__title">
                <svg class="chat-profile-activity-${className}__svg chat-profile-activity-${className}__svg--${item}">
                    <use xlink:href="svg/sprite.svg#icon-${className}-${item}"></use>
                </svg>
                <div class="chat-profile-activity-${className}__content chat-profile-activity-${className}__content--${item}">
                    <span class="chat-profile-activity-${className}__span">
                        ${animateHeading[index]}
                    </span>
                    <span class="chat-profile-activity-${className}__description">
                        ${animateQuote[index]}
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

// Game
export const renderGame = () => {
    // Data
    const className = 'game';
    const heading = 'Gaming';
    // Markup
    const markup = `
    <div class="chat-profile-activity-${className}">
        ${renderHeading(className, heading)}

        <ul class="chat-profile-activity-${className}__list">
        ${gameType
            .map(
                (item, index) => `
        <li class="chat-profile-activity-${className}__item" data-type="${item}">
            <div class="chat-profile-activity-${className}__title">
                <svg class="chat-profile-activity-${className}__svg chat-profile-activity-${className}__svg--${item}">
                    <use xlink:href="svg/sprite.svg#icon-${className}-${item}"></use>
                </svg>
                <div class="chat-profile-activity-${className}__content chat-profile-activity-${className}__content--${item}">
                    <span class="chat-profile-activity-${className}__span">
                        ${gameHeading[index]}
                    </span>
                    <span class="chat-profile-activity-${className}__description">
                        ${gameQuote[index]}
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
