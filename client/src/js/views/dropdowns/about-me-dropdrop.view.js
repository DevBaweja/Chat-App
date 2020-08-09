import { renderDropdowns } from './dropdowns.view';
import { elementClasses } from '../../utils/base.util';
export const renderAboutMeDropdown = ({ coordinate }) => {
    const data = {
        groups: [
            {
                type: 'profile',
                text: 'My Profile',
            },
            {
                type: 'theme',
                text: 'Toggle Theme',
            },
            {
                type: 'setting',
                text: 'My Settings',
            },
            {
                type: 'logout',
                text: 'Log out',
            },
        ],
        className: elementClasses.dropdowns.aboutMeDropdown,
        coordinate,
    };
    // Rendering Dropdown
    renderDropdowns(data);
};
