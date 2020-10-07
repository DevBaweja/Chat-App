import { elements, elementStrings, select, capitalize } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI } from './form.view';
import faker from 'faker';

export const togglePassword = type => {
    const markup = `
    <svg class="user-login__form--toggle-svg"> 
        <use xlink:href="svg/sprite.svg#icon-${type}">
        </use>
    </svg>
    `;
    const element = select(elementStrings.forms.login.toggle);
    // Removing html
    element.innerHTML = '';
    // Adjust title
    element.title = `${capitalize(type)} Password`;
    // Adding html
    element.insertAdjacentHTML('beforeend', markup);
};
export const renderLoginForm = () => {
    const form = {
        title: 'Log into #ChatFuel',
        groups: [
            {
                type: 'email',
                for: 'email',
                id: 'email',
                label: 'Email address',
                placeholder: faker.internet.email(),
                // For Development
                value: faker.internet.email(),
                autocomplete: 'username',
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
                autocomplete: 'current-password',
                required: true,
                minLength: 8,
                forget: `<span class="user-login__form--forget" title="Cann't remember your password">Forget password ?</span>`,
                toggle: `
                <span class="user-login__form--toggle" title="Show Password" data-type="show">
                    <svg class="user-login__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
        ],
        className: 'user-login',
        btntext: 'Log In',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForLogin = () => initialUI(elementStrings.btns.loginBtn, 'Log in');

export const prepareUIForLogin = () => prepareUI(elementStrings.btns.loginBtn);

export const getUserInput = () => getInput(elementStrings.inputs.loginInput);
