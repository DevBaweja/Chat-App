// Theme
export const renderTheme = theme => document.documentElement.classList.add(theme);
export const clearTheme = theme => document.documentElement.classList.remove(theme);
// Color
export const renderColor = color => document.documentElement.setAttribute('data-color', color);
export const clearColor = () => document.documentElement.removeAttribute('data-color');
