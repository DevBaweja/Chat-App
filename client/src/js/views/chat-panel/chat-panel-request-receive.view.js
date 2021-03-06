import { elements, select } from '../../utils/base.util';
import { renderTitle, renderPartialItem } from '../chat-panel.view';

export const renderRequestReceive = ({ data }) => {
    // Parse Data
    const parseData = data.map(item => ({ ...item.from, createdAt: item.createdAt }));

    const className = 'request-receive';
    const title = {
        label: 'Request Received',
        count: parseData.length,
    };

    const markup = `
    <div class="chat-panel-request-receive">     
        ${renderTitle(title, className)}
        <ul class="chat-panel-request-receive__list">
            ${parseData.map(item => renderPartialItem(item, className)).join('')}
        </ul>
    </div>
        `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
