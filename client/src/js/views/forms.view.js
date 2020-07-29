import { elements } from '../utils/base.util';

export const clearForms = () => (elements.Forms.innerHTML = '');

const renderFormGroup = (group, className) => `
<div class="${className}__form--group">
    <label class="${className}__form--label" for="${group.for}">${group.label}</label>
    <input
        class="${className}__form--input"
        id="${group.id}"
        type="${group.type}"
        placeholder="${group.placeholder}"
        autocomplete="${group.autocomplete}"
        ${/* For Development */ ''}
        value="${group.value}"
        minlength="${group.minLength ? group.minLength : '0'}"
        ${group.required ? 'required' : ''}
    />
    ${group.forget ? group.forget : ''}
</div>
`;

export const renderForm = form => `
    <div class="blur">
        <div class="${form.className}">
            <div class="${form.className}__title">${form.title}</div>
            <form class="${form.className}__form" autocomplete="on">
                ${form.groups.map(group => renderFormGroup(group, form.className)).join('')}
                <button class="${form.className}__form--btn">${form.btntext}</button>
            </form>
            <div class="${form.className}__cross user-cross">
                <svg class="${form.className}__cross--svg">
                    <use xlink:href="svg/sprite.svg#icon-cross"></use>
                </svg>
            </div>
        </div>
    </div>
`;

export const getInput = className => {
    const inputs = Array.from(document.querySelectorAll(className));

    let obj = {};

    inputs.forEach(input => {
        obj[input.id] = input.value;
    });

    return obj;
};

export const prepareUI = className => {
    // Rendering Loading Text
    document.querySelector(className).innerText = 'Loading...';
};
export const removeListener = className => {
    // document.querySelector(className).removeEventListener('submit');
};
