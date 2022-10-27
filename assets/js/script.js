let burgerMenu = document.querySelector('.menu-burger');
let burgerMenuContainer = document.querySelector('.menu-burger-container');
burgerMenu.addEventListener('click', () => {
    burgerMenuContainer.classList.toggle('__open');
})