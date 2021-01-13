const debounce = (fn, limit = 500) => {
    // Closure
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        // Clearing Previous Timeout
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, limit);
    };
};

const throttle = (fn, limit = 300) => {
    // Closure
    let flag = true;
    return function () {
        const context = this;
        const args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
};
export { debounce, throttle };
