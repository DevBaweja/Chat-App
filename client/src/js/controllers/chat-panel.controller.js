import state from '../state';
// Utils
import { elementStrings, mode, select } from '../utils/base.util';
// Controllers
import * as chatBoxController from '../controllers/chat-box.controller';
// Models
import ChatPanel from '../models/ChatPanel';
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

const empty = () => {
    // Render Empty
    chatPanelView.renderEmpty();
};
const ideal = () => {
    // Render Ideal
    chatPanelView.renderIdeal();
};

const recentChat = () => {
    console.log('Recent Chat');
    // Render Recent Chat
    chatPanelRecentChatView.renderRecentChat();

    // Add Event Listeners
    const list = select(elementStrings.chatPanel.recentChat.list);

    // Drag Start
    list.addEventListener('dragstart', event => {
        const { target } = event;
        // Getting item
        const item = target.closest(elementStrings.chatPanel.recentChat.item);
        if (!item) return;
        // Getting user
        const user = item.dataset.user;
        if (!user) return;
        // Saving user
        event.dataTransfer.setData('user', user);
        // Drag Mode of chat box
        chatBoxController.controlChatBox({ mode: mode.chatBox.drag, data: { user: user } });
    });
    // Drag End
    list.addEventListener('dragend', () => {
        if (state['chatBox'].mode === mode.chatBox.drag) chatBoxController.controlChatBox({ mode: mode.chatBox.empty });
    });

    // Click
    list.addEventListener('click', event => {
        const { target } = event;
        // Don't do anything in case of drop
        if (target.matches(`${elementStrings.drops.chatPanelDrop}, ${elementStrings.drops.chatPanelDrop} *`)) return;
        // Getting item
        const item = target.closest(elementStrings.chatPanel.recentChat.item);
        if (!item) return;
        // Getting user
        const user = item.dataset.user;
        if (!user) return;
        // Remove Selected
        chatPanelView.removeSelected();
        // Add Selected
        chatPanelView.addSelected(item);
        // User Mode of Chat Box
        chatBoxController.controlChatBox({
            mode: mode.chatBox.user,
            data: { user: user },
        });
    });
};

const activeNow = () => {
    console.log('Active Now');
    // Render Active Now
    chatPanelActiveNowView.renderActiveNow();
};

const search = () => {
    console.log('Search');
    // Render Search
    chatPanelSearchView.renderSearch();
};

const friend = () => {
    console.log('Friend');
    // Render Friend
    chatPanelFriendView.renderFriend();
};

const requestSent = async () => {
    console.log('Request Sent');

    //  Init SentRequest
    if (!state['sentRequest']) state['sentRequest'] = new SentRequest();
    try {
        // Making API call
        const data = await state['sentRequest'].getAllSendRequest();
        switch (data.status) {
            case 'success':
                {
                    // Render Request Sent
                    chatPanelRequestSentView.renderRequestSent(data.data);
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

const requestReceive = async () => {
    console.log('Request Receive');

    //  Init ReceiveRequest
    if (!state['receiveRequest']) state['receiveRequest'] = new ReceiveRequest();
    try {
        // Making API call
        const data = await state['receiveRequest'].getAllReceiveRequest();
        switch (data.status) {
            case 'success':
                {
                    // Render Request Receive
                    chatPanelRequestReceiveView.renderRequestReceive(data.data);
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};
