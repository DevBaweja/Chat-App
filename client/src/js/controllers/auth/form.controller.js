import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as loginController from './login.controller';
import * as signupController from './signup.controller';
import * as forgetController from './forget.controller';
import * as resetController from './reset.controller';
// Models
import Form from '../../models/Form';
// Views
import * as formView from '../../views/auth/form.view';
import * as loginView from '../../views/auth/login.view';
import * as signupView from '../../views/auth/signup.view';
import * as forgetView from '../../views/auth/forget.view';
import * as resetView from '../../views/auth/reset.view';

export const controlExit = event => {
    const { target } = event;
    if (target.matches('.blur') || target.matches('.user-cross,.user-cross *')) {
        // Clearing Forms
        formView.clearForm();
        // Clearing State
        state['form'] = null;
    }
};

export const controlForm = info => {
    // Init Form
    if (!state['form']) state['form'] = new Form(info);
    state['form'].setMode(info.mode);

    // Prepare UI for changes
    formView.clearForm();

    switch (info.mode) {
        case mode.form.login:
            login();
            break;
        case mode.form.signup:
            signup();
            break;
        case mode.form.forget:
            forget();
            break;
        case mode.form.reset:
            reset();
            break;
    }

    // Clear form
    state['form'] = null;
};

// ! For Development
window.controlForm = controlForm;

// Log in user
const login = () => {
    // 1) Rendering Login form
    loginView.renderLoginForm();
    // 2) Adding event listener to show/hide password
    select(elementStrings.forms.login.toggle).addEventListener('click', loginController.controlToggle);
    // 3) Adding event listener to forget password
    select(elementStrings.forms.login.forget).addEventListener('click', () => controlForm({ mode: mode.form.forget }));
    // 4) Adding event listener to form submit
    select(elementStrings.forms.login.form).addEventListener('submit', loginController.controlLogin);
    // 5) Link to sign up
    select(elementStrings.forms.login.addOn).addEventListener('click', () => controlForm({ mode: mode.form.signup }));
};

// Sign up User
const signup = () => {
    // 1) Rendering Signup form
    signupView.renderSignupForm();
    // 2.1) Adding event listener to show/hide password
    select(elementStrings.forms.signup.toggle.password).addEventListener(
        'click',
        signupController.controlTogglePassword
    );
    // 2.2) Adding event listener to show/hide passwordConfirm
    select(elementStrings.forms.signup.toggle.passwordConfirm).addEventListener(
        'click',
        signupController.controlTogglePasswordConfirm
    );
    // 3) Adding event listener to form
    select(elementStrings.forms.signup.form).addEventListener('submit', signupController.controlSignup);
    // 5) Link to log in
    select(elementStrings.forms.signup.addOn).addEventListener('click', () => controlForm({ mode: mode.form.login }));
};

// Forget Password
const forget = () => {
    // 1) Rendering Login form
    forgetView.renderForgetForm();
    // 2) Adding event listener to form submit
    select(elementStrings.forms.forget.form).addEventListener('submit', forgetController.controlForget);
    // 5) Link to reset password
    select(elementStrings.forms.forget.addOn).addEventListener('click', () => controlForm({ mode: mode.form.reset }));
};

// Reset Password
const reset = () => {
    // 1) Rendering Reset form
    resetView.renderResetForm();

    // 2.1) Adding event listener to show/hide password
    select(elementStrings.forms.reset.toggle.password).addEventListener('click', resetController.controlTogglePassword);
    // 2.2) Adding event listener to show/hide passwordConfirm
    select(elementStrings.forms.reset.toggle.passwordConfirm).addEventListener(
        'click',
        resetController.controlTogglePasswordConfirm
    );
    // 3) Adding event listener to form
    select(elementStrings.forms.reset.form).addEventListener('submit', resetController.controlReset);
    // 5) Link to forget password
    select(elementStrings.forms.reset.addOn).addEventListener('click', () => controlForm({ mode: mode.form.forget }));
};
