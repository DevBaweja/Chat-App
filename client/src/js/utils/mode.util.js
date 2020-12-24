const mode = {
    mode: {
        production: 'production',
        development: 'development',
    },
    form: {
        login: 'login',
        signup: 'signup',
        forget: 'forget',
        reset: 'reset',
        update: 'update',
    },
    header: {
        ideal: 'ideal',
        user: 'user',
    },
    navbar: {
        ideal: 'ideal',
        user: 'user',
    },
    chatPanel: {
        ideal: 'ideal',
        empty: 'empty',
        user: {
            activeNow: 'active-now',
            recentChat: 'recent-chat',
            search: 'search',
            friend: 'friend',
            requestSent: 'request-sent',
            requestReceive: 'request-receive',
        },
        instruction: 'instruction',
    },
    chatBox: {
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
        drag: 'drag',
        animate: 'animate',
        game: 'game',
    },
    chatProfile: {
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
        friend: 'friend',
        stranger: 'stranger',
        receiveRequest: 'receive-request',
        sentRequest: 'sent-request',
        setting: 'setting',
        activity: 'activity',
        settingSub: 'setting-sub',
        activitySub: 'activity-sub',
    },
    setting: {
        color: 'color',
        wallpaper: 'wallpaper',
        privacy: 'privacy',
        updatePassword: 'update-password',
        deleteAccount: 'delete-account',
    },
    activity: {
        animate: 'animate',
        game: 'game',
    },
    theme: {
        dark: 'dark',
        light: 'light',
    },
    alert: {
        misc: {
            success: 'misc-success',
            failure: 'misc-failure',
        },
        error: {
            duplicate: 'error-duplicate',
            email: 'error-email',
            password: 'error-password',
            current: 'error-current',
        },
        login: {
            success: 'login-success',
            failure: 'login-failure',
            validate: {},
        },
        signup: {
            success: 'signup-success',
            failure: 'signup-failure',
            validate: {},
        },
        forget: {
            success: 'forget-success',
            failure: 'forget-failure',
        },
        reset: {
            success: 'reset-success',
            failure: 'reset-failure',
        },
        update: {
            profile: {
                success: 'update-profile-success',
                failure: 'update-profile-failure',
            },
            password: {
                success: 'update-password-success',
                failure: 'update-password-failure',
            },
            theme: 'update-theme-success',
            color: 'update-color-success',
            background: 'update-background-success',
        },
        delete: {
            account: {
                success: 'delete-account-success',
                failure: 'delete-account-failure',
            },
        },
        logout: {
            success: 'logout-success',
        },
        request: {
            sent: {
                success: 'request-sent-success',
                failure: 'request-sent-failure',
            },
            received: {
                success: 'request-received-success',
            },
        },
    },
    combined: {
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
    },
    status: {
        online: 'online',
        offline: 'offline',
    },
};
export default mode;
