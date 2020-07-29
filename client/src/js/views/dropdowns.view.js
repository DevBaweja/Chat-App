import { elements } from '../utils/base.util';

export const clearDropdowns = () => (elements.Dropdowns.innerHTML = '');

export const renderDropdowns = markup => (elements.Dropdowns.innerHTML = markup);

export const getCoordinate = ({ clientX, clientY }) => ({
    top: `${clientY}px`,
    left: `${clientX}px`,
});

export const assignCoordinate = (className, coordinate) => {
    const style = document.querySelector(className).style;
    Object.assign(style, coordinate);
};
