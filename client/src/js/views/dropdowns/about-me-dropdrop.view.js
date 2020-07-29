import { renderDropdowns, assignCoordinate } from '../dropdowns.view';
import { elementStrings } from '../../utils/base.util';
export const renderAboutMeDropdown = ({ coordinate }) => {
    const markup = `
    <!-- About Me Dropdown -->
    <div class="about-me__dropdown">
        <ul class="about-me__dropdown--list">
            <li class="about-me__dropdown--item" data-type="my-profile">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-user">
                    <use xlink:href="svg/sprite.svg#icon-user-circle"></use>
                </svg>
                <span class="about-me__dropdown--span">My Profile</span>
            </li>
            <li class="about-me__dropdown--item" data-type="toggle-theme">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-theme">
                    <use xlink:href="svg/sprite.svg#icon-theme"></use>
                </svg>
                <span class="about-me__dropdown--span">Dark Theme</span>
            </li>
            <li class="about-me__dropdown--item" data-type="my-setting">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-setting">
                    <use xlink:href="svg/sprite.svg#icon-setting"></use>
                </svg>
                <span class="about-me__dropdown--span">My Setting</span>
            </li>
            <li class="about-me__dropdown--item" data-type="log-out">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-logout">
                    <use xlink:href="svg/sprite.svg#icon-logout"></use>
                </svg>
                <span class="about-me__dropdown--span about-me__dropdown--span-logout">Log out</span>
            </li>
        </ul>
    </div>    
    `;
    renderDropdowns(markup);

    assignCoordinate(elementStrings.dropdowns.aboutMeDropdown, coordinate);
};
