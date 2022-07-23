const display = document.querySelectorAll('.counter') ;

function update(el) {
    let value = parseInt(el.dataset.number);
    let increment = Math.ceil(value/1000);
    let counter = 0;
    
    let inervalFunc = setInterval(() => {
        counter += increment;
        
        if (counter > value) {
            el.innerHTML = `${value}+`;
            clearInterval(inervalFunc)
            return
        }
        
        el.innerHTML = `${counter}+`
    }, 10);
    console.log(value);
}

display.forEach(counter => {
    update(counter);
});