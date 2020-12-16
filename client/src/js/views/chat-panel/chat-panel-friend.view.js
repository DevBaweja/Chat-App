import { elements, select } from '../../utils/base.util';
import { renderTitle, renderItem, extractOtherUser, extractSetting } from '../chat-panel.view';

export const extractData = (data, user) => {
    return data.map(item => {
        console.log(item);
        // Getting user
        const newItem = extractOtherUser(user, item);

        // Getting setting
        newItem['setting'] = extractSetting(item);

        newItem['status'] = 'active';

        console.log(newItem);
        return newItem;
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
