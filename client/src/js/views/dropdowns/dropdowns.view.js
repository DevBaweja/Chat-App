import { elements, select } from '../../utils/base.util';

const transform = className => {
    select(className).style.setProperty('transform', 'scale(1)');
};

const assignCoordinate = (className, coordinate) => {
    const style = select(className).style;
    Object.assign(style, coordinate);
};
const getDropdownsItem = (item, className) => `
    <li class="${className}--item" data-type="${item.type}">
        <svg class="${className}--svg ${className}--svg-${item.type}">
            <use xlink:href="svg/sprite.svg#icon-${item.type}"></use>
        </svg>
        <span class="${className}--span ${className}--span-${item.type}">${item.text}</span>
    </li>
`;

export const renderDropdowns = ({ groups, className, coordinate }) => {
    // Creating Markup
    let markup = `
    <div class="${className}">
        <ul class="${className}--list">
            ${groups.map(item => getDropdownsItem(item, className)).join('')}
        </ul>
    </div>
    `;

    // Adding it to dropdowns
    select(elements.Dropdowns).innerHTML = markup;

    // Assign coordinates
    assignCoordinate(`.${className}`, coordinate);
    setTimeout(() => {
        transform(`.${className}`);
        // Adding transform
    }, 500);
};

export const clearDropdowns = () => (select(elements.Dropdowns).innerHTML = '');

// top - Y, left - X
// clientX|Y, screenX|Y, pageX|Y, x|y
export const getCoordinate = ({ x, y }) => {
    const coordinateX = window.pageXOffset + x;
    const coordinateY = window.pageYOffset + y;
    return {
        top: `${coordinateY}px`,
        left: `${coordinateX}px`,
    };
};

// 2 1
// 3 4

// 1 - top right
// 2 - top left
// 3 - bottom left
// 4 - bottom right
