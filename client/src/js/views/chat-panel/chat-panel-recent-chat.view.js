import faker from 'faker';
import { renderTitle, renderItem } from '../chat-panel.view';
import { elements, select } from '../../utils/base.util';

export const renderRecentChat = () => {
    // Data
    const className = 'recent-chat';
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
    ];
    const title = {
        label: 'Recent Chats',
        count: data.length,
    };
    const markup = `
    <div class="chat-panel-recent-chat">                    
            ${renderTitle(title, className)}
        <ul class="chat-panel-recent-chat__list">
            ${data.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>    
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
