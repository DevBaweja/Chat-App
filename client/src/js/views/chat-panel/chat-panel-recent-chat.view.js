import { renderTitle, renderItem, extractData } from '../chat-panel.view';
import { elements, select } from '../../utils/base.util';

export const renderRecentChat = ({ data }, user) => {
    // Parse Data
    const parseData = extractData(data, user);
    const className = 'recent-chat';

    const title = {
        label: 'Recent Chats',
        count: parseData.length,
    };
    const markup = `
    <div class="chat-panel-recent-chat">                    
            ${renderTitle(title, className)}
        <ul class="chat-panel-recent-chat__list">
            ${parseData.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>    
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
