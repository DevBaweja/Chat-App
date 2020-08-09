class Theme {
    constructor({ mode, color }) {
        this.mode = mode;
        this.color = color;
    }
    setMode(mode) {
        this.mode = mode;
    }
    setColor(color) {
        this.color = color;
    }
    toggleMode() {
        switch (this.mode) {
            case 'light':
                return 'dark';
            case 'dark':
                return 'light';
        }
    }
}
export default Theme;
