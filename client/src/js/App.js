export const render = () => {
    const markup = `
    <div class="app">
        <div class="container">
            <!-- Header -->
            <header class="header"></header>
            <!-- /Header -->
            <!-- Main -->
            <main class="main">
                <!-- Chat Panel -->
                <div class="chat-panel"></div>
                <!-- Chat Box -->
                <div class="chat-box"></div>
                <!-- Chat Profile -->
                <div class="chat-profile"></div>
            </main>
            <!-- /Main -->
            <!-- Footer -->
            <footer class="footer">
                <div class="copyright">
                    &copy; Chat Fuel. All rights reserved.
                </div>
                <div class="created-by">
                    <p>
                        Created by
                        <span class="developers">
                            Jayesh
                        </span>
                        &
                        <span class="developers">
                            Dev
                        </span>
                        with
                    </p>
                    <svg class="created-by--svg">
                        <use xlink:href="svg/sprite.svg#icon-heart"></use>
                    </svg>
                </div>
            </footer>
            <!-- /Footer -->
        </div>
        <!-- /Container -->

        <!-- Loading -->
        <div class="loading"></div>
        <!-- /Loading -->

        <!-- Guide -->
        <div class="guide"></div>
        <!-- Forms -->
        <div class="forms"></div>
        <!-- /Forms -->

        <!-- Dropdowns -->
        <div class="dropdowns"></div>
        <!-- /Dropdowns -->

        <!-- Alerts -->
        <div class="alerts"></div>
        <!-- /Alerts -->
    </div>
    `;

    document.getElementById('root').innerHTML = markup;
};
