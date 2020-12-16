import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem, extractData } from '../chat-panel.view';

export const renderActiveNow = ({ data }, user) => {
    // Parse Data
    const parseData = extractData(data, user);
    const className = 'active-now';

    const title = {
        label: 'Active Now',
        count: parseData.length,
    };

    const markup = `
    <div class="chat-panel-active-now">     
        ${renderTitle(title, className)}
        <ul class="chat-panel-active-now__list">
            ${parseData.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
