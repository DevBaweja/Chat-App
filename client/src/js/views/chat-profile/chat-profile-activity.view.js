import { elements, select, animateType } from '../../utils/base.util';

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
    const content = ['Fractal Tree', 'Mandelbrot Set', 'Julia Set', 'Flocking'];
    const description = [
        `It's all about the branches.`,
        `My life is series of accidents. Yet when I look back, I see a pattern.`,
        `I accept chaos, I'm not sure whether it accepts me.`,
        '',
    ];

    const className = 'animate';
    const heading = 'Animations';
    // Markup
    const markup = `
    <div class="chat-profile-activity-animate">
        ${renderHeading(className, heading)}

        <ul class="chat-profile-activity-animate__list">
        ${animateType
            .map(
                (item, index) => `
        <li class="chat-profile-activity-animate__item" data-type="${item}">
            <div class="chat-profile-activity-animate__title">
                <svg class="chat-profile-activity-animate__svg chat-profile-activity-animate__svg--${item}">
                    <use xlink:href="svg/sprite.svg#icon-animate-${item}"></use>
                </svg>
                <div class="chat-profile-activity-animate__content chat-profile-activity-animate__content--${item}">
                    <span class="chat-profile-activity-animate__span">
                        ${content[index]}
                    </span>
                    <span class="chat-profile-activity-animate__description">
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
