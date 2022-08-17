// Hamburger Menu Open & Close

const body = document.querySelector('body');
const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
    
    if (header.classList.contains('open')) { //Close Hamburger Menu
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    }

    else { //Open Hamburger Menu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})