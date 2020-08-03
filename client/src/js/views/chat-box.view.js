import state from '../state';
import { elements } from '../utils/base.util';
import faker from 'faker';

export const clearChatBox = () => (elements.ChatBox.innerHTML = '');

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
    elements.ChatBox.insertAdjacentHTML('beforeend', markup);
};

export const renderEmpty = () => {
    const markup = `
    <div class="chat-box-null">
        <div class="chat-box-null--container">
            <div class="chat-box-null--svg">
                <svg>
                    <use xlink:href="svg/themes/null.svg#icon-null-${state.theme.theme}"></use>
                </svg>
            </div>
            <div class="chat-box-null--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    elements.ChatBox.insertAdjacentHTML('beforeend', markup);
};
export const renderIdeal = () => {
    const markup = `
    <div class="chat-box-ideal">
        <div class="chat-box-ideal--container">
            <div class="chat-box-ideal--svg">
                <svg>
                <use xlink:href="svg/themes/ideal.svg#icon-ideal-${state.theme.theme}"></use>
                </svg>
            </div>
            <div class="chat-box-ideal--title">
                No one's around to play with Wumpus.
            </div>
        </div>
    </div>
    `;
    elements.ChatBox.insertAdjacentHTML('beforeend', markup);
};
export const renderUser = () => {
    const date = '2020-08-01T00:00:00.000+00:00';

    const messageIn = () => `
    <li class="chat-box-user__main--item">
        <div class="chat-box-user__main--message">
            <div class="chat-box-user__main--message-in">
                <div class="chat-box-user__drop-in">
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
                <div class="chat-box-user__drop-out">
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
                    <svg class="chat-box-user__main--message-out-info--svg chat-box-user__main--message-out-info--svg-delivered">
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

            <div class="chat-box-user__header--back">
                <svg class="chat-box-user__header--back-svg">
                <use xlink:href="svg/sprite.svg#icon-arrow-left"></use>
                </svg>
            </div>

            <img src=${faker.image.avatar()} alt="" class="chat-box-user__header--img" />

            <div class="chat-box-user__header--content">
                <div class="chat-box-user__header--content-name">${faker.name.findName()}</div>
                <div class="chat-box-user__header--content-status">online</div>
            </div>


            <div class="chat-box-user__header--options">
                <svg class="chat-box-user__header--options-svg">
                <use xlink:href="svg/sprite.svg#icon-dots-three-vertical"></use>
                </svg>
            </div>
        
        </header>
        <div class="chat-box-user__field" style="background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url('img/background-image/chat-box-user.jpg')">
            <main class="chat-box-user__main">
                <div class="chat-box-user__main--date-fix">
                    <span class="chat-box-user__main--date-fix-span">${new Date(date).toLocaleDateString([], {
                        dateStyle: 'long',
                        // weekday: 'short',
                        // month: 'short',
                        // year: 'numeric',
                        // day: 'numeric',
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
                                <div class="chat-box-user__main--date">
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
                                <div class="chat-box-user__drop-out">
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
                                    <svg class="chat-box-user__main--message-out-info--svg chat-box-user__main--message-out-info--svg-seen">
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
                        <div class="chat-box-user__footer--emoji">
                            <svg class="chat-box-user__footer--emoji-svg">
                                <use xlink:href="svg/sprite.svg#icon-emoji"></use>
                            </svg>
                        </div>
                        <textarea rows="1" type="text" class="chat-box-user__footer--input" spellcheck="false" placeholder="Type a message"></textarea>
                        <div class="chat-box-user__footer--location">
                            <svg class="chat-box-user__footer--location-svg">
                                <use xlink:href="svg/sprite.svg#icon-location"></use>
                            </svg>
                        </div>
                        <div class="chat-box-user__footer--attach">
                            <svg class="chat-box-user__footer--attach-svg">
                                <use xlink:href="svg/sprite.svg#icon-attach"></use>
                            </svg>
                        </div>
                        <div class="chat-box-user__footer--camera">
                            <svg class="chat-box-user__footer--camera-svg">
                                <use xlink:href="svg/sprite.svg#icon-camera"></use>
                            </svg>
                        </div>
                    </div>
                    <button class="chat-box-user__footer--send">
                        <svg class="chat-box-user__footer--send-svg">
                            <use xlink:href="svg/sprite.svg#icon-send"></use>
                        </svg>
                    </button>
                </form>
            </footer>
        </div>
    </div>
`;

    elements.ChatBox.insertAdjacentHTML('beforeend', markup);
    setTimeout(() => {
        const chatBoxList = document.querySelector('.chat-box-user__main--list');
        chatBoxList.scrollTop = chatBoxList.scrollHeight - chatBoxList.scrollTop;
    }, 1000);
    // chatBoxList.scrollTop = chatBoxList.scrollHeight;
    // console.log(chatBoxList.scrollTop);
};
