const relationOptions = ['read', 'chat', 'notification', 'favourite'];
const relationDefault = { read: 'mark', chat: 'unpin', notification: 'unmute', favourite: 'remove' };
const relationInterest = { read: 'unmark', chat: 'pin', notification: 'mute', favourite: 'add' };

export { relationOptions, relationDefault, relationInterest };
