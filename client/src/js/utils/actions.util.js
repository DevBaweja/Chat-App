const actions = {
    aboutMe: {
        profile: 'profile',
        theme: 'theme',
        setting: 'setting',
        logout: 'logout',
    },
    chatPanel: {
        read: 'read',
        unread: 'unread',
        pin: 'pin',
        unpin: 'unpin',
        mute: 'mute',
        unmute: 'unmute',
        add: 'add',
        remove: 'remove',
        delete: 'delete',
    },
    chatBox: {
        in: {
            copy: 'copy',
            like: 'like',
            unlike: 'unlike',
            reply: 'reply',
            delete: 'delete',
        },
        out: {
            copy: 'copy',
            edit: 'edit',
            reply: 'reply',
            delete: 'delete',
        },
    },
};
export default actions;
