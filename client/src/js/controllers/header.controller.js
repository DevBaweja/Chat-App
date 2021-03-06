import state from '../state';
// Utils
import { elementStrings, mode, select, actions } from '../utils/base.util';
// Models
import Header from '../models/Header';
// Views
import * as headerView from '../views/header.view';
// Controllers
import * as formController from './auth/form.controller';
import * as aboutMeDropdownController from './dropdowns/about-me-dropdown.controller';

export const controlHeader = info => {
    // Init Header
    state.set('header', info, Header);

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
    const { theme } = state;
    // Render User
    headerView.renderUser({ user, theme });
    // Event Listeners
    select(elementStrings.aboutMe.list).addEventListener('click', event => {
        const item = event.target.closest(elementStrings.aboutMe.item);
        if (!item) return;
        const { type } = item.dataset;

        switch (type) {
            case actions.aboutMe.profile:
                aboutMeDropdownController.profile();
                break;
            case actions.aboutMe.theme:
                aboutMeDropdownController.theme();
                break;
            case actions.aboutMe.setting:
                aboutMeDropdownController.setting();
                break;
            case actions.aboutMe.activity:
                aboutMeDropdownController.activity();
                break;
            case actions.aboutMe.logout:
                aboutMeDropdownController.logout();
                break;
        }
    });
    // Profile
    select(elementStrings.aboutMe.link).addEventListener('click', aboutMeDropdownController.profile);
};
