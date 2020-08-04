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
        case mode.chatProfile.myProfile:
            myProfile();
            break;
    }
};
const myProfile = () => {
    // Render Profile
    chatProfileView.renderMyProfile();
    // Add Event Listeners
};
