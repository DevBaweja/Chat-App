import state from '../state';
// Utils
import { mode } from '../utils/base.util';
// Models
import Navbar from '../models/Navbar';
// Views
import * as navbarView from '../views/navbar.view';
// Controllers

export const controlNavbar = info => {
    // Init Navbar
    if (!state['navbar']) state['navbar'] = new Navbar({ mode: info.mode, className: info.mode });
    state['navbar'].setMode(info.mode);

    // Prepare UI
    navbarView.clearNavbar();

    switch (info.mode) {
        case mode.navbar.ideal:
            ideal();
            break;
        case mode.navbar.user:
            user();
            break;
    }
};

// ! For Development
window.controlNavbar = controlNavbar;

const ideal = () => {
    // Render Ideal
    navbarView.renderIdeal();
    // Gradient
    navbarView.toggleClass(mode.navbar.ideal);
};

const user = () => {
    // Getting user from state
    const { user } = state;
    // Render User
    navbarView.renderUser(user);
    navbarView.toggleClass(mode.navbar.user);
};
