// Utils
import { elements, elementStrings, mode } from '../utils/base.util';
// Views
import * as headerView from '../views/header.view';
// Controllers
import * as formController from './auth/form.controller';
import * as loginController from './auth/login.controller';
import * as signupController from './auth/signup.controller';

export const controlHeader = info => {
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
    elements.Header.classList.add('ideal');

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
    elements.Header.classList.add('user');
};
