import { elementClasses } from '../../utils/base.util';
import { renderDropdowns } from './dropdowns.view';

export const renderChatPanelDropdown = ({ coordinate }) => {
    const data = {
        groups: [
            {
                // mark-read or unmark-read
                type: 'mark-read',
                // Mark as read/unread
                text: 'Mark as read',
            },
            {
                // pin-chat or unpin-chat
                type: 'pin-chat',
                // Pin/Unpin Chat
                text: 'Pin Chat',
            },
            {
                // mute-notification or unmute-notification
                type: 'mute-notification',
                // Mute/Unmute Notifications
                text: 'Mute Notifications',
            },
            {
                // add-favourite or remove-favourite
                type: 'add-favourite',
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
