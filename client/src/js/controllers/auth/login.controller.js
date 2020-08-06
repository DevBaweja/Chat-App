// State
import state from '../../state';
// Utils
import { elementStrings, select } from '../../utils/base.util';
// Models
import Login from '../../models/Login';
// Views
import * as loginView from '../../views/auth/login.view';

// CTA
export const controlLoginCta = () => {
    // 1) Rendering Login form
    loginView.renderLoginForm();
    // 2) Adding event listener to form
    select(elementStrings.forms.loginForm).addEventListener('submit', controlLogin);
};

// Form
const controlLogin = event => {
    event.preventDefault();

    console.log('Log in');
    // 1) Getting user inputs
    const inputs = loginView.getUserInput();
    // 2) Checking user inputs
    // { email, password }

    // 3) Init login
    if (!state.login) state.login = new Login({ ...inputs });

    // 4) Making API call
    state.login.loginUser();
};
