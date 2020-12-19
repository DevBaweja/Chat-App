import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Controllers
import * as chatBoxController from '../chat-box.controller';
import * as chatProfileController from '../chat-profile.controller';
// Models
import SubActivity from '../../models/SubActivity';

export const controlActivity = info => {
    // Init Sub Activities
    state.set('subActivity', info, SubActivity);

    // Reset chatProfile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.activity });

    switch (info.mode) {
        case mode.activity.animate:
            animate();
            break;
        case mode.activity.game:
            game();
            break;
    }
};

// ! For Development
window.controlActivity = controlActivity;

const animate = () => {
    console.log('Animate');
    chatBoxController.controlChatBox({ mode: mode.chatBox.ideal });
};

const game = () => {
    console.log('Game');
};
