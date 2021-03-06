import { elements, elementStrings,elementClasses, select } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI, toggle } from './form.view';
import faker from 'faker';

export const togglePassword = type =>
    toggle(type, elementClasses.forms.reset, elementStrings.forms.reset.toggle.password, 'Password');
export const togglePasswordConfirm = type =>
    toggle(type, elementClasses.forms.reset, elementStrings.forms.reset.toggle.passwordConfirm, 'Confirm Password');

export const renderResetForm = () => {
    const form = {
        title: 'Reset your Password',
        groups: [
            {
                type: 'text',
                for: 'token',
                id: 'token',
                label: 'Reset Token',
                className: 'token',
                placeholder: faker.random.uuid(),
                // For Development
                value: faker.random.uuid(),
                required: true,
                toggle: `
                <span class="${elementClasses.forms.reset}__form--toggle ${elementClasses.forms.reset}__form--toggle-token" title="Paste Reset Token">
                    <svg class="${elementClasses.forms.reset}__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-copy">
                        </use>
                    </svg> 
                </span>`,
            },
            {
                type: 'password',
                for: 'password',
                id: 'password',
                label: 'Password',
                className: 'password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
                toggle: `
                <span class="${elementClasses.forms.reset}__form--toggle ${elementClasses.forms.reset}__form--toggle-password" title="Show Password" data-type="show">
                    <svg class="${elementClasses.forms.reset}__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
            {
                type: 'password',
                for: 'passwordConfirm',
                id: 'passwordConfirm',
                className: 'password-confirm',
                label: 'Confirm Password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
                toggle: `
                <span class="${elementClasses.forms.reset}__form--toggle ${elementClasses.forms.reset}__form--toggle-password-confirm" title="Show Confirm Password" data-type="show">
                    <svg class="${elementClasses.forms.reset}__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
        ],
        className: elementClasses.forms.reset,
        btntext: 'Reset Password',
        addOn: 'Go back',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForReset = () => initialUI(elementStrings.btns.resetBtn, 'Reset Password');

export const prepareUIForReset = () => prepareUI(elementStrings.btns.resetBtn, 'Reseting Password');

export const getUserInput = () => getInput(elementStrings.inputs.resetInput);
