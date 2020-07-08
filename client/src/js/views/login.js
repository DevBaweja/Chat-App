import { elements } from '../base';
import { renderForm } from './forms';

export const renderLoginForm = () => {
    const form = {
        title: 'Log into #ChatFuel',
        groups: [
            {
                type: 'email',
                for: 'email',
                id: 'email',
                label: 'Email address',
                placeholder: 'dev@example.com',
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
                forget: '<span class="user-login__form--forget">Forget password ?</span>',
            },
        ],
        className: 'user-login',
        btntext: 'Log In',
    };

    elements.Forms.insertAdjacentHTML('beforeend', renderForm(form));
};
