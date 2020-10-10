import { elements, select } from '../utils/base.util';

export const clearChatProfile = () => (select(elements.ChatProfile).innerHTML = '');

export const prepareUI = (className, text = 'Loading...') => {
    const btn = select(className);
    // Rendering Text
    btn.innerText = text;
    // Disabling button
    btn.disabled = true;
};
