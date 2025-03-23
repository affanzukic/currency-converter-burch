const pages = {
    home: 'pages/home.html',
    currencies: 'pages/currencies.html',
    history: 'pages/history.html',
    register: 'pages/register.html',
    login: 'pages/login.html',
};

const components = {
    navbar: 'components/navbar.html',
    footer: 'components/footer.html',
};

async function loadComponent(component) {
    try {
        const response = await fetch(components[component]);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${component}`);
        }
        const html = await response.text();
        document.getElementById(component).innerHTML = html;
    } catch (error) {
        console.error(error);
        document.getElementById(component).innerHTML = `<p class="text-red-500">Error loading component: ${component}</p>`;
    }
}

async function loadPage(page) {
    try {
        const response = await fetch(pages[page]);
        if (!response.ok) {
            throw new Error(`Failed to load page: ${page}`);
        }
        const html = await response.text();
        document.getElementById('app').innerHTML = html;
    } catch (error) {
        console.error(error);
        document.getElementById('app').innerHTML = `<p class="text-red-500">Error loading page: ${page}</p>`;
    }
}

async function initializeApp() {
    await loadComponent('navbar');
    await loadComponent('footer');
    await loadPage('home');
}

initializeApp();
