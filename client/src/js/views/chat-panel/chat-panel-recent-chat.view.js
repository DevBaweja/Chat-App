import faker from 'faker';
import { renderTitle, renderItem } from '../chat-panel.view';
import { elements, select } from '../../utils/base.util';

export const renderRecentChat = () => {
    // Data
    const title = {
        label: 'Recent Chats',
        count: 34,
        className: 'recent-chat',
    };

    const className = 'recent-chat';
    const data = [
        {
            user: faker.random.uuid(),
            name: faker.name.findName(),
            photo: faker.image.avatar(),
            state: 'active',
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
    <div class="chat-panel-recent-chat">                    
            ${renderTitle(title)}
        <ul class="chat-panel-recent-chat__list">
            ${data.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>    
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
