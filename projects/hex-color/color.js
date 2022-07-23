const body = document.querySelector('body');
const button = document.querySelector('button');
const paragraph = document.querySelector('p');


const hexColors = [ '#ffff', '#000000', '#ff4500', '#ffff00', '#ff0000', '#008000', '#808080', '#87ceeb'];


function changeColor() {
    let arrLength= hexColors.length;
    let randomColor1 = Math.floor(Math.random()* arrLength);
    let randomColor2 = Math.floor(Math.random()* arrLength);
    body.style.background=`linear-gradient(to right, ${hexColors[randomColor1]}, ${hexColors[randomColor2] })`;

    paragraph.innerHTML = `background: linear-gradient(to right, ${hexColors[randomColor1]},${hexColors[randomColor2]} );`
}


button.addEventListener('click', ()=>{
    changeColor();
    console.log('hello');
})
