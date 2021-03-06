import { elements, select } from '../../utils/base.util';
import { renderTitle, renderPartialItem } from '../chat-panel.view';

export const renderRequestSent = ({ data }) => {
    // Parse Data
    const parseData = data.map(item => ({ ...item.to, createdAt: item.createdAt }));

    const className = 'request-sent';
    const title = {
        label: 'Request Sent',
        count: parseData.length,
    };

    const markup = `
    <div class="chat-panel-request-sent">     
        ${renderTitle(title, className)}
        <ul class="chat-panel-request-sent__list">
            ${parseData.map(item => renderPartialItem(item, className)).join('')}
        </ul>
    </div>
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
