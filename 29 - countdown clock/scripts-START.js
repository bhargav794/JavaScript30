 let countDown; 
 const display = document.querySelector(".display");
 const displayHead = document.querySelector(".display__time-left");
 const displayEnd = document.querySelector(".display__end-time");
 const allBtns = document.querySelectorAll("[data-time]");

 
 //Calculate the time 
 function timer(seconds) {
    clearInterval(countDown);//** clear existing timer running

    const now = Date.now();
    let remTime = now + seconds*1000;

    displayTime(seconds);
    displayEndTime(remTime);

  countDown =  setInterval(() => {
        const secondsLeft = Math.round((remTime - Date.now())/1000);

        if(secondsLeft<0) {
            clearInterval(countDown);    
            return
        };

         displayTime(secondsLeft);
    }, 1000);
 }


 //Display time on screen 
 function displayTime(timeInSeconds) {
    const mins = Math.floor(timeInSeconds/60)%60;
    const hrs = Math.floor(timeInSeconds/(60*60));
    const remSecs = timeInSeconds%60;

    const display  = `${hrs<10 ? "0" : ""}${hrs}:${mins<10 ? "0" : ""}${mins}:${remSecs<10 ? "0" : ""}${remSecs}`;
    document.title = display;
    displayHead.textContent = display;
 }

 //Display remaining time on screen
 function displayEndTime(time) {
    let currTime = new Date(time);
    let adjustedHours = currTime.getHours()>12 ? currTime.getHours()-12 : currTime.getHours();
    displayEnd.textContent = `Be back at ${adjustedHours}:${currTime.getMinutes()<10 ? "0": ""}${currTime.getMinutes()}`;
 }

 //For all the buttons
 function startBtnTimer() {
    timer(this.dataset.time);
 }

 
allBtns.forEach(btn => btn.addEventListener('click', startBtnTimer));

//for custom minutues form

document.customForm.addEventListener('submit', function(e) { //for HTML elements which have name attribute we can select those elements as **document.name**
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset();
})