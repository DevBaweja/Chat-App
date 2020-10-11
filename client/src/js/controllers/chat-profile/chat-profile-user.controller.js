import state from '../../state';
// Utils
import { mode, elementStrings, select } from '../../utils/base.util';
// Models
import UpdateProfile from '../../models/UpdateProfile';
// Controllers
import * as chatProfileController from '../chat-profile.controller';
import * as alertsController from '../alerts/alerts.controller';
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
    // Render Save Profile button
    chatProfileUserView.renderSaveProfile();
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

// Control Avatar
export const controlAvatar = event => {
    const { target } = event;

    // Elements
    const groupElement = target.closest(elementStrings.chatProfile.user.avatar.group);
    const imgElement = select(elementStrings.chatProfile.user.avatar.img, groupElement);
    const iconElement = select(elementStrings.chatProfile.user.avatar.icon, groupElement);

    // Getting src
    const src = imgElement.getAttribute('src');
    // Remove Selected
    chatProfileUserView.removeSelected();
    // Add Selected
    chatProfileUserView.addSelected(iconElement);
    // Set Preview
    select(elementStrings.chatProfile.user.pic.img).setAttribute('src', src);
    // Render Save Profile button
    chatProfileUserView.renderSaveProfile();
};

// Control Upload
export const controlUpload = event => {
    console.log('Pic Upload');
    const { target } = event;

    // Getting file
    const [file] = target.files;
    if (!file) {
        // Backup
        select(elementStrings.chatProfile.user.pic.img).setAttribute('src', 'img/avatar/unisex.png');
        return;
    }

    // Creating Reader
    var reader = new FileReader();
    reader.readAsDataURL(file);
    // Adding Listener for reader
    reader.addEventListener('load', event => {
        const { target } = event;
        const src = target.result;
        // Set Preview
        select(elementStrings.chatProfile.user.pic.img).setAttribute('src', src);
    });

    // Remove Selected
    chatProfileUserView.removeSelected();

    // Render Save Profile button
    chatProfileUserView.renderSaveProfile();
};
// Update Profile
export const controlUpdateProfile = async event => {
    event.preventDefault();

    console.log('Update Profile');
    // 0) Prepare UI for changes
    chatProfileUserView.prepareUIForUser();

    // 1) Getting user inputs
    const inputs = chatProfileUserView.getUserInput();
    // 2) Checking user inputs
    // inputs : FormData
    // { name, email, bio }

    // 3) Pic Processing
    chatProfileUserView.getUserPhoto(inputs);

    // 3) Init UpdateProfile
    if (!state['updateProfile']) state['updateProfile'] = new UpdateProfile({ inputs });
    state['updateProfile'].setUserInput({ inputs });

    try {
        // 4) Making API call
        const data = await state['updateProfile'].updateProfile();
        switch (data.status) {
            case 'success':
                {
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state['user'] = user;

                    // 0) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.update.profile.success });

                    // 1) Initial UI
                    chatProfileUserView.initialUIForUser();

                    // 2) Re Render with user
                    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);

                    // 0) Better Alerts
                    alertsController.controlBetterAlerts({ data: data.message });
                    // 1) Initial UI
                    chatProfileUserView.initialUIForUser();
                }
                break;
        }

        // Clear update profile
        state['updateProfile'] = null;
    } catch (err) {
        console.log('ERROR', err.message);

        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.update.profile.failure });

        // 1) Initial UI
        chatProfileUserView.initialUIForUser();

        // State Changes
        state['updateProfile'] = null;
    }
};
