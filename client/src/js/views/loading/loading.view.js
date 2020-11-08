import { elements, select } from '../../utils/base.util';

export const clearLoading = () => (select(elements.Loading).innerHTML = '');

export const renderLoading = () => {
    const markup = `
    <div class="neat">
        <div class="loading__content">
            <div class="loading__span"></div>
            <div class="loading__span"></div>
            <div class="loading__span"></div>
            <div class="loading__span"></div>
            <div class="loading__span"></div>
            <div class="loading__span"></div>
        </div>
    </div>
    `;
    select(elements.Loading).insertAdjacentHTML('beforeend', markup);
};
