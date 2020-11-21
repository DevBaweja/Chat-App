import state from '../state';
// Utils
import { mode, elementStrings, select, selectAll } from '../utils/base.util';
// Controllers
import * as chatProfileUserController from './chat-profile/chat-profile-user.controller';
import * as chatProfileSettingController from './chat-profile/chat-profile-setting.controller';
// Models
import ChatProfile from '../models/ChatProfile';
// Views
import * as chatProfileView from '../views/chat-profile.view';
import * as chatProfileReceiveRequestView from '../views/chat-profile/chat-profile-receive-request.view';
import * as chatProfileSentRequestView from '../views/chat-profile/chat-profile-sent-request.view';

import * as chatProfileStrangerView from '../views/chat-profile/chat-profile-stranger.view';
import * as chatProfileFriendView from '../views/chat-profile/chat-profile-friend.view';
import * as chatProfileUserView from '../views/chat-profile/chat-profile-user.view';
import * as chatProfileSettingView from '../views/chat-profile/chat-profile-setting.view';

export const controlChatProfile = info => {
    // Init Chat Profile
    state.set('chatProfile', info, ChatProfile);

    // Prepare UI
    chatProfileView.clearChatProfile();

    switch (info.mode) {
        case mode.chatProfile.ideal:
            ideal();
            break;
        case mode.chatProfile.empty:
            empty();
            break;
        case mode.chatProfile.stranger:
            stranger(info);
            break;
        case mode.chatProfile.friend:
            friend();
            break;
        case mode.chatProfile.sentRequest:
            sentRequest(info);
            break;
        case mode.chatProfile.receiveRequest:
            receiveRequest(info);
            break;
        case mode.chatProfile.user:
            user();
            break;
        case mode.chatProfile.setting:
            setting();
            break;
    }
};

// ! For Development
window.controlChatProfile = controlChatProfile;

const ideal = () => {};
const empty = () => {};

const stranger = ({ data }) => {
    // Getting user
    const { user } = data;
    // Render Stranger
    chatProfileStrangerView.renderStranger(user);
    // Add Event Listeners
    select(elementStrings.chatProfile.stranger.sendRequest).addEventListener('click', () => {
        console.log('Send Request');
        // Getting data
        const { data } = state['relation'];
        // Getting other
        const { other } = data.data;
        // Mode of Chat Profile
        controlChatProfile({
            mode: mode.chatProfile.sentRequest,
            data: { user: other },
        });
    });
};

const friend = () => {
    // Render Friend
    chatProfileFriendView.renderFriend();
    // Add Event Listeners
    // Send Message
    select(elementStrings.chatProfile.friend.sendMessage).addEventListener('click', () => {
        console.log('Send Message');
    });
    // Remove Friend
    select(elementStrings.chatProfile.friend.removeFriend).addEventListener('click', () => {
        console.log('Remove Friend');
        // Getting data
        const { data } = state['relation'];
        // Getting other
        const { other } = data.data;
        // Mode of Chat Profile
        controlChatProfile({
            mode: mode.chatProfile.stranger,
            data: { user: other },
        });
    });
};

const sentRequest = ({ data }) => {
    // Getting user
    const { user } = data;
    // Render Sent Request
    chatProfileSentRequestView.renderSentRequest(user);
    // Add Event Listeners
    // Cancel Request
    select(elementStrings.chatProfile.requestSent.cancelRequest).addEventListener('click', () => {
        console.log('Cancel Request');
        // Getting data
        const { data } = state['relation'];
        // Getting other
        const { other } = data.data;
        // Mode of Chat Profile
        controlChatProfile({
            mode: mode.chatProfile.stranger,
            data: { user: other },
        });
    });
};

const receiveRequest = ({ data }) => {
    // Getting user
    const { user } = data;
    // Render Receive Request
    chatProfileReceiveRequestView.renderReceiveRequest(user);
    // Add Event Listeners
    // Accept Request
    select(elementStrings.chatProfile.requestReceive.acceptRequest).addEventListener('click', () => {
        console.log('Accept Request');
        // Getting data
        const { data } = state['relation'];
        // Getting other
        const { other } = data.data;
        // Mode of Chat Profile
        controlChatProfile({
            mode: mode.chatProfile.friend,
            data: { user: other },
        });
    });
    // Decline Request
    select(elementStrings.chatProfile.requestReceive.declineRequest).addEventListener('click', () => {
        console.log('Decline Request');
        // Getting data
        const { data } = state['relation'];
        // Getting other
        const { other } = data.data;
        // Mode of Chat Profile
        controlChatProfile({
            mode: mode.chatProfile.stranger,
            data: { user: other },
        });
    });
};

const user = () => {
    // Getting user from state
    const { user } = state;
    // Render Profile
    chatProfileUserView.renderUser(user);
    // Add Event Listeners for content
    select(elementStrings.chatProfile.user.content.input).addEventListener(
        'input',
        chatProfileUserController.controlUpload
    );
    // Add Event Listeners for avatar
    const avatarItems = selectAll(elementStrings.chatProfile.user.avatar.group);
    avatarItems.forEach(item => item.addEventListener('click', chatProfileUserController.controlAvatar));

    // Add Event Listeners to edit field
    const editItems = selectAll(elementStrings.chatProfile.user.about.edit);
    editItems.forEach(item => item.addEventListener('click', chatProfileUserController.controlDisable));

    // Add Event Listeners for updating profile
    select(elementStrings.chatProfile.user.form).addEventListener(
        'submit',
        chatProfileUserController.controlUpdateProfile
    );
};

const setting = () => {
    // Render Setting
    chatProfileSettingView.renderSetting();
    // Add Event Listeners on list
    select(elementStrings.chatProfile.setting.list).addEventListener('click', event => {
        const { target } = event;
        // Item Element
        const item = target.closest(elementStrings.chatProfile.setting.item);
        if (!item) return;

        // Type
        const type = item.dataset.type;
        if (!type) return;
        chatProfileSettingController.controlSetting({ mode: type });
    });
};
