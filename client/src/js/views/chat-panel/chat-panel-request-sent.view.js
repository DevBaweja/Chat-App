import { elements, select } from '../../utils/base.util';

export const renderRequestSent = () => {
    const markup = `
    <p>Request Sent</p>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
