import { elements } from '../../utils/base.util';

export const clearDropdowns = () => (document.querySelector(elements.Dropdowns).innerHTML = '');

export const renderDropdowns = markup => (document.querySelector(elements.Dropdowns).innerHTML = markup);
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

// 2 1
// 3 4

// 1 - top right
// 2 - top left
// 3 - bottom left
// 4 - bottom right
