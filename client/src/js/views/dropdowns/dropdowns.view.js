import { elements } from '../../utils/base.util';

export const clearDropdowns = () => (elements.Dropdowns.innerHTML = '');

export const renderDropdowns = markup => (elements.Dropdowns.innerHTML = markup);
// top - Y, left - X
// clientX|Y, screenX|Y, pageX|Y, x|y
export const getCoordinate = ({ x, y }) => ({
    top: `${window.pageYOffset + y}px`,
    left: `${window.pageXOffset + x}px`,
});

export const assignCoordinate = (className, coordinate) => {
    const style = document.querySelector(className).style;
    Object.assign(style, coordinate);
};