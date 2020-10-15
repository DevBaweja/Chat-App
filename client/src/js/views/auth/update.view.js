import { elements, elementStrings, elementClasses, select } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI, toggle } from './form.view';

export const togglePasswordCurrent = type =>
    toggle(type, elementClasses.forms.update, elementStrings.forms.update.toggle.passwordCurrent, 'Current Password');
export const togglePassword = type =>
    toggle(type, elementClasses.forms.update, elementStrings.forms.update.toggle.password, 'New Password');
export const togglePasswordConfirm = type =>
    toggle(type, elementClasses.forms.update, elementStrings.forms.update.toggle.passwordConfirm, 'Confirm Password');

export const renderUpdateForm = () => {
    const form = {
        title: 'Change Your Password',
        groups: [
            {
                type: 'password',
                for: 'passwordCurrent',
                id: 'passwordCurrent',
                className: 'password-current',
                label: 'Current Password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'old-password',
                required: true,
                minLength: 8,
                toggle: `
                <span class="${elementClasses.forms.update}__form--toggle ${elementClasses.forms.update}__form--toggle-password-current" title="Show Current Password" data-type="show">
                    <svg class="${elementClasses.forms.update}__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
            {
                type: 'password',
                for: 'password',
                id: 'password',
                label: 'New Password',
                className: 'password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
                toggle: `
                <span class="${elementClasses.forms.update}__form--toggle ${elementClasses.forms.update}__form--toggle-password" title="Show New Password" data-type="show">
                    <svg class="${elementClasses.forms.update}__form--toggle-svg"> 
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
                <span class="${elementClasses.forms.update}__form--toggle ${elementClasses.forms.update}__form--toggle-password-confirm" title="Show Confirm Password" data-type="show">
                    <svg class="${elementClasses.forms.update}__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
        ],
        className: elementClasses.forms.update,
        btntext: 'Update',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForUpdate = () => initialUI(elementStrings.btns.updateBtn, 'Update');

export const prepareUIForUpdate = () => prepareUI(elementStrings.btns.updateBtn, 'Updating');

export const getUserInput = () => getInput(elementStrings.inputs.updateInput);
