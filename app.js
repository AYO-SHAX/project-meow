const menu =document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})


document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    h1.style.animation = "phaseIn 5s forwards";
});

const toggleButton = document.getElementById('toggle-button')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
}

while (menuLinks.classList.toggle('active')) {
    sidebar.classList.toggle('close')
}

