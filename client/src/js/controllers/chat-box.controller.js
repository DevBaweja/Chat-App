import state from '../state';
// Utils
import { elementStrings, mode, select } from '../utils/base.util';
// Controllers
import * as chatProfileController from './chat-profile.controller';
import * as backgroundImageController from './background-image.controller';
// Models
import ChatBox from '../models/ChatBox';
import Relation from '../models/Relation';
import Message from '../models/Message';

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
            user(info);
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

const eventListener = () => {
    // Back
    select(elementStrings.chatBox.header.back).addEventListener('click', () => {
        // Remove Selected
        chatPanelView.removeSelected();
        // Render Empty
        controlChatBox({ mode: mode.chatBox.empty });
    });
    // Image
    select(elementStrings.chatBox.header.img).addEventListener('click', async event => {
        const { target } = event;
        // Getting item
        const userElement = target.closest(elementStrings.chatBox.user);
        if (!userElement) return;
        // Getting user
        const user = userElement.dataset.user;
        if (!user) return;
        //  Init Relation
        if (!state['relation']) state['relation'] = new Relation({ user });
        state['relation'].setUserInput({ user });

        try {
            // Making API call
            const data = await state['relation'].getRelation();
            switch (data.status) {
                case 'success':
                    {
                        // Getting data
                        const { data } = state['relation'];
                        // Mode of Chat Profile
                        chatProfileController.controlChatProfile({
                            mode: data.relation,
                        });
                    }
                    break;
            }
        } catch (err) {
            console.log('ERROR', err.message);
        }
    });
    // Send Message
    select(elementStrings.chatBox.footer.form).addEventListener('submit', async event => {
        event.preventDefault();
    });
};
const user = async ({ data }) => {
    const { user } = data;
    // Getting wallpaper from state
    const { wallpaper } = state['setting'];
    // Render User
    chatBoxView.renderUser(user);
    // Render Background Image
    backgroundImageController.controlBackgroundImage({ mode: wallpaper[state['theme'].mode] });
    //  Init Message
    if (!state['message']) state['message'] = new Message({ user: user._id });
    try {
        // Making API call
        const data = await state['message'].getAllMyMessage();
        switch (data.status) {
            case 'success':
                {
                    console.log(data.data);
                    // Render Messages
                    chatBoxView.renderMessages();
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
    // Add Event Listeners
    eventListener();
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
