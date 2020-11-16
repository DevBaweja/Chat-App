import { elements, select } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

export const renderActiveNow = () => {
    // Data
    const title = {
        label: 'Active Now',
        count: 10,
        className: 'active-now',
    };

    const markup = `
    ${renderTitle(title)}
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
