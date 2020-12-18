const state = {
    mode: null,
    theme: null,
    init: null,
    user: null,
    setting: null,
    token: null,
    message: null,
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
    subSetting: null,
    backgroundImage: null,
    status: null,
    updateProfile: null,
    updatePassword: null,
    deleteAccount: null,
    search: null,
    friend: null,
    sentRequest: null,
    receiveRequest: null,
    alert: null,
    loading: null,
    guide: null,
};

state.set = (key, info, Model) => {
    if (!state[key]) state[key] = new Model(info);
    state[key].setMode(info.mode);
};

window.state = state;

export default state;
