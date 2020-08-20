import { mode } from '../../utils/base.util';
// Models
import Alert from '../../models/Alert';
// Views
import * as alertsView from '../../views/alerts/alerts.view';

export const controlAlerts = info => {
    // Init Alert
    if (!state.alert) state.alert = new Alert(info);
    state.alert.setMode(info.mode);

    // Prepare UI
    alertsView.clearAlerts();

    switch (info.mode) {
        case mode.alert.login.success:
            loginSuccess();
            break;
        case mode.alert.login.failure:
            loginFailure();
            break;
        case mode.alert.signup.success:
            signupSuccess(info);
            break;
        case mode.alert.signup.failure:
            signupFailure();
            break;
        case mode.alert.updateProfile.success:
            updateProfileSuccess();
            break;
        case mode.alert.updateProfile.failure:
            updateProfileFailure();
            break;
        case mode.alert.logout.success:
            logoutSuccess();
            break;
        case mode.alert.request.sent.success:
            sentSuccess();
            break;
        case mode.alert.request.sent.failure:
            sentFailure();
            break;
        case mode.alert.request.received:
            requestReceived();
            break;
    }

    // Clearing after timeout
    state.alert.setTimer(alertsView.clearAlerts);
};

const loginSuccess = () => {
    const data = {
        text: 'Logged in successfully.',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const loginFailure = () => {
    const data = {
        text: 'Incorrect email or password!',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const signupSuccess = ({ data: { user } }) => {
    const data = {
        text: `You have been successfully registered as ${user}`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const signupFailure = () => {
    const data = {
        text: 'There was problem in signing up.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const updateProfileSuccess = () => {
    const data = {
        text: 'Your profile has been updated successfully.',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const updateProfileFailure = () => {
    const data = {
        text: 'There was error while updating your profile.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const logoutSuccess = () => {
    const data = {
        text: 'Logged out successfully.',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const sentSuccess = () => {
    const data = {
        text: 'You request has been sent successfully to xyz',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};
const sentFailure = () => {
    const data = {
        text: 'You request was unable to sent to xyz!',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};
const requestReceived = () => {
    const data = {
        text: 'You have received a request from xyz!',
        type: 'info',
    };
    alertsView.renderAlerts(data);
};
