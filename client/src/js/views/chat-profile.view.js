import { elements, elementStrings, select, selectAll } from '../utils/base.util';

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
    const inputElement = selectAll(className);

    let inputs = new FormData();

    inputElement.forEach(input => {
        inputs.append(input.id, input.value);
    });

    return inputs;
};

export const getPhoto = (className, inputs) => {
    const inputElement = select(className);

    const [file] = inputElement.files;

    // Getting file
    if (file) {
        inputs.append(inputElement.id, file);
        return;
    }

    // Getting Avatar
    const imgElement = select(elementStrings.chatProfile.user.content.img);
    const src = imgElement.getAttribute('src');
    inputs.append('photo', src);
};
