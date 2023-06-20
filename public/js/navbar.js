const navBar = document.querySelector('.nav')
const btnToggle = document.querySelector('#btnToggle')

btnToggle.addEventListener('click', e => {
    navBar.classList.toggle('showMenu')
})