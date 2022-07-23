const theBill = document.querySelector('#bill');
const serviceQuality = document.querySelector('#service-quality');
const people = document.querySelector('#people');
const button = document.querySelector('button');
const container = document.querySelector('.container');
const resultDiv = document.querySelector('.result');
const money = document.querySelector('.money');

button.addEventListener('click', ()=>{
        
 
    if (theBill.value === '' || serviceQuality.value === '' || people.Value ==='' ) {
        alert('please enter all the required information');
        return;
    };
    container.style.height= '750px';
    resultDiv.style.visibility = 'visible';
    let result=(theBill.value*serviceQuality.value)/people.value;
    result=Math.round(result*100)/100;
    result.toFixed(2);
    money.innerHTML = `$ ${result}`;
    
    })
