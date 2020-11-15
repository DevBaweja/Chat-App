import { elements, select } from '../../utils/base.util';

export const renderFriend = () => {
    const markup = `
    <p>Friend</p>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
