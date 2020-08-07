export const renderTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
};
export const clearTheme = () => {
    document.documentElement.removeAttribute('data-theme');
};
