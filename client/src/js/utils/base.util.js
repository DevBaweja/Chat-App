export const elements = {
    App: document.querySelector('.app'),
    Header: document.querySelector('.header'),
    ChatPanel: document.querySelector('.chat-panel'),
    ChatBox: document.querySelector('.chat-box'),
    ChatProfile: document.querySelector('.chat-profile'),

    Forms: document.querySelector('.forms'),
    Alerts: document.querySelector('.alerts'),
    Dropdowns: document.querySelector('.dropdowns'),
};

export const elementStrings = {
    btns: {
        loginCtaBtn: '.cta__log-in',
        signupCtaBtn: '.cta__sign-up',
        signupBtn: '.user-signup__form--btn',
        loginBtn: '.user-login__form--btn',
    },
    forms: {
        signupForm: '.user-signup__form',
        loginForm: '.user-login__form',
    },
    inputs: {
        signupInput: '.user-signup__form--input',
        loginInput: '.user-login__form--input',
    },
    drops: {
        aboutMeDrop: '.about-me__drop',
        chatPanelDrop: '.chat-panel__drop',
    },
    dropdowns: {
        aboutMeDropdown: '.about-me__dropdown',
        chatPanelDropdown: '.chat-panel-user__dropdown',
    },
    dropdownItems: {
        aboutMeDropdownItem: '.about-me__dropdown--item',
        chatPanelDropdownItem: '.chat-panel-user__dropdown--item',
    },
    items: {
        chatPanelItem: '.chat-panel-user__item',
    },
    themes: {
        dark: 'dark',
        darkGreen: 'dark-green',
        darkBlue: 'dark-blue',
        darkPurple: 'dark-purple',
        darkRed: 'dark-red',
        darkYellow: 'dark-yellow',
        darkGrey: 'dark-grey',
        darkWhite: 'dark-white',
    },
};
export const mode = {
    header: {
        ideal: 'ideal',
        user: 'user',
    },
    chatPanel: {
        ideal: 'ideal',
        empty: 'empty',
        user: {
            recentChat: 'recent-chat',
        },
    },
    chatBox: {
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
    },
    chatProfile: {
        myProfile: 'my-profile',
    },
};
export const actions = {
    aboutMe: {
        toggleTheme: 'toggle-theme',
        myProfile: 'my-profile',
    },
};
export const io = {
    events: {},
};
