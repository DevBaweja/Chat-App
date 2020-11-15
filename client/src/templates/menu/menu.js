const menu = [
    { type: 'active-now', title: 'Active Now', svg: 'active-now' },
    { type: 'recent-chat', title: 'Recent Chats', svg: 'recent-chat' },
    { type: 'search', title: 'Search', svg: 'user-search' },
    { type: 'friend', title: 'Friends', svg: 'user-friend' },
    { type: 'request-sent', title: 'Request Sent', svg: 'request-sent' },
    { type: 'request-receive', title: 'Request Received', svg: 'request-receive' },
];

const renderMenuItem = ({ type, title }) => `
<li class="menu__item">
    <div class="menu__link" role="button" data-type="${type}" title="${title}">
        ${title}
    </div>
</li>
`;

const markup = `
<div class="menu">
    <ul class="menu__list">
        ${menu.map(item => renderMenuItem(item)).join('')}
    </ul>
</div>`;
