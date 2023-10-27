let menuBtn = document.querySelector('.menu-btn');
let navList = document.querySelector('.navbar ul');
let header = document.querySelector('header');

// on click toggle the class 
menuBtn.addEventListener('click',(e)=>{
e.currentTarget.classList.toggle('open-menu');
navList.classList.toggle('show-menu')
})

// window Y scrolling in px
let scrollpos = window.scrollY

const add_class_on_scroll = () => header.classList.add("small-header")
const remove_class_on_scroll = () => header.classList.remove("small-header")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
// if scroll position is greather than 80px add the next class else remove
    if (scrollpos >= 80) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
  })