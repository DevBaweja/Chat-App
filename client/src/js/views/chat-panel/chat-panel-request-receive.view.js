import { elements, select } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

export const renderRequestReceive = () => {
    // Data
    const title = {
        label: 'Request Received',
        count: 24,
        className: 'request-receive',
    };

    const markup = `
    <div class="chat-panel-request-receive">     
        ${renderTitle(title)}
    </div>
        `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
