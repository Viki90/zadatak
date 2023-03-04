const modalBtn = document.querySelector(".contact-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function() {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove("open-modal");
});

 const navToggle = document.querySelector('.nav-toggle');
 const menu = document.querySelector('.dropdownMenu');
 const list = document.querySelector('.nav-menu__left');
 const closeNav = document.querySelector('.close-nav');

 navToggle.addEventListener('click', function() {
    console.log("ghhdh");
    if(menu.classList.contains('show-links') && list.classList.contains('show-list')){
        menu.classList.remove('show-links');
        list.classList.remove('show-list');
    } else {
        menu.classList.add('show-links');
        list.classList.add('show-list');
    }
 });

 closeNav.addEventListener('click', function() {
    if(menu.classList.contains('show-links') && list.classList.contains('show-list')){
        menu.classList.remove('show-links');
        list.classList.remove('show-list');
    }
 });