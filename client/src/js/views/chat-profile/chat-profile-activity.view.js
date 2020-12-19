import { elements, select } from '../../utils/base.util';

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
