const mainMenu = document.querySelector('.et-mainMenu');
const closeMenu = document.querySelector('.et-closeMenu');
const openMenu = document.querySelector('.et-openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}