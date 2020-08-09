export const renderTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
};
export const renderColor = color => {
    document.documentElement.setAttribute('data-color', color);
};
export const clearTheme = () => {
    document.documentElement.removeAttribute('data-theme');
};
export const clearColor = () => {
    document.documentElement.removeAttribute('data-color');
};
