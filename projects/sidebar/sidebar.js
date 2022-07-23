const toggleBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

function showSidear() {
    sideBar.style.marginLeft ='0px';
}
function hideSidear() {
    sideBar.style.marginLeft ='-500px';
}

toggleBtn.addEventListener('click', ()=>{
    showSidear();
})
closeBtn.addEventListener('click', ()=>{
    hideSidear();
})