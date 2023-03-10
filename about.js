//QUERY SELECTORS
//Nav icon
const navIcon = document.querySelector('.js-nav-icon');
//Nav menu
const navMenu = document.querySelector('.js-nav-menu');

//EVENT HANDLERS
function handleNavIconClick() {
    navMenu.classList.toggle('js-hidden');
}

//EVENT LISTENERS
navIcon.addEventListener('click', handleNavIconClick);