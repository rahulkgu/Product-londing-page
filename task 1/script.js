AOS.init({
    duration: 1200,
    delay: 100,
    offset: 300,
})

let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu').onclick = () => {
    navbar.classList.add('active')
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active')
}