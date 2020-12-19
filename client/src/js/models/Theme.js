import { mode } from '../utils/base.util';
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
            case mode.theme.light:
                return mode.theme.dark;
            case mode.theme.dark:
                return mode.theme.light;
        }
    }
}
export default Theme;
