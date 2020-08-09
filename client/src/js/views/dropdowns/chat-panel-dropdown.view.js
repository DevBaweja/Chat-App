import { elementClasses, elementStrings, select } from '../../utils/base.util';
import { renderDropdowns } from './dropdowns.view';

export const renderChatPanelDropdown = ({ coordinate }) => {
    const data = {
        groups: [
            {
                // read or unread
                type: 'read',
                // Mark as read/unread
                text: 'Mark as read',
            },
            {
                // pin or unpin
                type: 'pin',
                // Pin/Unpin Chat
                text: 'Pin Chat',
            },
            {
                // mute or unmute
                type: 'mute',
                // Mute/Unmute Notifications
                text: 'Mute Notifications',
            },
            {
                // add/remove
                type: 'add',
                // Add to/Remove from Favourites
                text: 'Add to Favourites',
            },
            {
                type: 'delete',
                text: 'Delete Chat',
            },
        ],
        className: elementClasses.dropdowns.chatPanelDropdown,
        coordinate,
    };
    // Rendering Dropdown
    renderDropdowns(data);
};
