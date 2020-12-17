import { elementClasses } from '../../utils/base.util';
import { renderDropdowns } from './dropdowns.view';

export const renderChatPanelDropdown = ({ user, set, setting, coordinate }) => {
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
    let groups = setting.map(item => {
        const key = item.key;
        const value = reverse[key][item.value];
        const type = `${value}-${key}`;
        return { key, value, type, text: text[key][value] };
    });

    // Adding Delete
    groups.push({
        type: 'delete',
        text: text.delete,
    });

    const data = {
        additional: [
            { text: 'user', value: user._id },
            { text: 'set', value: set },
        ],
        coordinate,
        className: elementClasses.dropdowns.chatPanelDropdown,
        groups,
    };
    // Rendering Dropdown
    renderDropdowns(data);
};
