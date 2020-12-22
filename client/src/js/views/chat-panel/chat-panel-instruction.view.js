import { animateType, select, elements } from '../../utils/base.util';
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
                ${description}
            </span>
        </div>
    </div>
</li>
`;

export const renderInstruction = ({ type }) => {
    const index = animateType.indexOf(type);
    // Data
    const data = [
        [
            {
                title: 'Click to play/stop.',
                description: 'It will make animation to play or stop. Must be done over the canvas.',
            },
            {
                title: 'Press [W] to increase speed.',
                description: 'It will cause animation to move faster.',
            },
            { title: 'Press [S] to decrease speed.', description: 'It will cause animation to move slowley.' },
            { title: 'Press [D] to increase rate.', description: 'It will increase frequency of wave.' },
            { title: 'Press [A] to decrease rate.', description: 'It will decrease frequency of wave.' },
        ],
    ];

    const className = 'instruction';
    const title = {
        label: 'Instructions',
        count: data[index].length,
    };

    const markup = `
    <div class="chat-panel-${className}">                    
        ${renderTitle(title, className)}
        <ul class="chat-panel-${className}__list">
        ${data[index].map(item => renderInstructionItem(item, className)).join('')}
        </ul>
    </div>    
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
