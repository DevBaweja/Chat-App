import { elements, renderForm } from '../base';

export const renderSignupForm = () => {
    const form = {
        title: 'Welcome to #ChatFuel',
        groups: [
            {
                type: 'text',
                for: 'name',
                id: 'name',
                label: 'User Name',
                placeholder: 'Username',
                required: true,
            },
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
            },
            {
                type: 'password',
                for: 'confirm-password',
                id: 'confirm-password',
                label: 'Confirm Password',
                placeholder: '••••••••••••',
                required: true,
                minLength: 8,
            },
        ],
        className: 'user-signup',
    };

    elements.App.insertAdjacentHTML('beforeend', renderForm(form));
};
