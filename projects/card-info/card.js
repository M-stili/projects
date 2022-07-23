const personImage = document.querySelector('img');
const personName = document.querySelector('.name');
const personJob = document.querySelector('.job');
const personInfo =document.querySelector('.info');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const surpriseBtn = document.querySelector('.surprise-btn');


let personArr = [
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        Name:'youssef najah',
        job:'designer',
        text:'2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident, quisquam quos quibusdam aspernatur autem praesentium totam similique repellat illo?'
    },
    {
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        Name:'ghita najah',
        job:'teacher',
        text:'3-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident, quisquam quos quibusdam aspernatur autem praesentium totam similique repellat illo?'
    },
    {
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        Name:'ihssane alami',
        job:'schneiderin',
        text:'4-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident, quisquam quos quibusdam aspernatur autem praesentium totam similique repellat illo?'
    },
    {
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        Name:'abd elhadi alami',
        job:'tricien',
        text:'5-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident, quisquam quos quibusdam aspernatur autem praesentium totam similique repellat illo?'
    },
    {
        img: "/person-1.jpeg",
        Name:'mohamed stili',
        job:'web-dev',
        text:'1-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo provident, quisquam quos quibusdam aspernatur autem praesentium totam similique repellat illo?'
    }
];
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = personArr[personArr.length-1];
    personImage.src = item.img;
    personName.textContent = item.Name;
    personJob.textContent = item.job;
    personInfo.textContent = item.text;
  });

function showPerson(person){
personImage.src = personArr[person].img;
personName.innerHTML = personArr[person].Name;
personJob.innerHTML = personArr[person].job;
personInfo.innerHTML = personArr[person].text;

};

nextBtn.addEventListener('click', ()=>{
    currentItem++;
    if (currentItem > personArr.length-1) {
        currentItem=0
    }
    showPerson(currentItem);

})
prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if (currentItem < 0) {
        currentItem=personArr.length-1
    }
    showPerson(currentItem);

})
surpriseBtn.addEventListener('click', ()=>{
    currentItem= Math.floor(Math.random() * personArr.length)
    showPerson(currentItem)
})
