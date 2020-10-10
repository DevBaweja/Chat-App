import state from '../state';
// Utils
import { mode, elementStrings, select, selectAll } from '../utils/base.util';
// Controllers
import * as chatProfileUserController from './chat-profile/chat-profile-user.controller';
// Models
import ChatProfile from '../models/ChatProfile';
// Views
import * as chatProfileView from '../views/chat-profile.view';
import * as chatProfileStrangerView from '../views/chat-profile/chat-profile-stranger.view';
import * as chatProfileFriendView from '../views/chat-profile/chat-profile-friend.view';
import * as chatProfileUserView from '../views/chat-profile/chat-profile-user.view';
import * as chatProfileSettingView from '../views/chat-profile/chat-profile-setting.view';

export const controlChatProfile = info => {
    // Init Chat Profile
    if (!state['chatProfile']) state['chatProfile'] = new ChatProfile(info);
    state['chatProfile'].setMode(info.mode);

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

const stranger = () => {
    // Render Stranger
    chatProfileStrangerView.renderStranger();
    // Add Event Listeners
};

const friend = () => {
    // Render Friend
    chatProfileFriendView.renderFriend();
    // Add Event Listeners
};

const user = () => {
    // Getting user from state
    const { user } = state;
    // Render Profile
    chatProfileUserView.renderUser(user);
    // Add Event Listeners for pic
    select(elementStrings.chatProfile.user.pic.input).addEventListener(
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
    // Add Event Listeners
};
