// Utils
import { mode } from '../utils/base.util';
// Models
import ChatBox from '../models/ChatBox';
// Views
import * as chatBoxView from '../views/chat-box.view';

export const controlChatBox = info => {
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
    }
};
const empty = () => {
    // Render Empty
    chatBoxView.renderEmpty();
};
const ideal = () => {
    // Render Ideal
    chatBoxView.renderIdeal();
};
const user = () => {
    // Render User
    chatBoxView.renderUser();
};
