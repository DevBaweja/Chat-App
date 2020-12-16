export const generateQuery = queryObj => {
    let query = Object.keys(queryObj).reduce((acc, item) => `${item}=${queryObj[item]}&${acc}`, '');
    query = query.slice(0, query.length - 1);
    return query;
};

const getDiffSeconds = (timeA, timeB) => {
    const seconds = timeA.getSeconds() - timeB.getSeconds();
    const minutes = timeA.getMinutes() - timeB.getMinutes();
    const hours = timeA.getHours() - timeB.getHours();
    const days = timeA.getDate() - timeB.getDate();
    const months = timeA.getMonth() - timeB.getMonth();
    const years = timeA.getFullYear() - timeB.getFullYear();

    const cumulativeSeconds =
        seconds +
        60 * minutes +
        60 * 60 * hours +
        60 * 60 * 24 * days +
        60 * 60 * 24 * 30 * months +
        60 * 60 * 24 * 30 * 12 * years;

    return cumulativeSeconds;
};
export const getTime = time => {
    const actualTime = new Date();
    const prevTime = new Date(time);

    const floor = Math.floor;
    let str = '';
    const seconds = getDiffSeconds(actualTime, prevTime);

    if (seconds >= 60) {
        const minutes = seconds / 60;
        if (minutes >= 60) {
            const hours = minutes / 60;
            if (hours >= 24) {
                const days = hours / 24;
                if (days >= 30) {
                    const months = days / 30;
                    if (months >= 12) {
                        const years = months / 12;
                        str = `${floor(years)} years`;
                    } else str = `${floor(months)} months`;
                } else str = `${floor(days)} days`;
            } else str = `${floor(hours)} hours`;
        } else str = `${floor(minutes)} minutes`;
    } else str = `${floor(seconds)} seconds`;

    return str;
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const capitalizeAll = str => str.split(' ').map(capitalize).join(' ');

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomItem = list => list[random(0, list.length)];

export const bold = text => `<b>${text}</b>`;
export const italic = text => `<i>${text}</i>`;
