import state from '../state';
// Utils
import { mode } from '../utils/base.util';
// Models
import ChatProfile from '../models/ChatProfile';
// Views
import * as chatProfileView from '../views/chat-profile.view';

export const controlChatProfile = info => {
    // Init Chat Profile
    if (!state.chatProfile) state.chatProfile = new ChatProfile(info);
    state.chatProfile.setMode(info.mode);

    // Prepare UI
    chatProfileView.clearChatProfile();

    switch (info.mode) {
        case mode.chatProfile.stranger:
            stranger();
            break;
        case mode.chatProfile.friend:
            friend();
            break;
        case mode.chatProfile.user:
            user();
            break;
    }
};

const stranger = () => {
    // Render Stranger
    chatProfileView.renderStranger();
    // Add Event Listeners
};

const friend = () => {
    // Render Friend
    chatProfileView.renderFriend();
    // Add Event Listeners
};

const user = () => {
    // Render Profile
    chatProfileView.renderUser();
    // Add Event Listeners
};
