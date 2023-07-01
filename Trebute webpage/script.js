// Change theme
function changeTheme(theme) {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const blockquote = document.querySelector('blockquote');
    const footer = document.querySelector('footer');

    body.classList.remove('theme-light', 'theme-dark');
    header.classList.remove('theme-light', 'theme-dark');
    main.classList.remove('theme-light', 'theme-dark');
    blockquote.classList.remove('theme-light', 'theme-dark');
    footer.classList.remove('theme-light', 'theme-dark');

    body.classList.add(`theme-${theme}`);
    header.classList.add(`theme-${theme}`);
    main.classList.add(`theme-${theme}`);
    blockquote.classList.add(`theme-${theme}`);
    footer.classList.add(`theme-${theme}`);
}
