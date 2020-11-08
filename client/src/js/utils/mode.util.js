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
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
        friend: 'friend',
        stranger: 'stranger',
        setting: 'setting',
        settingSub: 'setting-sub',
    },
    setting: {
        color: 'color',
        wallpaper: 'wallpaper',
        privacy: 'privacy',
        updatePassword: 'update-password',
        deleteAccount: 'delete-account',
    },
    theme: {
        dark: 'dark',
        light: 'light',
        color: {
            green: 'green',
            blue: 'blue',
            purple: 'purple',
            red: 'red',
            yellow: 'yellow',
            white: 'white',
            pink: 'pink',
            forest: 'forest',
            orange: 'orange',
            teal: 'teal',
            carrot: 'carrot',
            grey: 'grey',
        },
    },
    background: {
        dark: {
            1: 'dark-1',
            2: 'dark-2',
            3: 'dark-3',
            4: 'dark-4',
            5: 'dark-5',
            6: 'dark-6',
            7: 'dark-7',
            8: 'dark-8',
            9: 'dark-9',
        },
        light: {
            1: 'light-1',
        },
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
};
export default mode;
