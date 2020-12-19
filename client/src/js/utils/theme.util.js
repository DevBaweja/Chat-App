const theme = ['light', 'dark'];
const getReverseTheme = theme => {
    switch (theme) {
        case 'light':
            return 'dark';
        case 'dark':
            return 'light';
    }
};
export { theme, getReverseTheme };
