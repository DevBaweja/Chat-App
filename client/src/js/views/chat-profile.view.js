import { elements, select, selectAll } from '../utils/base.util';

export const clearChatProfile = () => (select(elements.ChatProfile).innerHTML = '');

export const prepareUI = (className, text = 'Loading...') => {
    const btn = select(className);
    // Rendering Text
    btn.innerText = text;
    // Disabling button
    btn.disabled = true;
};

export const initialUI = (className, text) => {
    const btn = select(className);
    // Rendering Text
    btn.innerText = text;
    // Enabling button
    btn.disabled = false;
};

// Get Input
export const getInput = className => {
    const inputs = selectAll(className);

    let obj = {};

    inputs.forEach(input => {
        obj[input.id] = input.value;
    });

    return obj;
};
