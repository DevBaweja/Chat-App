import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem } from '../chat-panel.view';

export const renderActiveNow = () => {
    // Data
    const className = 'active-now';
    const data = [
        {
            _id: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'active',
            setting: [],
        },
        {
            _id: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'inactive',
            setting: [{ type: 'add-favourite' }],
        },
        {
            _id: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'inactive',
            setting: [],
        },
        {
            _id: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'active',
            setting: [{ type: 'pin-chat' }],
        },
    ];
    const title = {
        label: 'Active Now',
        count: data.length,
    };

    const markup = `
    <div class="chat-panel-active-now">     
        ${renderTitle(title, className)}
        <ul class="chat-panel-active-now__list">
            ${data.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
