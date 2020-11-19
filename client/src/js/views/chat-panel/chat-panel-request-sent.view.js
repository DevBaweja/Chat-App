import { elements, select } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

export const renderRequestSent = () => {
    // Data
    const className = 'request-sent';
    const title = {
        label: 'Request Sent',
        count: 0,
    };

    const markup = `
    <div class="chat-panel-request-sent">     
        ${renderTitle(title, className)}
    </div>
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
