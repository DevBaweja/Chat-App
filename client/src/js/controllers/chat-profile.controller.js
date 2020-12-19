import state from '../state';
// Utils
import { mode, elementStrings, select, selectAll } from '../utils/base.util';
// Controllers
import * as chatProfileUserController from './chat-profile/chat-profile-user.controller';
import * as chatProfileSettingController from './chat-profile/chat-profile-setting.controller';
// Models
import ChatProfile from '../models/ChatProfile';
import Friend from '../models/Friend';
import SentRequest from '../models/SentRequest';
import ReceiveRequest from '../models/ReceiveRequest';
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
            stranger();
            break;
        case mode.chatProfile.friend:
            friend();
            break;
        case mode.chatProfile.sentRequest:
            sentRequest();
            break;
        case mode.chatProfile.receiveRequest:
            receiveRequest();
            break;
        case mode.chatProfile.user:
            user();
            break;
        case mode.chatProfile.setting:
            setting();
            break;
        case mode.chatProfile.activity:
            activity();
            break;
    }
};

// ! For Development
window.controlChatProfile = controlChatProfile;

const ideal = () => {};
const empty = () => {};

const stranger = () => {
    // Getting data
    const { data } = state['relation'];
    // Getting other
    const { other } = data.data;
    // Render Stranger
    chatProfileStrangerView.renderStranger(other);
    // Add Event Listeners
    select(elementStrings.chatProfile.stranger.sendRequest).addEventListener('click', async () => {
        console.log('Send Request');
        // Getting user
        const user = chatProfileView.getUserForm(elementStrings.forms.stranger.form);
        if (!user) return;

        //  Init SentRequest
        if (!state['sentRequest']) state['sentRequest'] = new SentRequest();
        state['sentRequest'].setUserInput({ user });
        try {
            // Making API call
            const data = await state['sentRequest'].createSendRequest();
            switch (data.status) {
                case 'success':
                    {
                        // Mode of Chat Profile
                        controlChatProfile({
                            mode: mode.chatProfile.sentRequest,
                        });
                    }
                    break;
            }
        } catch (err) {
            console.log('ERROR', err.message);
        }
    });
};

const friend = () => {
    // Getting data
    const { data } = state['relation'];
    // Getting other
    const { other } = data.data;
    // Render Friend
    chatProfileFriendView.renderFriend(other);
    // Add Event Listeners
    // Send Message
    select(elementStrings.chatProfile.friend.sendMessage).addEventListener('click', () => {
        console.log('Send Message');
        // Chat Box
    });
    // Remove Friend
    select(elementStrings.chatProfile.friend.removeFriend).addEventListener('click', () => {
        console.log('Remove Friend');
        // Mode of Chat Profile
        controlChatProfile({
            mode: mode.chatProfile.stranger,
        });
    });
};

const sentRequest = () => {
    // Getting data
    const { data } = state['relation'];
    // Getting other
    const { other } = data.data;
    // Render Sent Request
    chatProfileSentRequestView.renderSentRequest(other);
    // Add Event Listeners
    // Cancel Request
    select(elementStrings.chatProfile.requestSent.cancelRequest).addEventListener('click', async () => {
        console.log('Cancel Request');
        // Getting User
        const user = chatProfileView.getUserForm(elementStrings.forms.requestSent.form);
        if (!user) return;

        //  Init SentRequest
        if (!state['sentRequest']) state['sentRequest'] = new SentRequest();
        state['sentRequest'].setUserInput({ user });

        try {
            // Making API call
            const data = await state['sentRequest'].deleteSentRequest();
            switch (data.status) {
                case 'success':
                    {
                    }
                    break;
            }
            // Mode of Chat Profile
            controlChatProfile({
                mode: mode.chatProfile.stranger,
            });
        } catch (err) {
            console.log('ERROR', err.message);
        }
    });
};

const receiveRequest = () => {
    // Getting data
    const { data } = state['relation'];
    // Getting other
    const { other } = data.data;
    // Render Receive Request
    chatProfileReceiveRequestView.renderReceiveRequest(other);
    // Add Event Listeners
    // Accept Request
    select(elementStrings.chatProfile.requestReceive.acceptRequest).addEventListener('click', async () => {
        console.log('Accept Request');
        // Getting User
        const user = chatProfileView.getUserForm(elementStrings.forms.requestReceive.form);
        if (!user) return;

        //  Init ReceiveRequest
        if (!state['receiveRequest']) state['receiveRequest'] = new ReceiveRequest();
        state['receiveRequest'].setUserInput({ user });

        try {
            // Making API call
            const data = await state['receiveRequest'].acceptReceiveRequest();
            switch (data.status) {
                case 'success':
                    {
                        const { data: requestData } = data.data;
                        // Getting to user
                        const { _id: user } = requestData.from;
                        // Init Friend
                        if (!state['friend']) state['friend'] = new Friend();

                        state['friend'].setUserInput({ user });

                        // Making API call
                        const friendData = await state['friend'].createFriend();
                        switch (friendData.status) {
                            case 'success':
                                {
                                    // Mode of Chat Profile
                                    controlChatProfile({
                                        mode: mode.chatProfile.friend,
                                    });
                                }
                                break;
                        }
                    }
                    break;
            }
        } catch (err) {
            console.log('ERROR', err.message);
        }
    });
    // Decline Request
    select(elementStrings.chatProfile.requestReceive.declineRequest).addEventListener('click', async () => {
        console.log('Decline Request');
        // Getting User
        const user = chatProfileView.getUserForm(elementStrings.forms.requestReceive.form);
        if (!user) return;

        //  Init ReceiveRequest
        if (!state['receiveRequest']) state['receiveRequest'] = new ReceiveRequest();
        state['receiveRequest'].setUserInput({ user });

        try {
            // Making API call
            const data = await state['receiveRequest'].declineReceiveRequest();
            switch (data.status) {
                case 'success':
                    {
                        // Mode of Chat Profile
                        controlChatProfile({
                            mode: mode.chatProfile.stranger,
                        });
                    }
                    break;
            }
        } catch (err) {
            console.log('ERROR', err.message);
        }
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

const activity = () => {
    // Render Activity
    chatProfileSettingView.renderActivity();
    // Add Event Listeners on list
    // select(elementStrings.chatProfile.setting.list).addEventListener('click', event => {
    //     const { target } = event;
    //     // Item Element
    //     const item = target.closest(elementStrings.chatProfile.setting.item);
    //     if (!item) return;

    //     // Type
    //     const type = item.dataset.type;
    //     if (!type) return;
    //     chatProfileSettingController.controlSetting({ mode: type });
    // });
};
