const openMenuBtn = document.querySelector('.header-area .open-menu-btn button');
const mobileMenu = document.querySelector('.header-area .mobile-menu-area');
const closeBtn = document.querySelector('.header-area .close-btn button');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('toggle-mobile-menu');
    body.classList.add('bg-gray');
})
closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('toggle-mobile-menu');
    body.classList.remove('bg-gray');
})

// accordion

const collapseContent = document.querySelectorAll('.analysis-accordion .accordion .accordion-collapse');
for (let i = 0; i < collapseContent.length; i++){
    if (collapseContent[i].classList.contains('show')) {
        console.log("");
    } else {
        collapseContent[0].classList.add('show');
   }
}