import { elements, select } from '../../utils/base.util';

export const renderSearch = () => {
    const markup = `
    <div class="chat-panel-search">
    <form class="chat-panel-search__form">
        <input type="text" class="chat-panel-search__input" placeholder="Connecting the world" />
        <button class="chat-panel-search__button" title="Search">
            <svg class="chat-panel-search__icon">
                <use xlink:href="svg/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>                    
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
