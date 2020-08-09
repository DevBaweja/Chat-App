import { elements, select } from '../utils/base.util';
import faker from 'faker';

export const clearChatBox = () => (select(elements.ChatBox).innerHTML = '');

export const renderEmpty = ({ color }) => {
    const markup = `
    <div class="chat-box-null">
        <div class="chat-box-null--container">
            <div class="chat-box-null--svg">
                <svg>
                    <use xlink:href="svg/themes/null.svg#icon-null-${color}"></use>
                </svg>
            </div>
            <div class="chat-box-null--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
};
export const renderIdeal = ({ color }) => {
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
export const renderUser = ({ theme }) => {
    const date = '2020-08-01T00:00:00.000+00:00';

    const type = {
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
    const current = `${theme}-1`;
    const messageIn = () => `
    <li class="chat-box-user__main--item">
        <div class="chat-box-user__main--message">
            <div class="chat-box-user__main--message-in">
                <div class="chat-box-user__drop-in" title="Message Options">
                    <svg class="chat-box-user__drop-in--svg">
                        <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                    </svg>
                </div>
                <span class="chat-box-user__main--message-in-span">${faker.lorem.sentence().trim()}</span>
                <span class="chat-box-user__main--message-in-info">
                    ${new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
            </div>
        </div>
    </li>
    `;
    const reg = new RegExp(
        '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?'
    );
    console.log(reg.test('https://web.whatsapp.com'));
    console.log('https://web.whatsapp.com'.match(reg));
    const messageOut = () => `
    <li class="chat-box-user__main--item">
        <div class="chat-box-user__main--message">
            <div class="chat-box-user__main--message-out">
                <div class="chat-box-user__drop-out" title="Message Options">
                    <svg class="chat-box-user__drop-out--svg">
                        <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                    </svg>
                </div>
                <span class="chat-box-user__main--message-out-span">${faker.lorem.sentence().trim()}
                </span>
                <span class="chat-box-user__main--message-out-info">
                    <span class="chat-box-user__main--message-out-info--time">
                    ${new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
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
    const markup = `
    <div class="chat-box-user">
        <header class="chat-box-user__header">

            <div class="chat-box-user__header--back" title="Go back">
                <svg class="chat-box-user__header--back-svg">
                <use xlink:href="svg/sprite.svg#icon-back"></use>
                </svg>
            </div>

            <img src=${faker.image.avatar()} alt="" class="chat-box-user__header--img" title="View Profile"/>

            <div class="chat-box-user__header--content">
                <div class="chat-box-user__header--content-name" title="View Profile">${faker.name.findName()}</div>
                <div class="chat-box-user__header--content-status">online</div>
            </div>


            <div class="chat-box-user__header--options" title="User Options">
                <svg class="chat-box-user__header--options-svg">
                <use xlink:href="svg/sprite.svg#icon-dots-three-vertical"></use>
                </svg>
            </div>
        
        </header>
        <div class="chat-box-user__field" style="background-image: linear-gradient(to right bottom,
            ${type[current]},
            ${type[current]}),
        url('img/background-image/${current}.jpg');">
        
            <main class="chat-box-user__main">
                <div class="chat-box-user__main--date-fix" title="Conversation Date">
                    <span class="chat-box-user__main--date-fix-span">${new Date(date).toLocaleDateString([], {
                        dateStyle: 'long',
                    })}</span>
                </div>
                <div class="chat-box-user__main--container">
                    <ul class="chat-box-user__main--list">
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageIn()}
                        ${messageOut()}
                        ${messageOut()}
                        <li class="chat-box-user__main--item">
                            <div class="chat-box-user__main--message">
                                <div class="chat-box-user__main--date" title="Conversation Date">
                                    <span class="chat-box-user__main--date-span">${new Date(date).toLocaleDateString(
                                        [],
                                        {
                                            dateStyle: 'long',
                                        }
                                    )}</span>
                                </div>
                            </div>
                        </li>
                        ${messageOut()}
                        <li class="chat-box-user__main--item">
                        <div class="chat-box-user__main--message">
                            <div class="chat-box-user__main--message-out">
                                <div class="chat-box-user__drop-out" title="Message Options">
                                    <svg class="chat-box-user__drop-out--svg">
                                        <use xlink:href="svg/sprite.svg#icon-chevron-down"></use>
                                    </svg>
                                </div>
                                <span class="chat-box-user__main--message-out-span">.
                                </span>
                                <span class="chat-box-user__main--message-out-info">
                                    <span class="chat-box-user__main--message-out-info--time">
                                        ${new Date(date).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })}
                                    </span>
                                    <!-- sent, delivered, seen -->
                                    <svg class="chat-box-user__main--message-out-info--svg chat-box-user__main--message-out-info--svg-seen" title="Seen">
                                        <use xlink:href="svg/sprite.svg#icon-seen"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </li>
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
                        <textarea rows="1" type="text" class="chat-box-user__footer--input" spellcheck="false" placeholder="Type a message"></textarea>
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
    setTimeout(() => {
        const chatBoxList = select('.chat-box-user__main--list');
        chatBoxList.scrollTop = chatBoxList.scrollHeight - chatBoxList.scrollTop;
    }, 100);
    // chatBoxList.scrollTop = chatBoxList.scrollHeight;
    // console.log(chatBoxList.scrollTop);
};

export const renderDrag = ({ user }) => {
    const markup = `
    <div class="chat-box-drag">
        <div class="chat-box-drag--container">
            <svg class="chat-box-drag--svg">
                <use xlink:href="svg/sprite.svg#icon-drag"></use>
            </svg>
            <div class="chat-box-drag--content">Drop here to start chat with ${user}.</div>
        </div>
    </div>
    `;
    select(elements.ChatBox).insertAdjacentHTML('beforeend', markup);
};
