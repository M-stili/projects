const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const showSection =document.querySelector('section');


function show() {
    showSection.style.visibility='visible'
};
function hide() {
    showSection.style.visibility='hidden'
};

openBtn.addEventListener('click', ()=>{
    show();
})
closeBtn.addEventListener('click', ()=>{
    hide();
})

