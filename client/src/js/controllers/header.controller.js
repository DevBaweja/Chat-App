import state from '../state';
// Utils
import { elements, elementStrings, mode, select } from '../utils/base.util';
// Models
import Header from '../models/Header';
// Views
import * as headerView from '../views/header.view';
// Controllers
import * as formController from './auth/form.controller';

export const controlHeader = info => {
    // Init Header
    if (!state['header']) state['header'] = new Header({ mode: info.mode });
    state['header'].setMode(info.mode);

    // Prepare UI
    headerView.clearHeader();
    // Render Title
    headerView.renderTitle();

    switch (info.mode) {
        case mode.header.ideal:
            ideal();
            break;
        case mode.header.user:
            user();
            break;
    }
};

// ! For Development
window.controlHeader = controlHeader;

const ideal = () => {
    // Render Ideal
    headerView.renderIdeal();

    // Form Closing
    select(elements.Forms).addEventListener('click', formController.controlExit);

    // Log In
    const loginCtaBtn = select(elementStrings.btns.loginCtaBtn);
    loginCtaBtn.addEventListener('click', () => formController.controlForm({ mode: mode.form.login }));
    // Sign Up
    const signupCtaBtn = select(elementStrings.btns.signupCtaBtn);
    signupCtaBtn.addEventListener('click', () => formController.controlForm({ mode: mode.form.signup }));
};

const user = () => {
    // Getting user from state
    const { user } = state;
    // Render User
    headerView.renderUser(user);
};
