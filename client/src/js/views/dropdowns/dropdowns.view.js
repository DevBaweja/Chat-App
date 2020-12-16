import { elements, select } from '../../utils/base.util';

const transform = element => {
    element.style.setProperty('transform', 'scale(1)');
};

const assignCoordinate = (element, coordinate) => {
    const style = element.style;
    const unitCoordinate = {
        top: `${coordinate.top}px`,
        left: `${coordinate.left}px`,
    };
    Object.assign(style, unitCoordinate);
};

// 1 2
// 3 4
// 1 - top left
// 2 - top right
// 3 - bottom left
// 4 - bottom right

const positionCoordinate = (dropdown, coordinate) => {
    const { top, left } = coordinate;
    const height = (2 * window.innerHeight) / 3;
    const width = (2 * window.innerWidth) / 3;

    switch (true) {
        case top < height && left < width:
            {
                console.log('First');
                // Styles
                dropdown.style.setProperty('transform-origin', 'top left');
                dropdown.style.setProperty('border-top-left-radius', 0);
            }
            break;
        case top < height && left > width:
            {
                console.log('Second');
                // Coordinates
                coordinate.left = left - dropdown.offsetWidth;
                // Styles
                dropdown.style.setProperty('transform-origin', 'top right');
                dropdown.style.setProperty('border-top-right-radius', 0);
            }
            break;
        case top > height && left < width:
            {
                console.log('Third');
                // Coordinates
                coordinate.top = top - dropdown.offsetWidth;
                // Styles
                dropdown.style.setProperty('transform-origin', 'bottom left');
                dropdown.style.setProperty('border-bottom-left-radius', 0);
            }
            break;
        case top > height && left > width:
            {
                console.log('Fourth');
                // Coordinates
                coordinate.top = top - dropdown.offsetWidth;
                coordinate.left = left - dropdown.offsetWidth;
                // Styles
                dropdown.style.setProperty('transform-origin', 'bottom right');
                dropdown.style.setProperty('border-bottom-right-radius', 0);
            }
            break;
    }
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

    const dropdown = select(`.${className}`);
    // Assign coordinates
    assignCoordinate(dropdown, coordinate);

    // Position coordinates
    positionCoordinate(dropdown, coordinate);

    // Reassign coordinates
    assignCoordinate(dropdown, coordinate);

    // Adding transform
    setTimeout(() => {
        transform(dropdown);
    }, 100);
};

export const clearDropdowns = () => (select(elements.Dropdowns).innerHTML = '');

// top - Y, left - X
// clientX|Y, screenX|Y, pageX|Y, x|y
export const getCoordinate = ({ x, y }) => {
    const coordinateX = window.pageXOffset + x;
    const coordinateY = window.pageYOffset + y;
    return {
        top: coordinateY,
        left: coordinateX,
    };
};
