const timerHour = document.querySelector("#hours");
const timerMin = document.querySelector("#minutes");
const timerSec = document.querySelector("#seconds");
const timerMil = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const continueBtn = document.querySelector("#continue");
const restartBtn = document.querySelector("#restart");

let hours = 0, minutes = 0, seconds = 0, milliseconds = 0, isPaused = false, interval;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTime);
restartBtn.addEventListener("click", resetTimer);

function startTimer() {

    interval = setInterval(() => {

        if (!isPaused) {

            milliseconds += 10

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            if (minutes === 60) {
                hours++;
                minutes = 0;
            }

            timerMin.textContent = formatTime(minutes);
            timerSec.textContent = formatTime(seconds);
            timerMil.textContent = formatTimeMil(milliseconds);
            timerHour.textContent = formatTime(hours);

        }
    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none"
    continueBtn.style.display = "block"
}

function continueTime() {
    isPaused = false;
    pauseBtn.style.display = "block"
    continueBtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval);
    isPaused = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    hours = 0;

    timerHour.textContent = "00";
    timerMin.textContent = "00";
    timerSec.textContent = "00";
    timerMil.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatTimeMil(millisec) {
    return millisec < 100 ? `${millisec}`.padStart(3, "0") : millisec;
}


