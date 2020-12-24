import { animateType, animateInstruction, gameType, gameInstruction, select, elements } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

const getHighlight = (title, className) => {
    const regex = new RegExp(/\[(.*?)\]/g);
    return title.replaceAll(
        regex,
        match => `<span class="chat-panel-${className}__highlight">${match.split('[')[1].split(']')[0]}</span>`
    );
};

const renderInstructionItem = ({ title, description }, className) => `
<li class="chat-panel-${className}__item">
    <div class="chat-panel-${className}__combine">
        <svg class="chat-panel-${className}__svg">
            <use xlink:href="svg/sprite.svg#icon-${className}-console"></use>
        </svg>
        <div class="chat-panel-${className}__content">
            <span class="chat-panel-${className}__span">
                ${getHighlight(title, className)}
            </span>
            <span class="chat-panel-${className}__description">
                ${description ? description : ''}
            </span>
        </div>
    </div>
</li>
`;

export const renderAnimateInstruction = ({ type }) => {
    const index = animateType.indexOf(type);

    const className = 'instruction';
    const title = {
        label: 'Instructions',
        count: animateInstruction[index].length,
    };

    const markup = `
    <div class="chat-panel-${className}">                    
        ${renderTitle(title, className)}
        <ul class="chat-panel-${className}__list">
        ${animateInstruction[index].map(item => renderInstructionItem(item, className)).join('')}
        </ul>
    </div>    
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
export const renderGameInstruction = ({ type }) => {
    const index = gameType.indexOf(type);

    const className = 'instruction';
    const title = {
        label: 'Instructions',
        count: gameInstruction[index].length,
    };

    const markup = `
    <div class="chat-panel-${className}">                    
        ${renderTitle(title, className)}
        <ul class="chat-panel-${className}__list">
        ${gameInstruction[index].map(item => renderInstructionItem(item, className)).join('')}
        </ul>
    </div>    
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
