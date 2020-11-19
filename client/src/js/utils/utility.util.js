export const generateQuery = queryObj => {
    let query = Object.keys(queryObj).reduce((acc, item) => `${item}=${queryObj[item]}&${acc}`, '');
    query = query.slice(0, query.length - 1);
    return query;
};

export const getTime = time => {
    let str = 'long';
    const actualTime = Date.now();
    const prevTime = new Date(time);

    const diffTime = new Date(actualTime - prevTime);
    console.log(diffTime);
    /*

    switch (true) {
        case diffTime.getHours() != 0:
            str = `${diffTime.getHours()} hours`;
            break;
        case diffTime.getMinutes() != 0:
            str = `${diffTime.getMinutes()} minutes`;
            break;
        case diffTime.getSeconds() != 0:
            str = `${diffTime.getSeconds()} seconds`;
            break;
    }
    */
    return str;
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomItem = list => list[random(0, list.length)];

export const bold = text => `<b>${text}</b>`;
export const italic = text => `<i>${text}</i>`;
