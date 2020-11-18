class Setting {
    constructor({ theme, color }) {
        this.theme = theme;
        this.color = color;
    }
    setTheme = theme => {
        this.theme = theme;
    };
    setColor = color => {
        this.color = color;
    };
}
export default Setting;
