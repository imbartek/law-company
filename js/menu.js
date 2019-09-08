btn = document.querySelector('.menu');
menu = document.querySelector('.menu__list');
exitbtn = document.querySelector('.exit-btn');


btn.addEventListener('click', ()=> {
    menu.classList.toggle('active')
    btn.classList.toggle('hidden')
});

exitbtn.addEventListener('click', ()=> {
    menu.classList.remove('active')
    btn.classList.remove('hidden')
});