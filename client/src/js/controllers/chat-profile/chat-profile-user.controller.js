import { elementStrings, select } from '../../utils/base.util';
// Utils
// Models
// Views
import * as chatProfileUserView from '../../views/chat-profile/chat-profile-user.view';

// Control Edit
export const controlEdit = event => {
    const { target } = event;
    // Edit Element
    const editElement = target.closest(elementStrings.chatProfile.user.about.edit);

    const { type } = editElement.dataset;
    // Input Element
    const inputElement = select(elementStrings.chatProfile.user.about.elements[type]);
    // Toggle disabled
    inputElement.toggleAttribute('disabled');
};

// Control Disable
export const controlDisable = event => {
    const { target } = event;

    // Group Element
    const groupElement = target.closest(elementStrings.chatProfile.user.about.group);
    // Input Element
    const inputElement = select(elementStrings.chatProfile.user.about.input, groupElement);
    // Toggle disabled
    inputElement.toggleAttribute('disabled');
    // Render Save Profile button
    chatProfileUserView.renderSaveProfile();
};

// Update Profile
export const controlUpdateProfile = event => {
    /*
    event.preventDefault();

    console.log('Update Profile');
    // 0) Prepare UI for changes
    resetView.prepareUIForReset();

    // 1) Getting user inputs
    const inputs = resetView.getUserInput();
    // 2) Checking user inputs
    // { token, password, passwordConfirm }

    // 3) Init Reset
    if (!state['reset']) state['reset'] = new Reset({ ...inputs });

    state['reset'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['reset'].resetPassword();
        switch (data.status) {
            case 'success':
                {
                    // !For Development
                    // Token Assign
                    state['token'] = data.token;
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state['user'] = user;

                    // 5) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.reset.success });
                    // 6) Clear form
                    formView.clearForm();

                    // Combined User
                    combinedController.controlAll({ mode: mode.combined.user });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);
                    // Better Alerts
                    let newMessage = data.message;
                    switch (true) {
                        case data.message.includes('passwordConfirm'):
                            newMessage = 'Passwords must match.';
                            break;
                    }
                    // 0) Error Alert
                    alertsController.controlAlerts({ mode: mode.alert.misc.failure, data: newMessage });

                    // 1) Initial UI
                    resetView.initialUIForReset();
                }
                break;
        }

        // Clear signup
        state['reset'] = null;
    } catch (err) {
        console.log('ERROR', err.message);

        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.reset.failure });

        // 1) Initial UI
        resetView.initialUIForReset();

        // State Changes
        state['token'] = null;
        state['user'] = null;
        state['reset'] = null;
    }
    */
};
