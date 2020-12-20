const theme = ['light', 'dark'];
const getHexTheme = {
    light: '#e0e0e0',
    dark: '#1e1e1e',
};
const getReverseTheme = theme => {
    switch (theme) {
        case 'light':
            return 'dark';
        case 'dark':
            return 'light';
    }
};

export { theme, getHexTheme, getReverseTheme };
