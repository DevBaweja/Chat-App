let markup;
const menu__item = item => `
<li class="menu__item">
    <div class="menu__link" role="button" data-goTo="${item.toLowerCase()}" title="${item}">
        ${item}
    </div>
</li>
`;
markup = `
<div class="menu">
    <ul class="menu__list">
        <li class="menu__item">
            <div class="menu__link menu__link--active" role="button" data-goTo="chats">
                Chats
            </div>
        </li>
        ${['Favourites', 'Active', 'Friends', 'Groups'].map(cur => menu__item(cur)).join('')}
    </ul>
</div>
`;
select(elements.Header).insertAdjacentHTML('beforeend', markup);