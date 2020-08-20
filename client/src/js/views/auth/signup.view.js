import { elements, elementStrings, select } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI } from './form.view';
import faker from 'faker';
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
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
            },
            {
                type: 'password',
                for: 'passwordConfirm',
                id: 'passwordConfirm',
                label: 'Confirm Password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
            },
        ],
        className: 'user-signup',
        btntext: 'Sign Up',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForSignup = () => initialUI(elementStrings.btns.signupBtn, 'Sign Up');

export const prepareUIForSignup = () => prepareUI(elementStrings.btns.signupBtn);

export const getUserInput = () => getInput(elementStrings.inputs.signupInput);
