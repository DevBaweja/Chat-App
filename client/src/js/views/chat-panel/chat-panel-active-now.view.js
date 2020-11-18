import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem } from '../chat-panel.view';

export const renderActiveNow = () => {
    // Data
    const title = {
        label: 'Active Now',
        count: 10,
        className: 'active-now',
    };
    const className = 'active-now';
    const data = [
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            state: 'active',
            setting: [],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            state: 'inactive',
            setting: [{ type: 'add-favourite' }],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            state: 'inactive',
            setting: [],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            state: 'active',
            setting: [{ type: 'pin-chat' }],
        },
    ];

    const markup = `
    <div class="chat-panel-active-now">     
        ${renderTitle(title)}
        <ul class="chat-panel-recent-chat__list">
            ${data.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
