//Responsive menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function(){
    menu.classList.toggle('active');
})
////////



//Scroll Animation
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset>10){
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll')
    }
})
/////////


//Modals
const inmodal = document.querySelector('.sign-in-modal');
const upmodal = document.querySelector('.sign-up-modal');
const closebtns = document.querySelectorAll('.close-modal')
const signinbtn = document.querySelector('#sign-in');
const signupbtn = document.querySelector('#sign-up');
const regnow = document.querySelector('.reg-now');
const lognow = document.querySelector('.log-now');
const submodal = document.querySelector('.subscribe-modal');
const subbtn = document.querySelector('.hero-btn');
const subbtn2 = document.querySelector('.sub-btn');


signinbtn.addEventListener('click', function(e){
    inmodal.classList.add('active');
})
signupbtn.addEventListener('click', function(e){
    upmodal.classList.add('active');
})
 
closebtns.forEach(function(item){
    item.addEventListener('click', function(){
        const modalClass = this.dataset.modal;
        const modalll = document.querySelector('.' + modalClass);
        
        modalll.classList.remove('active')
    })
})


regnow.addEventListener('click', function(){
    inmodal.classList.remove('active');
    upmodal.classList.add('active');
})
lognow.addEventListener('click', function(){
    upmodal.classList.remove('active');
    inmodal.classList.add('active');
})


subbtn.addEventListener('click', function(){
    submodal.classList.add('active')
})
subbtn2.addEventListener('click', function(){
    submodal.classList.add('active')
})
/////////