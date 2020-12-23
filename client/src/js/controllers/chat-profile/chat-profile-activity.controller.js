import state from '../../state';
// Utils
import { mode, elementStrings, select } from '../../utils/base.util';
// Controllers
import * as chatPanelController from '../chat-panel.controller';
import * as chatBoxController from '../chat-box.controller';
import * as chatProfileController from '../chat-profile.controller';
// Models
import SubActivity from '../../models/SubActivity';
import Animate from '../../models/Animate';
// Views
import * as chatProfileActivityView from '../../views/chat-profile/chat-profile-activity.view';

export const controlActivity = info => {
    // Init Sub Activities
    state.set('subActivity', info, SubActivity);

    // Reset chatProfile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.activitySub });

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
    // Render Animate
    chatProfileActivityView.renderAnimate();
    // Back
    select(elementStrings.chatProfile.subActivity.animate.back).addEventListener('click', () =>
        chatProfileController.controlChatProfile({ mode: mode.chatProfile.activity })
    );
    // List
    select(elementStrings.chatProfile.subActivity.animate.list).addEventListener('click', event => {
        const { target } = event;
        // Item Element
        const item = target.closest(elementStrings.chatProfile.subActivity.animate.item);
        if (!item) return;
        // Type
        const type = item.dataset.type;
        if (!type) return;

        // Init Animate State
        state.set('animate', { mode: type }, Animate);

        // Animate Type
        chatPanelController.controlChatPanel({ mode: mode.chatPanel.instruction, type });
        chatBoxController.controlChatBox({ mode: mode.chatBox.animate, type });
    });
};

const game = () => {
    console.log('Game');
};
