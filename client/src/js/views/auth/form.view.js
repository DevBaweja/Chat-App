import { elements, select, selectAll } from '../../utils/base.util';

export const clearForm = () => (select(elements.Forms).innerHTML = '');

const renderFormGroup = (group, className) => `
<div class="${className}__form--group">
    <label class="${className}__form--label" for="${group.for}">${group.label}</label>
    <input
        class="${className}__form--input ${group.className ? className + '__form--input-' + group.className : ''}"
        id="${group.id}"
        type="${group.type}"
        placeholder="${group.placeholder}"
        autocomplete="${group.autocomplete}"
        ${/* For Development */ ''}
        value="${group.value}"
        minlength="${group.minLength ? group.minLength : '0'}"
        ${group.required ? 'required' : ''}
    />
    ${group.toggle ? group.toggle : ''}
    ${group.forget ? group.forget : ''}
</div>
`;

const renderAddOn = ({ className, addOn }) => {
    return `<div class="${className}__form--addon"> ${addOn} </div>`;
};

export const renderForm = form => `
    <div class="blur" title="Go back">
        <div class="${form.className}" title="">
            <div class="${form.className}__title">${form.title}</div>
            <form class="${form.className}__form" autocomplete="on">
                ${form.groups.map(group => renderFormGroup(group, form.className)).join('')}
                <button class="${form.className}__form--btn">${form.btntext}</button>
            </form>
            ${form.addOn ? renderAddOn(form) : ''}
            <div class="${form.className}__cross user-cross" title="Go back">
                <svg class="${form.className}__cross--svg">
                    <use xlink:href="svg/sprite.svg#icon-cross"></use>
                </svg>
            </div>
        </div>
    </div>
`;

export const getInput = className => {
    const inputs = selectAll(className);

    let obj = {};

    inputs.forEach(input => {
        obj[input.id] = input.value;
    });

    return obj;
};

export const prepareUI = className => {
    const btn = select(className);
    // Rendering Loading Text
    btn.innerText = 'Loading...';
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
