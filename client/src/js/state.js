const state = {
    mode: null,
    theme: null,
    init: null,
    user: null,
    token: null,
    form: null,
    login: null,
    signup: null,
    logout: null,
    combined: null,
    header: null,
    navbar: null,
    chatPanel: null,
    chatBox: null,
    chatProfile: null,
    setting: null,
    backgroundImage: null,
    updateProfile: null,
    updatePassword: null,
    alert: null,
    loading: null,
    guide: null,
};

state.set = (key, info, Model) => {
    if (!state[key]) state[key] = new Model(info);
    state[key].setMode(info.mode);
};

// ! For Development
window.state = state;

export default state;
