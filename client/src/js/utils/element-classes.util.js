const elementClasses = {
    selected: {
        chatPanel: {
            item: 'chat-panel-user__item--selected',
        },
        chatProfile: {
            avatar: 'chat-profile__user-avatar--icon-selected',
        },
    },
    dropdowns: {
        aboutMeDropdown: 'about-me__dropdown',
        chatPanelDropdown: 'chat-panel-user__dropdown',
        chatBoxDropdown: {
            in: 'chat-box-user-in__dropdown',
            out: 'chat-box-user-out__dropdown',
        },
    },
    forms: {
        signup: 'user-signup',
        login: 'user-login',
        forget: 'user-forget',
        reset: 'user-reset',
    },
};
export default elementClasses;
