let menuBtn = document.querySelector('.menu-btn');
let navList = document.querySelector('.navbar ul')

menuBtn.addEventListener('click',(e)=>{
e.currentTarget.classList.toggle('open-menu');
navList.classList.toggle('show-menu')
})