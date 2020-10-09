const elementStrings = {
    btns: {
        loginCtaBtn: '.cta__log-in',
        signupCtaBtn: '.cta__sign-up',
        signupBtn: '.user-signup__form--btn',
        loginBtn: '.user-login__form--btn',
    },
    forms: {
        signup: {
            form: '.user-signup__form',
            toggle: {
                password: '.user-signup__form--toggle-password',
                passwordConfirm: '.user-signup__form--toggle-password-confirm',
            },
            elements: {
                password: '.user-signup__form--input-password',
                passwordConfirm: '.user-signup__form--input-password-confirm',
            },
            addOn: '.user-signup__form--addon',
        },
        login: {
            form: '.user-login__form',
            toggle: '.user-login__form--toggle',
            elements: {
                password: '.user-login__form--input-password',
            },
            forget: '.user-login__form--forget',
            addOn: '.user-login__form--addon',
        },
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
        chatBoxDropdownItem: {
            in: '.chat-box-user-in__dropdown--item',
            out: '.chat-box-user-out__dropdown--item',
        },
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
        background: '.chat-box-user__field',
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
export default elementStrings;
