class Alert {
    constructor({ mode }) {
        this.mode = mode;
    }
    setMode(mode) {
        this.mode = mode;
    }
    setTimer(fn) {
        const time = 5000;
        // 5sec
        setTimeout(fn, time);
    }
}
export default Alert;
