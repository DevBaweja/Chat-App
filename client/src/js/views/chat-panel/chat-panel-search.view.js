import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderPartialItem } from '../chat-panel.view';

export const renderSearch = () => {
    // Data
    const data = [
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
        },
    ];
    const className = 'search';

    const markup = `
    <div class="chat-panel-search">
    <form class="chat-panel-search__form">
        <input type="text" class="chat-panel-search__input" placeholder="Connecting the world" />
        <button class="chat-panel-search__button" title="Search">
            <svg class="chat-panel-search__icon">
                <use xlink:href="svg/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>  
    
    <ul class="chat-panel-search__list">
        ${data.map(item => renderPartialItem(item, className)).join('')}
    </ul>
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
