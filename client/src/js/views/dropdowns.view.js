import { elements } from '../utils/base.util';

export const renderDropdowns = markup => (elements.Dropdowns.innerHTML = markup);
export const clearDropdowns = () => (elements.Dropdowns.innerHTML = '');
export const getCoordinate = ({ clientX, clientY }) => ({
    top: `${clientY}px`,
    left: `${clientX}px`,
});
