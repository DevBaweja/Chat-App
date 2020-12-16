import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem, extractData } from '../chat-panel.view';

export const renderFriend = ({ data }, user) => {
    // Parse Data
    const parseData = extractData(data, user);
    const className = 'friend';

    const title = {
        label: 'Friends',
        count: parseData.length,
    };
    const markup = `
    <div class="chat-panel-friend"> 
        ${renderTitle(title, className)}
        <ul class="chat-panel-friend__list">
            ${parseData.map(item => renderItem(item, className)).join('')}
        </ul>
    <//div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
