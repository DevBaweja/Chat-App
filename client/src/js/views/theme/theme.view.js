import { elements } from '../../utils/base.util';
export const renderTheme = theme => {
    document.querySelector(elements.App).classList.add(theme);
};
export const clearTheme = theme => {
    document.querySelector(elements.App).classList.remove(theme);
};
