import { elements, elementClasses, elementStrings, select } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI, toggle } from './form.view';
import faker from 'faker';

export const togglePassword = type =>
    toggle(type, elementClasses.forms.login, elementStrings.forms.login.toggle.password, 'Password');

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
                forget: `<span class="${elementClasses.forms.login}__form--forget" title="Cann't remember your password">Forget password ?</span>`,
                toggle: `
                <span class="${elementClasses.forms.login}__form--toggle ${elementClasses.forms.login}__form--toggle-password" title="Show Password" data-type="show">
                    <svg class="${elementClasses.forms.login}__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
        ],
        className: elementClasses.forms.login,
        btntext: 'Log In',
        addOn: 'Sign up',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForLogin = () => initialUI(elementStrings.btns.loginBtn, 'Log in');

export const prepareUIForLogin = () => prepareUI(elementStrings.btns.loginBtn, 'Logging In');

export const getUserInput = () => getInput(elementStrings.inputs.loginInput);
