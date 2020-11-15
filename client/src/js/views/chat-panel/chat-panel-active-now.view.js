import { elements, select } from '../../utils/base.util';

export const renderActiveNow = () => {
    const markup = `
    <p>Active Now</p>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
