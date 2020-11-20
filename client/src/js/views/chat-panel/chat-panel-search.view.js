import { elements, elementStrings, select } from '../../utils/base.util';
import { renderPartialItem, getInput } from '../chat-panel.view';

export const clearSearch = () => (select(elementStrings.chatPanel.search.list).innerHTML = '');

export const renderSearch = () => {
    const markup = `
    <div class="chat-panel-search">
    <form class="chat-panel-search__form">
        <input type="text" class="chat-panel-search__input" id="name" spellcheck="false" autocomplete="off" placeholder="Connecting the world"/>
        <button class="chat-panel-search__button" title="Search">
            <svg class="chat-panel-search__icon">
                <use xlink:href="svg/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>  
    
    <ul class="chat-panel-search__list">
        <!-- Search Results -->
    </ul>
    </div>
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};

export const renderSearchResult = ({ data }, real) => {
    // Data
    const className = 'search';

    const markup = data.map(item => renderPartialItem(item, className, real)).join('');

    select(elementStrings.chatPanel.search.list).insertAdjacentHTML('beforeend', markup);
};
export const getUserInput = () => getInput(elementStrings.inputs.searchInput);
