import state from '../../state';
// Utils
import { elementStrings, elements, select, mode } from '../../utils/base.util';
// Controllers
import * as loginController from './login.controller';
import * as signupController from './signup.controller';
import * as forgetController from './forget.controller';
import * as resetController from './reset.controller';
import * as updateController from './update.controller';
// Models
import Form from '../../models/Form';
// Views
import * as formView from '../../views/auth/form.view';
import * as loginView from '../../views/auth/login.view';
import * as signupView from '../../views/auth/signup.view';
import * as forgetView from '../../views/auth/forget.view';
import * as resetView from '../../views/auth/reset.view';
import * as updateView from '../../views/auth/update.view';

// Control Exit
export const controlExit = event => {
    const { target } = event;
    if (target.matches('.blur') || target.matches('.user-cross,.user-cross *')) {
        // Clearing Forms
        formView.clearForm();
        // Clearing State
        state['form'] = null;
    }
};

// Control Toggle
export const controlToggle = (event, toggleElementClass, ElementClass, fn) => {
    const { target } = event;
    // Toggle Element
    const toggleElement = target.closest(toggleElementClass);

    // Element
    const element = select(ElementClass);

    switch (toggleElement.dataset.type) {
        case 'show':
            // Toggle
            toggleElement.dataset.type = 'hide';
            // Change view
            fn(toggleElement.dataset.type);
            // Password Show
            element.type = 'text';
            break;
        case 'hide':
            // Toggle
            toggleElement.dataset.type = 'show';
            // Change view
            fn(toggleElement.dataset.type);
            // Password Hide
            element.type = 'password';
            break;
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
        case mode.form.update:
            update();
            break;
    }

    // Control Exit
    select(elements.Forms).addEventListener('click', controlExit);
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
    select(elementStrings.forms.login.toggle.password).addEventListener('click', loginController.controlTogglePassword);
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
    // 4) Link to log in
    select(elementStrings.forms.signup.addOn).addEventListener('click', () => controlForm({ mode: mode.form.login }));
};

// Forget Password
const forget = () => {
    // 1) Rendering Login form
    forgetView.renderForgetForm();
    // 2) Adding event listener to form submit
    select(elementStrings.forms.forget.form).addEventListener('submit', forgetController.controlForget);
    // 3) Link to reset password
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
    // 2.3) Adding event listener to paste reset token
    select(elementStrings.forms.reset.toggle.token).addEventListener('click', resetController.controlPasteResetToken);
    // 3) Adding event listener to form
    select(elementStrings.forms.reset.form).addEventListener('submit', resetController.controlReset);
    // 4) Link to forget password
    select(elementStrings.forms.reset.addOn).addEventListener('click', () => controlForm({ mode: mode.form.forget }));
};

// Update Password
const update = () => {
    // 1) Rendering Update form
    updateView.renderUpdateForm();

    // 2.0) Adding event listener to show/hide passwordCurrent
    select(elementStrings.forms.update.toggle.passwordCurrent).addEventListener(
        'click',
        updateController.controlTogglePasswordCurrent
    );
    // 2.1) Adding event listener to show/hide password
    select(elementStrings.forms.update.toggle.password).addEventListener(
        'click',
        updateController.controlTogglePassword
    );
    // 2.2) Adding event listener to show/hide passwordConfirm
    select(elementStrings.forms.update.toggle.passwordConfirm).addEventListener(
        'click',
        updateController.controlTogglePasswordConfirm
    );
    // 3) Adding event listener to form
    select(elementStrings.forms.update.form).addEventListener('submit', updateController.controlUpdate);
};
