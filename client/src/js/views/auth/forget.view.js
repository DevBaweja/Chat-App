import { elements, elementClasses, elementStrings, select } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI } from './form.view';
import faker from 'faker';

export const renderForgetForm = () => {
    const form = {
        title: 'Forget your Password!',
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
        ],
        className: elementClasses.forms.forget,
        btntext: 'Send Token',
        addOn: 'Validate your token',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForForget = () => initialUI(elementStrings.btns.forgetBtn, 'Send Token');

export const resendUIForForget = () => initialUI(elementStrings.btns.forgetBtn, 'Resend Token');

export const prepareUIForForget = () => prepareUI(elementStrings.btns.forgetBtn, 'Sending Token');

export const getUserInput = () => getInput(elementStrings.inputs.forgetInput);
