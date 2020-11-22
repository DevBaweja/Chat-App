import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem } from '../chat-panel.view';

export const extractData = (data, user) => {
    return data.map(item => {
        let result = {};
        switch (user.id) {
            case item.from.id:
                result = { ...item.to };
                break;
            case item.to.id:
                result = { ...item.from };
                break;
            default: {
            }
        }
        result['status'] = 'active';
        result['setting'] = [
            { type: 'mark-read' },
            { type: 'pin-chat' },
            { type: 'mute-notification' },
            { type: 'add-favourite' },
        ];
        return result;
    });
};
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
