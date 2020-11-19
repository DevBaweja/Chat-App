import faker from 'faker';
import { elements, select } from '../../utils/base.util';
import { renderTitle, renderPartialItem } from '../chat-panel.view';

export const renderRequestReceive = () => {
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

    const className = 'request-receive';
    const title = {
        label: 'Request Received',
        count: data.length,
    };

    const markup = `
    <div class="chat-panel-request-receive">     
        ${renderTitle(title, className)}
        <ul class="chat-panel-request-receive__list">
            ${data.map(item => renderPartialItem(item, className)).join('')}
        </ul>
    </div>
        `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
