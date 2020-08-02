// Utils
import { mode } from '../utils/base.util';
// Views
import * as chatProfileView from '../views/chat-profile.view';

export const controlChatProfile = info => {
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
