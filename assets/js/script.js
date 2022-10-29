let burgerMenu = document.querySelector('.menu-burger');
let burgerMenuContainer = document.querySelector('.menu-burger-container');
let mobileMenu = document.querySelector('.mobile-menu')
burgerMenu.addEventListener('click', () => {
    burgerMenuContainer.classList.toggle('__open');
    mobileMenu.classList.toggle('___mobile');
})
