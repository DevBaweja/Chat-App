// Views
import * as formView from '../../views/auth/form.view';

export const controlForm = event => {
    const { target } = event;
    if (target.matches('.blur') || target.matches('.user-cross,.user-cross *')) {
        // Clearing Forms
        formView.clearForm();
    }
};

// Control form with login and signup as mode
