import state from '../state';
// Utils
import { elementStrings, elementClasses, mode, select, debounce } from '../utils/base.util';
// Controllers
import * as chatBoxController from '../controllers/chat-box.controller';
import * as chatProfileController from '../controllers/chat-profile.controller';
// Models
import ChatPanel from '../models/ChatPanel';
import Search from '../models/Search';
import Relation from '../models/Relation';
import Friend from '../models/Friend';
import SentRequest from '../models/SentRequest';
import ReceiveRequest from '../models/ReceiveRequest';
// Views
import * as chatPanelView from '../views/chat-panel.view';
import * as chatPanelActiveNowView from '../views/chat-panel/chat-panel-active-now.view';
import * as chatPanelRecentChatView from '../views/chat-panel/chat-panel-recent-chat.view';
import * as chatPanelSearchView from '../views/chat-panel/chat-panel-search.view';
import * as chatPanelFriendView from '../views/chat-panel/chat-panel-friend.view';
import * as chatPanelRequestSentView from '../views/chat-panel/chat-panel-request-sent.view';
import * as chatPanelRequestReceiveView from '../views/chat-panel/chat-panel-request-receive.view';

export const controlChatPanel = info => {
    // Init Chat Panel
    state.set('chatPanel', info, ChatPanel);

    // Prepare UI
    chatPanelView.clearChatPanel();

    switch (info.mode) {
        case mode.chatPanel.ideal:
            ideal();
            break;
        case mode.chatPanel.empty:
            empty();
            break;
        case mode.chatPanel.user.activeNow:
            activeNow();
            break;
        case mode.chatPanel.user.recentChat:
            recentChat();
            break;
        case mode.chatPanel.user.search:
            search();
            break;
        case mode.chatPanel.user.friend:
            friend();
            break;
        case mode.chatPanel.user.requestSent:
            requestSent();
            break;
        case mode.chatPanel.user.requestReceive:
            requestReceive();
            break;
    }
};

// ! For Development
window.controlChatPanel = controlChatPanel;

const controlChatPanelItem = (event, itemClass, selectedClass) => {
    const { target } = event;
    // Don't do anything in case of drop
    if (target.matches(`${elementStrings.drops.chatPanelDrop}, ${elementStrings.drops.chatPanelDrop} *`)) return;
    // Getting item
    const itemElement = target.closest(itemClass);
    if (!itemElement) return;
    // Getting user
    const user = JSON.parse(itemElement.dataset.user);
    if (!user) return;
    // Remove Selected
    chatPanelView.removeSelected(itemClass, selectedClass);
    // Add Selected
    chatPanelView.addSelected(itemElement, selectedClass);
    // User Mode of Chat Box
    chatBoxController.controlChatBox({
        mode: mode.chatBox.user,
        data: { user: user },
    });
};

const controlChatPanelPartialItem = async (event, itemClass, modeType) => {
    const { target } = event;
    // Getting item
    const itemElement = target.closest(itemClass);
    if (!itemElement) return;
    // Getting user
    const user = itemElement.dataset.user;
    if (!user) return;

    //  Init Relation
    if (!state['relation']) state['relation'] = new Relation({ user });
    state['relation'].setUserInput({ user });

    try {
        // Making API call
        const data = await state['relation'].getRelation();
        switch (data.status) {
            case 'success':
                {
                    // Getting data
                    const { data } = state['relation'];
                    // Mode of Chat Profile
                    chatProfileController.controlChatProfile({
                        mode: modeType || data.relation,
                    });
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

const empty = () => {
    // Render Empty
    chatPanelView.renderEmpty();
};
const ideal = () => {
    // Render Ideal
    chatPanelView.renderIdeal();
};

const eventListeners = (listClass, itemClass, selectedClass) => {
    const list = select(listClass);
    // Click
    list.addEventListener('click', event => controlChatPanelItem(event, itemClass, selectedClass));

    // Drag Start
    list.addEventListener('dragstart', event => {
        const { target } = event;
        // Getting item
        const item = target.closest(itemClass);
        if (!item) return;
        // Getting user
        const user = item.dataset.user;
        if (!user) return;
        // Saving user
        event.dataTransfer.setData('user', user);
        // event.dataTransfer.setData('itemClass', itemClass);
        // event.dataTransfer.setData('selectedClass', selectedClass);

        // Drag Mode of chat box
        chatBoxController.controlChatBox({ mode: mode.chatBox.drag });
    });
    // Drag End
    list.addEventListener('dragend', () => {
        if (state['chatBox'].mode === mode.chatBox.drag) chatBoxController.controlChatBox({ mode: mode.chatBox.empty });
    });
};

const recentChat = async () => {
    console.log('Recent Chat');
    // Render Ideal Loading
    controlChatPanel({ mode: mode.chatPanel.ideal });
    //  Init Friend
    if (!state['friend']) state['friend'] = new Friend();
    try {
        // Making API call
        const data = await state['friend'].getAllFriend();
        switch (data.status) {
            case 'success':
                {
                    // Getting user
                    const user = state['user'];
                    // Prepare UI
                    chatPanelView.clearChatPanel();
                    // Render Recent Chat
                    chatPanelRecentChatView.renderRecentChat(data.data, user);
                    // Add Event Listeners
                    eventListeners(
                        elementStrings.chatPanel.recentChat.list,
                        elementStrings.chatPanel.recentChat.item,
                        elementClasses.selected.chatPanel.recentChat
                    );
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

const activeNow = async () => {
    console.log('Active Now');
    // Render Ideal Loading
    controlChatPanel({ mode: mode.chatPanel.ideal });
    //  Init Friend
    if (!state['friend']) state['friend'] = new Friend();
    try {
        // Making API call
        const data = await state['friend'].getAllFriend();
        switch (data.status) {
            case 'success':
                {
                    // Getting user
                    const user = state['user'];
                    // Prepare UI
                    chatPanelView.clearChatPanel();
                    // Render Active Now
                    chatPanelActiveNowView.renderActiveNow(data.data, user);
                    // Add Event Listeners
                    eventListeners(
                        elementStrings.chatPanel.activeNow.list,
                        elementStrings.chatPanel.activeNow.item,
                        elementClasses.selected.chatPanel.activeNow
                    );
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

const controlSearch = async event => {
    event.preventDefault();
    // 0) Prepare UI for changes
    chatPanelSearchView.clearSearch();
    // 1) Getting user inputs
    const inputs = chatPanelSearchView.getUserInput();
    // 2) Checking user inputs
    // { name }
    if (!inputs.name) return;

    // 3) Init Search
    if (!state['search']) state['search'] = new Search({ ...inputs });
    state['search'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['search'].getSearch();
        switch (data.status) {
            case 'success':
                {
                    // Render Search Results
                    chatPanelSearchView.renderSearchResult(data.data, inputs['name']);
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
        // 1) Initial UI
    }
};

const search = () => {
    console.log('Search');
    // Render Search
    chatPanelSearchView.renderSearch();
    // Adding event listener to form submit
    select(elementStrings.forms.search.form).addEventListener('submit', controlSearch);
    // select(elementStrings.forms.search.form).addEventListener('keyup', throttle(controlSearch));
    // Debouncing
    select(elementStrings.forms.search.form).addEventListener('keyup', debounce(controlSearch));

    // Add Event Listeners
    const list = select(elementStrings.chatPanel.search.list);
    // Click
    list.addEventListener(
        'click',
        async event => await controlChatPanelPartialItem(event, elementStrings.chatPanel.search.item)
    );
};

const friend = async () => {
    console.log('Friend');
    // Render Ideal Loading
    controlChatPanel({ mode: mode.chatPanel.ideal });
    //  Init Friend
    if (!state['friend']) state['friend'] = new Friend();
    try {
        // Making API call
        const data = await state['friend'].getAllFriend();
        switch (data.status) {
            case 'success':
                {
                    // Getting user
                    const user = state['user'];
                    // Prepare UI
                    chatPanelView.clearChatPanel();
                    // Render Friend
                    chatPanelFriendView.renderFriend(data.data, user);
                    // Add Event Listeners
                    eventListeners(
                        elementStrings.chatPanel.friend.list,
                        elementStrings.chatPanel.friend.item,
                        elementClasses.selected.chatPanel.friend
                    );
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

const requestSent = async () => {
    console.log('Request Sent');
    // Render Ideal Loading
    controlChatPanel({ mode: mode.chatPanel.ideal });
    //  Init SentRequest
    if (!state['sentRequest']) state['sentRequest'] = new SentRequest();
    try {
        // Making API call
        const data = await state['sentRequest'].getAllSendRequest();
        switch (data.status) {
            case 'success':
                {
                    // Prepare UI
                    chatPanelView.clearChatPanel();
                    // Render Request Sent
                    chatPanelRequestSentView.renderRequestSent(data.data);
                    // Add Event Listeners
                    const list = select(elementStrings.chatPanel.requestSent.list);
                    // Click
                    list.addEventListener(
                        'click',
                        async event =>
                            await controlChatPanelPartialItem(
                                event,
                                elementStrings.chatPanel.requestSent.item,
                                mode.chatProfile.sentRequest
                            )
                    );
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

const requestReceive = async () => {
    console.log('Request Receive');
    // Render Ideal Loading
    controlChatPanel({ mode: mode.chatPanel.ideal });
    //  Init ReceiveRequest
    if (!state['receiveRequest']) state['receiveRequest'] = new ReceiveRequest();
    try {
        // Making API call
        const data = await state['receiveRequest'].getAllReceiveRequest();
        switch (data.status) {
            case 'success':
                {
                    // Prepare UI
                    chatPanelView.clearChatPanel();
                    // Render Request Receive
                    chatPanelRequestReceiveView.renderRequestReceive(data.data);
                    // Add Event Listeners
                    const list = select(elementStrings.chatPanel.requestReceive.list);
                    // Click
                    list.addEventListener(
                        'click',
                        async event =>
                            await controlChatPanelPartialItem(
                                event,
                                elementStrings.chatPanel.requestReceive.item,
                                mode.chatProfile.receiveRequest
                            )
                    );
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};
