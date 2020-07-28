import { renderDropdowns } from '../dropdowns.view';
export const renderAboutMeDropdown = ({ coordinate: { top, left } }) => {
    const markup = `
    <!-- About Me Dropdown -->
    <div class="about-me__dropdown">
        <ul class="about-me__dropdown--list">
            <li class="about-me__dropdown--item">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-user">
                    <use xlink:href="img/sprite.svg#icon-user-circle"></use>
                </svg>
                <span class="about-me__dropdown--span">My Profile</span>
            </li>
            <li class="about-me__dropdown--item">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-theme">
                    <use xlink:href="img/sprite.svg#icon-theme"></use>
                </svg>
                <span class="about-me__dropdown--span">Dark Theme</span>
            </li>
            <li class="about-me__dropdown--item">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-setting">
                    <use xlink:href="img/sprite.svg#icon-setting"></use>
                </svg>
                <span class="about-me__dropdown--span">My Setting</span>
            </li>
            <li class="about-me__dropdown--item">
                <svg class="about-me__dropdown--svg about-me__dropdown--svg-logout">
                    <use xlink:href="img/sprite.svg#icon-logout"></use>
                </svg>
                <span class="about-me__dropdown--span about-me__dropdown--span-logout">Log out</span>
            </li>
        </ul>
    </div>    
    `;
    renderDropdowns(markup);

    document.querySelector('.about-me__dropdown').style.top = top;
    document.querySelector('.about-me__dropdown').style.left = left;
};
