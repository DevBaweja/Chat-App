import { renderDropdowns, assignCoordinate } from './dropdowns.view';
import { elementStrings } from '../../utils/base.util';

export const renderMessageOutDropdown = ({ coordinate }) => {
    const markup = `
    <div class="chat-box-user-out__dropdown">
        <ul class="chat-box-user-out__dropdown--list">
            <li class="chat-box-user-out__dropdown--item">
                <svg class="chat-box-user-out__dropdown--svg chat-box-user-out__dropdown--svg-copy">
                    <use xlink:href="svg/sprite.svg#icon-copy"></use>
                </svg>
                <span class="chat-box-user-out__dropdown--span">Copy Message</span>
            </li>
            <li class="chat-box-user-out__dropdown--item">
                <svg class="chat-box-user-out__dropdown--svg chat-box-user-out__dropdown--svg-edit">
                    <use xlink:href="svg/sprite.svg#icon-edit"></use>
                </svg>
                <span class="chat-box-user-out__dropdown--span">Edit</span>
            </li>
            <li class="chat-box-user-out__dropdown--item">
                <svg class="chat-box-user-out__dropdown--svg chat-box-user-out__dropdown--svg-reply">
                    <use xlink:href="svg/sprite.svg#icon-reply"></use>
                </svg>
                <span class="chat-box-user-out__dropdown--span">Reply</span>
            </li>
            <li class="chat-box-user-out__dropdown--item">
                <svg class="chat-box-user-out__dropdown--svg chat-box-user-out__dropdown--svg-delete">
                    <use xlink:href="svg/sprite.svg#icon-delete"></use>
                </svg>
                <span class="chat-box-user-out__dropdown--span chat-box-user-out__dropdown--span-delete"
                    >Delete Message</span
                >
            </li>
        </ul>
    </div>   
    `;

    renderDropdowns(markup);

    assignCoordinate(elementStrings.dropdowns.chatBoxDropdown.out, coordinate);
};

export const renderMessageInDropdown = ({ coordinate }) => {
    const markup = `
    <div class="chat-box-user-in__dropdown">
        <ul class="chat-box-user-in__dropdown--list">
            <li class="chat-box-user-in__dropdown--item">
                <svg class="chat-box-user-in__dropdown--svg chat-box-user-in__dropdown--svg-copy">
                    <use xlink:href="svg/sprite.svg#icon-copy"></use>
                </svg>
                <span class="chat-box-user-in__dropdown--span">Copy Message</span>
            </li>

            <li class="chat-box-user-in__dropdown--item">
                <svg class="chat-box-user-in__dropdown--svg chat-box-user-in__dropdown--svg-reply">
                    <use xlink:href="svg/sprite.svg#icon-reply"></use>
                </svg>
                <span class="chat-box-user-in__dropdown--span">Reply</span>
            </li>
            <!-- like or unlike -->
            <li class="chat-box-user-in__dropdown--item">
                <svg class="chat-box-user-in__dropdown--svg chat-box-user-in__dropdown--svg-heart">
                    <use xlink:href="svg/sprite.svg#icon-unlike"></use>
                </svg>
                <span class="chat-box-user-in__dropdown--span">Like</span>
            </li>
            <li class="chat-box-user-in__dropdown--item">
                <svg class="chat-box-user-in__dropdown--svg chat-box-user-in__dropdown--svg-delete">
                    <use xlink:href="svg/sprite.svg#icon-delete"></use>
                </svg>
                <span class="chat-box-user-in__dropdown--span chat-box-user-in__dropdown--span-delete">Delete Message</span>
            </li>
        </ul>
    </div>
    `;
    renderDropdowns(markup);

    assignCoordinate(elementStrings.dropdowns.chatBoxDropdown.in, coordinate);
};
export const renderMessageOptionsDropdown = ({ coordinate }) => {};
