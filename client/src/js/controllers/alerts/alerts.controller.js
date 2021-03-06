import state from '../../state';
// Utils
import { mode, bold, capitalize } from '../../utils/base.util';
// Models
import Alert from '../../models/Alert';
// Views
import * as alertsView from '../../views/alerts/alerts.view';

export const controlAlerts = info => {
    // Init Alert
    state.set('alert', info, Alert);

    // Prepare UI
    alertsView.clearAlerts();

    switch (info.mode) {
        case mode.alert.misc.success:
            miscSuccess(info);
            break;
        case mode.alert.misc.failure:
            miscFailure(info);
            break;
        case mode.alert.error.duplicate:
            errorDuplicate();
            break;
        case mode.alert.error.email:
            errorEmail();
            break;
        case mode.alert.error.current:
            errorCurrent();
            break;
        case mode.alert.error.password:
            errorPassword();
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
        case mode.alert.forget.success:
            forgetSuccess();
            break;
        case mode.alert.forget.failure:
            forgetFailure();
            break;
        case mode.alert.reset.success:
            resetSuccess();
            break;
        case mode.alert.reset.failure:
            resetFailure();
            break;
        case mode.alert.update.profile.success:
            updateProfileSuccess();
            break;
        case mode.alert.update.profile.failure:
            updateProfileFailure();
            break;
        case mode.alert.update.password.success:
            updatePasswordSuccess();
            break;
        case mode.alert.update.password.failure:
            updatePasswordFailure();
            break;
        case mode.alert.update.theme:
            updateThemeSuccess();
            break;
        case mode.alert.update.color:
            updateColorSuccess();
            break;
        case mode.alert.update.background:
            updateBackgroundSuccess();
            break;
        case mode.alert.delete.account.success:
            deleteAccountSuccess();
            break;
        case mode.alert.delete.account.failure:
            deleteAccountFailure();
            break;
        case mode.alert.logout.success:
            logoutSuccess();
            break;
        case mode.alert.request.sent.success:
            requestSentSuccess();
            break;
        case mode.alert.request.sent.failure:
            requestSentFailure();
            break;
        case mode.alert.request.received.success:
            requestReceivedSuccess();
            break;
    }

    const time = info.time || 5000;
    // Clearing UI and data after timeout
    setTimeout(() => {
        alertsView.clearAlerts();
        state['alert'] = null;
    }, time);
};

// ! For Development
window.controlAlerts = controlAlerts;

export const controlBetterAlerts = ({ data }) => {
    // Better Alerts
    let newMessage = data;
    console.log(data);
    switch (true) {
        case newMessage.includes('duplicate'):
            controlAlerts({ mode: mode.alert.error.duplicate });
            break;
        case newMessage.includes('valid email'):
            controlAlerts({ mode: mode.alert.error.email });
            break;
        case newMessage.includes('current password'):
            controlAlerts({ mode: mode.alert.error.current });
            break;
        case newMessage.includes('passwords must match'):
            controlAlerts({ mode: mode.alert.error.password });
            break;
        default:
            // 0) Error Alert
            controlAlerts({ mode: mode.alert.misc.failure, data: newMessage });
            break;
    }
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

const errorDuplicate = () => {
    const data = {
        text: 'Email address already taken. Please enter a different email address.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};
const errorEmail = () => {
    const data = {
        text: 'Please enter an valid email address.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const errorCurrent = () => {
    const data = {
        text: 'Your current password is incorrect.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};
const errorPassword = () => {
    const data = {
        text: 'Passwords must match.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const loginSuccess = () => {
    // Getting email
    const { email } = state['login'];
    const data = {
        text: `Logged in successfully as ${bold(email)}.`,
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
    // Getting name
    const { name } = state['signup'];
    const data = {
        text: `You have been successfully registered as ${bold(name)}`,
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

const forgetSuccess = () => {
    // Getting email
    const { email } = state['forget'];
    const data = {
        text: `The token has been sent to ${bold(email)}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const forgetFailure = () => {
    const data = {
        text: 'There was problem while sending token.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const resetSuccess = () => {
    const data = {
        text: `Your password has been reset.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const resetFailure = () => {
    const data = {
        text: 'There was problem while reseting your password.',
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

const updatePasswordSuccess = () => {
    const data = {
        text: 'Your password has been updated successfully.',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const updatePasswordFailure = () => {
    const data = {
        text: 'There was error while updating your password.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const updateThemeSuccess = () => {
    // Getting theme
    const { theme } = state['setting'];
    const data = {
        text: `Theme has been changed to ${bold(capitalize(theme))}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const updateColorSuccess = () => {
    // Getting color
    const { color } = state['setting'];
    const data = {
        text: `Color has been changed to ${bold(capitalize(color))}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const updateBackgroundSuccess = () => {
    // Getting wallpaper
    const { mode } = state['theme'];
    const { wallpaper } = state['setting'];
    const data = {
        text: `Wallpaper has been changed to ${bold(capitalize(wallpaper[mode]))}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const deleteAccountSuccess = () => {
    console.log('Done');
    const data = {
        text: `Your account is successfully deactivated.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const deleteAccountFailure = () => {
    const data = {
        text: `There was error while deactivating your account.`,
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

const requestSentSuccess = () => {
    const data = {
        text: 'You request has been sent successfully to xyz',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};
const requestSentFailure = () => {
    const data = {
        text: 'You request was unable to sent to xyz!',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const requestReceivedSuccess = () => {
    const data = {
        text: 'You have received a request from xyz!',
        type: 'info',
    };
    alertsView.renderAlerts(data);
};
