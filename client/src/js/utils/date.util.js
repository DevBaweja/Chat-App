const longDate = date =>
    new Date(date).toLocaleDateString([], {
        dateStyle: 'long',
    });

const shortDate = date =>
    new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

export { longDate, shortDate };
