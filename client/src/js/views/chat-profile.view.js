import { elements, select } from '../utils/base.util';

export const clearChatProfile = () => (select(elements.ChatProfile).innerHTML = '');
