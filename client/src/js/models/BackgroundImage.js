class BackgroundImage {
    constructor({ mode }) {
        this.mode = mode;
    }
    setMode(mode) {
        this.mode = mode;
    }
    getRgba() {
        const rgba = {
            'dark-1': 'rgba(0,0,0,0.4)',
            'dark-2': 'rgba(0,0,0,0.1)',
            'dark-3': 'rgba(255, 255, 255, 0.035)',
            'dark-4': 'rgba(255,255,255,0.085)',
            'dark-5': 'rgba(255,255,255,0.05)',
            'dark-6': 'rgba(255,255,255,0.01)',
            'dark-7': 'rgba(255,255,255,0.08)',
            'dark-8': 'rgba(0,0,0,0.6)',
            'dark-9': 'rgba(0,0,0,0.6)',
            'light-1': 'rgba(0,0,0,0.06)',
        };
        return rgba[this.mode];
    }
}
export default BackgroundImage;
