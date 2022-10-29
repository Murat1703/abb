let showModal = document.querySelector('.__submain-btn');
let modalWindow = document.querySelector('.modal-wrapper');
let closeWindow = document.querySelector('.close-modal');
showModal.addEventListener('click', () => {
    modalWindow.classList.add('__open-modal');
})
function closeModalWindow(){
    modalWindow.classList.remove('__open-modal');
}
closeWindow.addEventListener('click', () => {
    closeModalWindow();
})