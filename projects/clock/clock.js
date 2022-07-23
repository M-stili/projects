const hourHand = document.querySelector('[data-hour]')
const minHand = document.querySelector('[data-min]')
const secondHand = document.querySelector('[data-second]')

function clock() {
    const currentDate =  new Date()
    const secondDate = currentDate.getSeconds()/60;
    const minDate = (secondDate + currentDate.getMinutes())/60;
    const hourDate = (minDate + currentDate.getHours())/12;
    rotation(hourHand, hourDate)
    rotation(minHand, minDate)
    rotation(secondHand, secondDate)
}

function rotation(element , rotationRtio) {
   element.style.setProperty('--rotation', rotationRtio*360); 
}

clock();
setInterval(clock, 1000)