import {
    elements,
    elementStrings,
    select,
    bold,
    capitalize,
    longDate,
    shortDate,
    getHexColor,
    getHexTheme,
} from '../utils/base.util';

export const clearChatBox = () => (select(elements.ChatBox).innerHTML = '');

export const clearUserInput = () => (select(elementStrings.chatBox.footer.input).innerHTML = '');

export const getUserInput = () => {
    const input = select(elementStrings.chatBox.footer.input);
    let obj = {};
    obj['content'] = input.innerText;
    return obj;
};

export const renderEmpty = color => {
    const markup = `
    <div class="chat-box-empty">
        <div class="chat-box-empty--container">
            <div class="chat-box-empty--svg">
                <svg>
                    <use xlink:href="svg/themes/empty.svg#icon-empty-${color}"></use>
                </svg>
            </div>
            <div class="chat-box-empty--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
};

export const renderIdeal = color => {
    const markup = `
    <div class="chat-box-ideal">
        <div class="chat-box-ideal--container">
            <div class="chat-box-ideal--svg">
                <svg>
                <use xlink:href="svg/themes/ideal.svg#icon-ideal-${color}"></use>
                </svg>
            </div>
            <div class="chat-box-ideal--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
};

export const renderAnimate = ({ theme, type }) => {
    const types = ['fractal-tree', 'mandelbrot-set', 'julia-set'];
    const index = types.indexOf(type);
    // Data
    const title = ['Fractal Tree', 'Mandelbrot Set', 'Julia Set'];
    const content = [
        `A Fractal is a self-similar subset of Euclidean space whose fractal dimension strictly exceeds its topological dimension. $ Fractals exhibit similar patterns at increasingly small scales called self-similarity, also known as expanding symmetry or unfolding symmetry. $ Fractals appear the same at different levels, as in the Mandelbrot Set. $ If this replication is exactly the same at every scale, as in the Menger Sponge it is called affine self-similar. $ Fractal geometry lies within the mathematical branch of measure theory.`,
        `The Mandelbrot Set is the set of complex numbers c for which the function $ fc(z)=z^2+c does not diverge when iterated from z=0, $ for which the sequence fc(0), fc(fc(0)), ... remains bounded in absolute value. $ Its definition is credited to Adrien Douady who named it in tribute to the mathematician Benoit Mandelbrot, a pioneer of fractal geometry.`,
        `The Julia set and The Fatou set are two complementary sets, Julia-"laces" Fatou-"dusts", defined from a function. $ The Fatou set of the function consists of values with the property that all nearby values behave similarly under repeated iteration of the function. $ The Julia set consists of values such that an arbitrarily small perturbation can cause drastic changes in the sequence of iterated function values. $ Thus the behavior of the function on the Fatou set is "regular", while on the Julia set its behavior is "chaotic".`,
    ];
    const anchor = [
        'https://en.wikipedia.org/wiki/Fractal',
        'http://paulbourke.net/fractals/mandelbrot/',
        'http://paulbourke.net/fractals/juliaset/',
    ];

    const src = `animate/index.html?theme=${getHexTheme[theme.mode]}&color=${
        getHexColor[theme.color]
    }&animate=${type}&themeType=${theme.mode}&colorType=${theme.color}`;

    const markup = `
    <div class="chat-box-animate">
        <div class="chat-box-animate--container">
            <div class="chat-box-animate--frame">
                <iframe class="chat-box-animate--editor" scrolling="no" frameborder="0" src="${src}"></iframe>
            </div>
            <div class="chat-box-animate--title">
                <a href="${anchor[index]}"  class="chat-box-animate--anchor" target="_blank">${title[index]}</a>
            </div>
            <div class="chat-box-animate--content">
                ${content[index].replaceAll('$', '<br/>').trim()}
            </div>
        </div>
    </div>
    `;
    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
    // Focus
    select(elementStrings.chatBox.animate.iframe).contentDocument.body.focus();
};

export const renderUser = ({ _id, photo, name, status }) => {
    const markup = `
    <div class="chat-box-user" data-user="${_id}">
        <header class="chat-box-user__header">
            <div class="chat-box-user__header--back" title="Go back">
                <svg class="chat-box-user__header--back-svg">
                    <use xlink:href="svg/sprite.svg#icon-back"></use>
                </svg>
            </div>
            <img src=${photo} alt="" class="chat-box-user__header--img" title="View Profile"/>
            <div class="chat-box-user__header--content">
                <div class="chat-box-user__header--content-name">${name}</div>
                <div class="chat-box-user__header--content-status">${status}</div>
            </div>
            <div class="chat-box-user__header--options" title="User Options">
                <svg class="chat-box-user__header--options-svg">
                <use xlink:href="svg/sprite.svg#icon-dots"></use>
                </svg>
            </div>
        </header>
        <div class="chat-box-user__field">
            <main class="chat-box-user__main">
            <div class="chat-box-user__main--container">
                    <!--
                    <div class="chat-box-user__main--date-fix" title="Conversation Date">
                        <span class="chat-box-user__main--date-fix-span">${longDate(Date.now())}</span>
                    </div>
                    -->
                    <ul class="chat-box-user__main--list">

                    </ul>
                </div>
            </main>
            <footer class="chat-box-user__footer">
                <form class="chat-box-user__footer--form"> 
                    <div class="chat-box-user__footer--container">
                        <div class="chat-box-user__footer--emoji" title="Add Emoji">
                            <svg class="chat-box-user__footer--emoji-svg">
                                <use xlink:href="svg/sprite.svg#icon-emoji"></use>
                            </svg>
                        </div>
                        <div contentEditable="true" class="chat-box-user__footer--input" spellcheck="false" autocomplete="off" data-placeholder="Type a message"></div>
                        <div class="chat-box-user__footer--location" title="Send Location">
                            <svg class="chat-box-user__footer--location-svg">
                                <use xlink:href="svg/sprite.svg#icon-location"></use>
                            </svg>
                        </div>
                        <div class="chat-box-user__footer--attach" title="Attach File">
                            <svg class="chat-box-user__footer--attach-svg">
                                <use xlink:href="svg/sprite.svg#icon-attach"></use>
                            </svg>
                        </div>
                        <div class="chat-box-user__footer--camera" title="View Camera">
                            <svg class="chat-box-user__footer--camera-svg">
                                <use xlink:href="svg/sprite.svg#icon-camera"></use>
                            </svg>
                        </div>
                    </div>
                    <button class="chat-box-user__footer--send" title="Send Message">
                        <svg class="chat-box-user__footer--send-svg">
                            <use xlink:href="svg/sprite.svg#icon-send"></use>
                        </svg>
                    </button>
                </form>
            </footer>
        </div>
    </div>
`;

    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
};
const renderMessageIn = ({ content, createdAt }) => `
<li class="chat-box-user__main--item">
    <div class="chat-box-user__main--message">
        <div class="chat-box-user__main--message-in">
            <div class="chat-box-user__drop-in" title="Message Options">
                <svg class="chat-box-user__drop-in--svg">
                    <use xlink:href="svg/sprite.svg#icon-down"></use>
                </svg>
            </div>
            <span class="chat-box-user__main--message-in-span">${content}</span>
            <span class="chat-box-user__main--message-in-info">
                ${shortDate(createdAt)}
            </span>
        </div>
    </div>
</li>
`;

const renderMessageOut = ({ content, createdAt }) => `
<li class="chat-box-user__main--item">
    <div class="chat-box-user__main--message">
        <div class="chat-box-user__main--message-out">
            <div class="chat-box-user__drop-out" title="Message Options">
                <svg class="chat-box-user__drop-out--svg">
                    <use xlink:href="svg/sprite.svg#icon-down"></use>
                </svg>
            </div>
            <span class="chat-box-user__main--message-out-span">${content}
            </span>
            <span class="chat-box-user__main--message-out-info">
                <span class="chat-box-user__main--message-out-info--time">
                ${shortDate(createdAt)}
                </span>
                <!-- sent, delivered, seen -->
                <svg class="chat-box-user__main--message-out-info--svg chat-box-user__main--message-out-info--svg-delivered" title="Delivered">
                    <use xlink:href="svg/sprite.svg#icon-delivered"></use>
                </svg>
            </span>
        </div>
    </div>
</li>
`;

const renderMessageDate = () => `
    <li class="chat-box-user__main--item">
        <div class="chat-box-user__main--message">
            <div class="chat-box-user__main--date" title="Conversation Date">
                <span class="chat-box-user__main--date-span">${longDate(Date.now())}</span>
            </div>
        </div>
    </li>`;

export const renderMessageLinks = () => {
    // const reg = new RegExp(
    //     '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?'
    // );
    // console.log(reg.test('https://web.whatsapp.com'));
    // console.log('https://web.whatsapp.com'.match(reg));
};

const extractOtherUser = (user, item) => {
    let newItem = {};
    switch (user._id) {
        case item.from._id:
            newItem = { ...item, mode: 'out' };
            break;
        case item.to._id:
            newItem = { ...item, mode: 'in' };
            break;
    }
    return newItem;
};

export const extractData = (data, user) => {
    return data.map(item => {
        // Getting user
        const newItem = extractOtherUser(user, item);
        return newItem;
    });
};

export const determineMode = item => {
    let template = '';
    switch (item.mode) {
        case 'in':
            template = renderMessageIn(item);
            break;
        case 'out':
            template = renderMessageOut(item);
            break;
    }
    return template;
};

export const renderMessages = ({ data }, user) => {
    // Parse Data
    const parseData = extractData(data, user);

    const markup = parseData.map(item => determineMode(item)).join('');

    const list = select(elementStrings.chatBox.main.list);
    list.insertAdjacentHTML('beforeend', markup);
    scroll(list);
};

export const scroll = element => {
    element.scrollTop = element.scrollHeight - element.scrollTop;
};

export const renderDrag = () => {
    const markup = `
    <div class="chat-box-drag">
        <div class="chat-box-drag--container">
            <svg class="chat-box-drag--svg">
                <use xlink:href="svg/sprite.svg#icon-drag"></use>
            </svg>
            <div class="chat-box-drag--content">Drop here to start chat. <span class="chat-box-drag--classifier"> ${bold(
                capitalize('')
            )}</span></div>
        </div>
    </div>
    `;
    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
};
