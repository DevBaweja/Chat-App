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
}
export default Theme;
