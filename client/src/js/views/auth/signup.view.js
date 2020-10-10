import { elements, elementStrings, select } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI, toggle } from './form.view';
import faker from 'faker';

export const togglePassword = type =>
    toggle(type, 'user-signup', elementStrings.forms.signup.toggle.password, 'Password');
export const togglePasswordConfirm = type =>
    toggle(type, 'user-signup', elementStrings.forms.signup.toggle.passwordConfirm, 'Confirm Password');

export const renderSignupForm = () => {
    const form = {
        title: 'Welcome to #ChatFuel',
        groups: [
            {
                type: 'text',
                for: 'name',
                id: 'name',
                label: 'User Name',
                placeholder: faker.name.findName(),
                // For Development
                value: faker.name.findName(),
                autocomplete: 'username',
                required: true,
            },
            {
                type: 'email',
                for: 'email',
                id: 'email',
                label: 'Email address',
                placeholder: faker.internet.email(),
                // For Development
                value: faker.internet.email(),
                autocomplete: 'email',
                required: true,
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
                <span class="user-signup__form--toggle user-signup__form--toggle-password" title="Show Password" data-type="show">
                    <svg class="user-signup__form--toggle-svg"> 
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
                <span class="user-signup__form--toggle user-signup__form--toggle-password-confirm" title="Show Confirm Password" data-type="show">
                    <svg class="user-signup__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
        ],
        className: 'user-signup',
        btntext: 'Sign Up',
        addOn: 'Log in',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForSignup = () => initialUI(elementStrings.btns.signupBtn, 'Sign Up');

export const prepareUIForSignup = () => prepareUI(elementStrings.btns.signupBtn, 'Signing Up');

export const getUserInput = () => getInput(elementStrings.inputs.signupInput);
