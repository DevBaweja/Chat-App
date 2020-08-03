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
        chatBoxDrop: {
            in: 'chat-box-user__drop-in',
            out: 'chat-box-user__drop-in',
            options: 'chat-box-user__header--options',
        },
    },
    dropdowns: {
        aboutMeDropdown: '.about-me__dropdown',
        chatPanelDropdown: '.chat-panel-user__dropdown',
    },
    dropdownItems: {
        aboutMeDropdownItem: '.about-me__dropdown--item',
        chatPanelDropdownItem: '.chat-panel-user__dropdown--item',
    },
    drags: {
        chatPanelDrag: '.chat-box-drag',
    },
    lists: {
        chatPanelList: '.chat-panel-user__list',
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
    chatBox: {
        header: {
            back: '.chat-box-user__header--back',
            img: 'chat-box-user__header--img',
            name: 'chat-box-user__header--content-name',
        },
        footer: {
            emoji: 'chat-box-user__footer--emoji',
            location: 'chat-box-user__footer--location',
            attach: 'chat-box-user__footer--attach',
            camera: 'chat-box-user__footer--camera',
            input: 'chat-box-user__footer--input',
            send: 'chat-box-user__footer--send',
        },
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
        drag: 'drag',
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
