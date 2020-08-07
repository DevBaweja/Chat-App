export const elements = {
    App: '.app',
    Header: '.header',
    ChatPanel: '.chat-panel',
    ChatBox: '.chat-box',
    ChatProfile: '.chat-profile',

    Forms: '.forms',
    Alerts: '.alerts',
    Dropdowns: '.dropdowns',
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
            in: '.chat-box-user__drop-in',
            out: '.chat-box-user__drop-out',
            options: '.chat-box-user__header--options',
        },
    },
    dropdowns: {
        aboutMeDropdown: '.about-me__dropdown',
        chatPanelDropdown: '.chat-panel-user__dropdown',
        chatBoxDropdown: {
            in: '.chat-box-user-in__dropdown',
            out: '.chat-box-user-out__dropdown',
        },
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
    chatBox: {
        header: {
            back: '.chat-box-user__header--back',
            img: '.chat-box-user__header--img',
            name: '.chat-box-user__header--content-name',
        },
        footer: {
            emoji: '.chat-box-user__footer--emoji',
            location: '.chat-box-user__footer--location',
            attach: '.chat-box-user__footer--attach',
            camera: '.chat-box-user__footer--camera',
            input: '.chat-box-user__footer--input',
            send: '.chat-box-user__footer--send',
        },
    },
};

export const elementClasses = {
    selected: {
        chatPanelItem: 'chat-panel-user__item--selected',
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
        user: 'user',
        friend: 'friend',
        stranger: 'stranger',
    },
    theme: {
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
export const actions = {
    aboutMe: {
        toggleTheme: 'toggle-theme',
        myProfile: 'my-profile',
    },
};
export const io = {
    events: {},
};

export const select = className => document.querySelector(className);
export const selectAll = className => Array.from(document.querySelectorAll(className));
