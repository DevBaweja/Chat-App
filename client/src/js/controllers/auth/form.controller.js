// Views
import * as formsView from '../../views/auth/forms.view';
export const controlForm = event => {
    const { target } = event;
    if (target.matches('.blur') || target.matches('.user-cross,.user-cross *')) {
        // Clearing Forms
        formsView.clearForms();
    }
};
