const state = {
    currentUser: null,
};
const elements = {
    LogoBox: document.querySelector('.logo-box'),
    Header: document.querySelector('.header'),
};

const renderIdeal = () => {
    let markup;

    markup = `
    <div class="logo-box__name">
        Chat Fuel
    </div>
    `;

    elements.LogoBox.insertAdjacentHTML('beforeend', markup);

    markup = `
    `;

    elements.LogoBox.insertAdjacentHTML('afterend', markup);

    elements.Header.classList.add('ideal');
};

const renderUser = () => {
    let markup;
    markup = `
    <form class="search">
        <input type="text" class="search__input" placeholder="Search Friends" />
        <button class="search__button">
            <svg class="search__icon">
                <use xlink:href="img/sprite.svg#icon-search"></use>
            </svg>
        </button>
    </form>
`;
    elements.LogoBox.insertAdjacentHTML('beforeend', markup);

    markup = `
    <div class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <a href="#active" class="menu__link menu__link--active">
                    Active
                </a>
            </li>
            <li class="menu__item">
                <a href="#friends" class="menu__link">
                    Friends
                </a>
            </li>
            <li class="menu__item">
                <a href="#groups" class="menu__link">
                    Groups
                </a>
            </li>
            <li class="menu__item">
                <a href="#status" class="menu__link">
                    Status
                </a>
            </li>
        </ul>
    </div>
    <div class="about-me">
        About Me
    </div>
    `;
    elements.LogoBox.insertAdjacentHTML('afterend', markup);

    elements.Header.classList.add('user');
};

const init = () => {
    if (state.currentUser) {
        renderUser();
    } else {
        renderIdeal();
    }
};

init();
