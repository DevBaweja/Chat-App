import { elementClasses } from '../../utils/base.util';
import { renderDropdowns } from './dropdowns.view';

export const renderChatPanelDropdown = ({ user, setting, coordinate }) => {
    const reverse = {
        read: {
            mark: 'unmark',
            unmark: 'mark',
        },
        chat: {
            pin: 'unpin',
            unpin: 'pin',
        },
        notification: {
            mute: 'unmute',
            unmute: 'mute',
        },
        favourite: {
            add: 'remove',
            remove: 'add',
        },
    };
    const text = {
        read: {
            mark: 'Mark as read',
            unmark: 'Mark as unread',
        },
        chat: {
            pin: 'Pin Chat',
            unpin: 'Unpin Chat',
        },
        notification: {
            mute: 'Mute Notifications',
            unmute: 'Unmute Notifications',
        },
        favourite: {
            add: 'Add to Favourite',
            remove: 'Remove from Favourite',
        },
        delete: 'Delete Chat',
    };
    // Reversing and Texting
    setting = setting.map(item => {
        const key = item.key;
        const value = reverse[key][item.value];
        const type = `${value}-${key}`;
        return { key, value, type, text: text[key][value] };
    });

    // Adding Delete
    setting.push({
        type: 'delete',
        text: text.delete,
    });

    const data = {
        user,
        coordinate,
        className: elementClasses.dropdowns.chatPanelDropdown,
        setting,
    };
    // Rendering Dropdown
    renderDropdowns(data);
};
