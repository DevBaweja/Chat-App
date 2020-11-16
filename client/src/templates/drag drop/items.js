import { selectAll } from '../../utils/base.util';

const items = selectAll(elementStrings.chatPanel.recentChat.item);
items.forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('user', event.target.dataset.user);
    });
    item.addEventListener('dragend', event => {});
});
