import { elements, select } from '../../utils/base.util';

export const renderRequestReceive = () => {
    const markup = `
    <p>Request Receive</p>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
