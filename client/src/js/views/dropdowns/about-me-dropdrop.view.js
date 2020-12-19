import { renderDropdowns } from './dropdowns.view';
import { elementClasses, capitalize, getReverseTheme } from '../../utils/base.util';
export const renderAboutMeDropdown = ({ coordinate, theme }) => {
    const data = {
        groups: [
            {
                type: 'profile',
                text: 'My Profile',
            },
            {
                type: 'theme',
                text: `${capitalize(getReverseTheme(theme))} Theme`,
            },
            {
                type: 'setting',
                text: 'Settings',
            },
            {
                type: 'activity',
                text: 'Activities',
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
