import { elements, select } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

export const renderRequestReceive = () => {
    // Data
    const className = 'request-receive';
    const title = {
        label: 'Request Received',
        count: 0,
    };

    const markup = `
    <div class="chat-panel-request-receive">     
        ${renderTitle(title, className)}
    </div>
        `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
