import state from '../state';
// Utils
import { elements, elementStrings, mode } from '../utils/base.util';
// Models
import Header from '../models/Header';
// Views
import * as headerView from '../views/header.view';
// Controllers
import * as formController from './auth/form.controller';
import * as loginController from './auth/login.controller';
import * as signupController from './auth/signup.controller';

export const controlHeader = info => {
    // Init Header
    if (!state.header) state.header = new Header({ mode: info.mode, className: info.mode });
    state.header.setMode(info.mode);

    // Prepare UI
    headerView.clearHeader();
    // Render Logo
    headerView.renderLogo();

    switch (info.mode) {
        case mode.header.ideal:
            ideal();
            break;
        case mode.header.user:
            user();
            break;
    }
};
const ideal = () => {
    // Render Ideal
    headerView.renderIdeal();
    headerView.toggleClass('ideal');

    // Adding Event Listeners
    // Form Closing
    elements.Forms.addEventListener('click', formController.controlForm);

    // Log In
    const loginCtaBtn = document.querySelector(elementStrings.btns.loginCtaBtn);
    loginCtaBtn.addEventListener('click', loginController.controlLoginCta);
    // Sign Up
    const signupCtaBtn = document.querySelector(elementStrings.btns.signupCtaBtn);
    signupCtaBtn.addEventListener('click', signupController.controlSignupCta);
};
const user = () => {
    // Render User
    headerView.renderUser();
    headerView.toggleClass('user');
};
