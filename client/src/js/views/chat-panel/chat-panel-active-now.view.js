import { elements, select, mode } from '../../utils/base.util';
import { renderTitle, renderItem, extractData } from '../chat-panel.view';

export const renderActiveNow = ({ data }, user) => {
    // Parse Data
    const parseData = extractData(data, user);

    const onlineData = parseData.reduce((acc, item) => {
        switch (item.status) {
            case mode.status.online:
                acc.push({ ...item });
        }
        return acc;
    }, []);

    const className = 'active-now';

    const title = {
        label: 'Active Now',
        count: onlineData.length,
    };

    const markup = `
    <div class="chat-panel-active-now">     
        ${renderTitle(title, className)}
        <ul class="chat-panel-active-now__list">
            ${onlineData.map(item => renderItem(item, className)).join('')}
        </ul>
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
