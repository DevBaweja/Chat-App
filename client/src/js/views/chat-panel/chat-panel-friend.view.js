import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem } from '../chat-panel.view';

export const renderFriend = () => {
    // Data
    const className = 'friend';
    const data = [
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'active',
            setting: [
                { type: 'mark-read' },
                { type: 'pin-chat' },
                { type: 'mute-notification' },
                { type: 'add-favourite' },
            ],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'inactive',
            setting: [{ type: 'add-favourite' }],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'inactive',
            setting: [],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'active',
            setting: [{ type: 'pin-chat' }],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'inactive',
            setting: [],
        },
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            status: 'inactive',
            setting: [],
        },
    ];
    const title = {
        label: 'Friends',
        count: data.length,
    };
    const markup = `
    <div class="chat-panel-friend"> 
        ${renderTitle(title, className)}
        <ul class="chat-panel-recent-chat__list">
            ${data.map(item => renderItem(item, className)).join('')}
        </ul>
    <//div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
