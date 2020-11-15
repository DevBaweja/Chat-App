import { elements, select } from '../../utils/base.util';

export const renderSearch = () => {
    const markup = `
    <p>Search</p>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
