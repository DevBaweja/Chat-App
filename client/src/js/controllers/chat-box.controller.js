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
            drag();
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
const drag = () => {
    // Render Drag
    chatBoxView.renderDrag();
    // Add Event Listeners
    // To make it dropable elements
    const dropable = select(elementStrings.drags.chatPanelDrag);

    dropable.addEventListener('dragover', event => {
        event.preventDefault();
    });

    dropable.addEventListener('drop', event => {
        const data = event.dataTransfer;
        const user = data.getData('user');
        // const itemClass = data.getData('itemClass');
        // const selectedClass = data.getData('selectedData');
        // Model
        if (!user) return;
        controlChatBox({
            mode: mode.chatBox.user,
            data: { user: user },
        });

        // Remove Selected
        chatPanelView.removeSelected(itemClass, selectedClass);
        // Getting Item
        const itemElement = select(`.${itemClass}[data-user="${user}"]`);
        if (!itemElement) return;
        // Add Selected
        chatPanelView.addSelected(itemElement, selectedClass);
    });
};
