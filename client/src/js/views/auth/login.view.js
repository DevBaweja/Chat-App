import { elements, elementStrings, select } from '../../utils/base.util';
import { renderForm, getInput } from './form.view';
import faker from 'faker';

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
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'current-password',
                required: true,
                minLength: 8,
                forget: `<span class="user-login__form--forget" title="Cann't remember your password">Forget password ?</span>`,
            },
        ],
        className: 'user-login',
        btntext: 'Log In',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const prepareUIForLogin = () => prepareUI(elementStrings.btns.loginBtn);

export const getUserInput = () => getInput(elementStrings.inputs.loginInput);
