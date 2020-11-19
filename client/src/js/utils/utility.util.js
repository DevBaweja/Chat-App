export const generateQuery = queryObj => {
    let query = Object.keys(queryObj).reduce((acc, item) => `${item}=${queryObj[item]}&${acc}`, '');
    query = query.slice(0, query.length - 1);
    return query;
};

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomItem = list => list[random(0, list.length)];

export const bold = text => `<b>${text}</b>`;
export const italic = text => `<i>${text}</i>`;
