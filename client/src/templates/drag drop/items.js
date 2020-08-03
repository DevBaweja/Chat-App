const items = Array.from(document.querySelectorAll(elementStrings.items.chatPanelItem));
items.forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('user', event.target.dataset.user);
    });
    item.addEventListener('dragend', event => {});
});
