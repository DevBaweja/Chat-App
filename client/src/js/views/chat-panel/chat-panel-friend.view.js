import { elements, select } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

export const renderFriend = () => {
    // Data
    const title = {
        label: 'Friends',
        count: 132,
        className: 'friend',
    };

    const markup = `
    <div class="chat-panel-friend"> 
        ${renderTitle(title)}
    <//div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
