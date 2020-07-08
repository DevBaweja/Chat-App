export const elements = {
    App: document.querySelector('.app'),
    LogoBox: document.querySelector('.logo-box'),
    Header: document.querySelector('.header'),
    ChatPanel: document.querySelector('.chat-panel'),
    ChatBox: document.querySelector('.chat-box'),
};

export const elementStrings = {
    CTA: '.cta__btn',
};

const renderFormGroup = (group, className) => `
<div class="${className}__form--group">
    <label class="${className}__form--label" for=${group.for}>${group.label}</label>
    <input
        class="${className}__form--input"
        id=${group.id}
        type=${group.type}
        placeholder=${group.placeholder}
        minlength=${group.minLength ? group.minLength : '0'}
        ${group.required ? 'required' : ''}
    />
    ${group.forget ? group.forget : ''}
</div>
`;

export const renderForm = form => `
    <div class="blur">
        <div class="${form.className}">
            <div class="${form.className}__title">${form.title}</div>
            <form class="${form.className}__form">
                ${form.groups.map(group => renderFormGroup(group, form.className)).join('')}
                <button class="${form.className}__form--btn">Sign Up</button>
            </form>
            <div class="${form.className}__cross">
                <svg class="${form.className}__cross--svg">
                    <use xlink:href="img/sprite.svg#icon-cross"></use>
                </svg>
            </div>
        </div>
    </div>
`;
