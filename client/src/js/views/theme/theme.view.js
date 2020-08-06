import { elements, select } from '../../utils/base.util';
export const renderTheme = theme => {
    select(elements.App).classList.add(theme);
};
export const clearTheme = theme => {
    select(elements.App).classList.remove(theme);
};
