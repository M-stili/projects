export default class timer{
    constructor(root){
        root.innerHTML = timer.getHtml()
        this.el={
            minutes: root.querySelector('.timer__part--minutes'),
            seconds: root.querySelector('.timer__part--secondes'),
            control: root.querySelector('.timer__btn--control'),
            reset: root.querySelector('.timer__btn--reset')
        }
        this.interval = null;
        this.remainingSeconds=0;

        this.el.control.addEventListener('click', ()=>{
            if(this.interval===null){
                this.start();
            }else{
                this.stop();
            }

        })
        this.el.reset.addEventListener('click', ()=>{
            const inputMinutes= prompt('enter the number of minutes');
            if (inputMinutes<60) {
                    this.stop(); 
                this.remainingSeconds = inputMinutes*60;
                this.updateInterfaceTimer();
                
            }
        })
    };
        

         updateInterfaceTimer(){
             const minutes=Math.floor(this.remainingSeconds/60);
             const seconds=this.remainingSeconds%60;
             this.el.minutes.innerHTML = minutes.toString().padStart(2,'0');
             this.el.seconds.innerHTML= seconds.toString().padStart(2, '0');
         };

         updateInterfacecontrol(){
             if(this.interval === null){
                this.el.control.innerHTML = '<span class="material-icons">not_started</span>';
                this.el.control.classList.add('timer__btn--start');
                this.el.control.classList.remove('timer__btn--pause');
             }else{
                this.el.control.innerHTML = '<span class="material-icons">pause</span>';
                this.el.control.classList.add('timer__btn--pause');
                this.el.control.classList.remove('timer__btn--start'); 
             }
         };
         
         start(){
             if(this.remainingSeconds===0)return;

             this.interval=setInterval(() => {
                 this.remainingSeconds--;
                 this.updateInterfaceTimer();
                 if (this.remainingSeconds===0) {
                    this.stop()
                }
             }, 1000);
            this.updateInterfacecontrol();
         };

         stop(){
             clearInterval(this.interval);
             this.interval=null;
             this.updateInterfacecontrol();
         }
    
    static getHtml (){
        return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--secondes">00</span>

        <button type="button" class="timer__btn timer__btn--control timer__btn--start "><span class="material-icons">not_started</span></button>

        <button type="button" class="timer__btn timer__btn--control timer__btn--reset "><span class="material-icons">timer</span><button>
        `
    }

    
}