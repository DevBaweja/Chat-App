import state from '../state';
// Utils
import { mode, select, elementStrings } from '../utils/base.util';
// Models
import Navbar from '../models/Navbar';
// Views
import * as navbarView from '../views/navbar.view';
// Controllers
import * as chatPanelController from './chat-panel.controller';
import * as chatProfileController from './chat-profile.controller';

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
    // List
    select(elementStrings.navbar.user.list).addEventListener('click', event => {
        const { target } = event;
        // Item Element
        const item = target.closest(elementStrings.navbar.user.item);
        if (!item) return;

        // Type
        const type = item.dataset.type;
        if (!type) return;

        // Remove Selected
        navbarView.removeSelected();
        // Add Selected
        navbarView.addSelected(item);
        // No render
        // if (state['chatPanel'].mode === type) return;
        chatPanelController.controlChatPanel({ mode: type });
    });
    // Photo
    select(elementStrings.navbar.user.photo).addEventListener('click', () => {
        // No render
        if (state['chatProfile'].mode === mode.chatProfile.user) return;
        chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
    });
};
