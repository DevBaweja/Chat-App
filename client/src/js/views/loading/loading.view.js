import { elements, select } from '../../utils/base.util';

export const clearLoading = () => (select(elements.Loading).innerHTML = '');

export const renderLoading = () => {
    const markup = `
    <div class="neat">Loading</div>
    `;
    select(elements.Loading).insertAdjacentHTML('beforeend', markup);
};
