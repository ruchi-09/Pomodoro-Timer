const startE1=document.getElementsByClassName("start")[0]
const stopE1=document.getElementsByClassName("stop")[0];
const resetE1=document.getElementsByClassName("reset")[0];
const timerE1=document.getElementsByClassName("timer")[0];

let interval;
let timeLeft=1500;

function updateTimer(){
    let minutes=Math.floor(timeLeft / 60);
    let seconds=timeLeft % 60;
    let formattedTime=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

    timerE1.innerHTML=formattedTime
}

function startTimer(){
    interval=setInterval(()=>{
        timeLeft--;
         updateTimer();
         if(timeLeft===0){
          clearInterval(interval);
            alert("Time's up!");
            timeLeft=1500;
            updateTimer();
         }
    },1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}

startE1.addEventListener('click', startTimer);
stopE1.addEventListener('click', stopTimer);
resetE1.addEventListener('click', resetTimer);

