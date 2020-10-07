const mode = {
    mode: {
        production: 'production',
        development: 'development',
    },
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
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
        friend: 'friend',
        stranger: 'stranger',
        setting: 'setting',
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
            grey: 'grey',
            white: 'white',
            pink: 'pink',
            forest: 'forest',
            orange: 'orange',
            teal: 'teal',
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
        updateProfile: {
            success: 'updateProfile-success',
            failure: 'updateProfile-failure',
        },
        logout: {
            success: 'logout-success',
        },
        request: {
            sent: {
                success: 'sent-success',
                failure: 'sent-failure',
            },
            received: 'request-received',
        },
    },
    combined: {
        ideal: 'ideal',
        empty: 'empty',
        user: 'user',
    },
};
export default mode;
