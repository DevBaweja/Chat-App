// State
import state from '../state';
// Utils
import { elementStrings } from '../utils/base.util';
// Models
import Login from '../models/Login';
// Views
import * as loginView from '../views/login.view';

// Forms
const controlLogin = event => {
    event.preventDefault();

    console.log('Log in');
    // event.preventDefault();
    // 1) Getting user inputs
    const inputs = loginView.getUserInput();
    //! 2) Checking user inputs
    // { email, password }

    // 3) Init login
    state.login = new Login({ ...inputs });
    console.log(state.login);
};
// CTA
export const controlLoginCta = () => {
    // 1) Rendering Login form
    loginView.renderLoginForm();
    // 2) Adding event listener to form
    document.querySelector(elementStrings.loginForm).addEventListener('submit', controlLogin);
};
