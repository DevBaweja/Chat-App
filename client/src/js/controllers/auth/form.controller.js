import state from '../../state';
// Utils
import { elementStrings, select, mode } from '../../utils/base.util';
// Controllers
import * as loginController from '../../controllers/auth/login.controller';
import * as signupController from '../../controllers/auth/signup.controller';

// Models
import Form from '../../models/Form';
// Views
import * as formView from '../../views/auth/form.view';
import * as loginView from '../../views/auth/login.view';
import * as signupView from '../../views/auth/signup.view';

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
    }
};

const login = () => {
    // 1) Rendering Login form
    loginView.renderLoginForm();
    // 2) Adding event listener to show/hide password
    select(elementStrings.forms.login.toggle).addEventListener('click', loginController.controlToggle);
    // 3) Adding event listener to forget password
    select(elementStrings.forms.login.forget).addEventListener('click', loginController.controlForget);
    // 4) Adding event listener to form submit
    select(elementStrings.forms.login.form).addEventListener('submit', loginController.controlLogin);
};

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
};
