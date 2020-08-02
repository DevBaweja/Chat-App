import { elements } from '../../utils/base.util';
export const renderTheme = theme => {
    elements.App.classList.add(theme);
};
export const clearTheme = theme => {
    elements.App.classList.remove(theme);
};
