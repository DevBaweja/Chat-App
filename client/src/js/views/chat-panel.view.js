import { elementStrings } from '../utils/base.util';
export const getUserId = event => {
    const item = event.target.closest(elementStrings.items.chatPanelItem);
    const { userid: userId } = item.dataset;
    return userId;
};
