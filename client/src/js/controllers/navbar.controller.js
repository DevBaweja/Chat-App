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
    if (!state['navbar']) state['navbar'] = new Navbar({ mode: info.mode });
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

    // Changing State
    state['navbar'].setClassName(mode.navbar.ideal);
    navbarView.replaceClass(mode.navbar.user, mode.navbar.ideal);
};

const user = () => {
    // Getting user from state
    const { user } = state;
    // Render User
    navbarView.renderUser(user);

    // Changing State
    state['navbar'].setClassName(mode.navbar.user);
    navbarView.replaceClass(mode.navbar.ideal, mode.navbar.user);

    // Event Listeners
};
