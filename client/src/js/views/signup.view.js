import { elements, elementStrings } from '../utils/base.util';
import { renderForm, getInput, prepareUI } from './forms.view';
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
                required: true,
            },
            {
                type: 'email',
                for: 'email',
                id: 'email',
                label: 'Email address',
                placeholder: faker.internet.email(),
                required: true,
            },
            {
                type: 'password',
                for: 'password',
                id: 'password',
                label: 'Password',
                placeholder: '••••••••••••',
                required: true,
                minLength: 8,
            },
            {
                type: 'password',
                for: 'passwordConfirm',
                id: 'passwordConfirm',
                label: 'Confirm Password',
                placeholder: '••••••••••••',
                required: true,
                minLength: 8,
            },
        ],
        className: 'user-signup',
        btntext: 'Sign Up',
    };

    elements.Forms.insertAdjacentHTML('beforeend', renderForm(form));
};

export const prepareUIForSignup = () => prepareUI(elementStrings.signupBtn);

export const getUserInput = () => getInput(elementStrings.signupInput);
