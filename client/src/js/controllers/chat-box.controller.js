import state from '../state';
// Utils
import { elementStrings, mode, select } from '../utils/base.util';
// Controllers
import * as backgroundImageController from './background-image.controller';
// Models
import ChatBox from '../models/ChatBox';
// Views
import * as chatPanelView from '../views/chat-panel.view';
import * as chatBoxView from '../views/chat-box.view';

export const controlChatBox = info => {
    // Init Chat Box
    state.set('chatBox', info, ChatBox);

    // Prepare UI
    chatBoxView.clearChatBox();

    switch (info.mode) {
        case mode.chatBox.ideal:
            ideal();
            break;
        case mode.chatBox.empty:
            empty();
            break;
        case mode.chatBox.user:
            user();
            break;
        case mode.chatBox.drag:
            drag(info);
            break;
    }
};

// ! For Development
window.controlChatBox = controlChatBox;

const ideal = () => {
    // Getting theme from state
    const theme = state['theme'];
    // Render Ideal
    chatBoxView.renderIdeal(theme.color);
};
const empty = () => {
    // Getting theme from state
    const theme = state['theme'];
    // Render Empty
    chatBoxView.renderEmpty(theme.color);
};
const user = () => {
    // Getting theme, backgroundImage from state
    const { wallpaper } = state['setting'];
    // Render User
    chatBoxView.renderUser();

    // Render Background Image
    backgroundImageController.controlBackgroundImage({ mode: wallpaper[state['theme'].mode] });

    // Add Event Listeners
    select(elementStrings.chatBox.header.back).addEventListener('click', () => {
        // Remove Selected
        chatPanelView.removeSelected();
        // Render Empty
        controlChatBox({ mode: mode.chatBox.empty });
    });
};
const drag = ({ data }) => {
    // Render Drag
    chatBoxView.renderDrag(data);
    // Add Event Listeners
    // To make it dropable elements
    const dropable = select(elementStrings.drags.chatPanelDrag);

    dropable.addEventListener('dragover', event => {
        event.preventDefault();
    });
    dropable.addEventListener('drop', event => {
        const user = event.dataTransfer.getData('user');
        // Model
        if (!user) return;

        controlChatBox({
            mode: mode.chatBox.user,
            data: { user: user },
        });
        // Remove Selected
        chatPanelView.removeSelected();
        // Getting Item
        const item = select(`${elementStrings.chatPanel.recentChat.item}[data-user="${user}"]`);
        if (!item) return;
        // Add Selected
        chatPanelView.addSelected(item);
    });
};
