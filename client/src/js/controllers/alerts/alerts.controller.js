import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Models
import Alert from '../../models/Alert';
// Views
import * as alertsView from '../../views/alerts/alerts.view';

export const controlAlerts = info => {
    // Init Alert
    if (!state['alert']) state['alert'] = new Alert(info);
    state['alert'].setMode(info.mode);

    // Prepare UI
    alertsView.clearAlerts();

    switch (info.mode) {
        case mode.alert.misc.success:
            miscSuccess(info);
            break;
        case mode.alert.misc.failure:
            miscFailure(info);
            break;
        case mode.alert.login.success:
            loginSuccess();
            break;
        case mode.alert.login.failure:
            loginFailure();
            break;
        case mode.alert.signup.success:
            signupSuccess();
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

    // Clearing UI after timeout
    state['alert'].setTimer(alertsView.clearAlerts);
    // Clearing data after timeout
    state['alert'].setTimer(() => (state['alert'] = null));
};

const miscSuccess = ({ data }) => {
    const miscData = {
        text: data,
        type: 'success',
    };
    alertsView.renderAlerts(miscData);
};

const miscFailure = ({ data }) => {
    const miscData = {
        text: data,
        type: 'failure',
    };
    alertsView.renderAlerts(miscData);
};

const loginSuccess = () => {
    // Getting user from state
    const { user } = state;
    const data = {
        text: `Logged in successfully as ${user.name}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const loginFailure = () => {
    const data = {
        text: 'There was problem in logging in.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const signupSuccess = () => {
    // Getting user from state
    const { user } = state;
    const data = {
        text: `You have been successfully registered as ${user.name}`,
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
