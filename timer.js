const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
const DEFAULT_SECONDS = 5;

let timerDisplay = document.getElementById("timerDisplay");
let timerStatus = document.getElementById("timerStatus");

let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");

let timerInterval;
let secondsRemaining;

let startButton = document.getElementById("startButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

let isPaused = false;

// default time to count down from when page is loaded
timerDisplay.innerHTML = formatTime(DEFAULT_SECONDS);

function countDown() {
    // decrease timer
    secondsRemaining--;

    if (secondsRemaining > 0) {
        // display time left
        timerDisplay.innerHTML = formatTime(secondsRemaining);
    } else {
        // display all 0s
        timerDisplay.innerHTML = formatTime(secondsRemaining);

        // clear interval
        clearInterval(timerInterval);

        // disable start and pause buttons
        startButton.disabled = true;
        pauseButton.disabled = true;
        resetButton.disabled = false;

        // set timer status message
        timerStatus.innerHTML = "DONE!";
    }
}

function formatTime(secondsRemaining) {
    let hours = Math.floor(secondsRemaining / SECONDS_IN_HOUR);
    let secondsWithoutHours = secondsRemaining - hours * SECONDS_IN_HOUR;
    let minutes = Math.floor(secondsWithoutHours / 60);
    let seconds = secondsWithoutHours % 60;

    let hoursStr = hours < 10 ? "0" + hours : hours;
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;
    let secondsStr = seconds < 10 ? "0" + seconds : seconds;

    return hoursStr + ":" + minutesStr + ":" + secondsStr;
}

function toSeconds(hours, minutes, seconds) {
    return hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds;
}

startButton.onclick = function () {
    if (!isPaused) {
        let hours = parseInt(hoursInput.value, 10);
        let minutes = parseInt(minutesInput.value, 10);
        let seconds = parseInt(secondsInput.value, 10);

        secondsRemaining = toSeconds(hours, minutes, seconds);
        timerDisplay.innerHTML = formatTime(secondsRemaining);
    }

    timerInterval = setInterval(countDown, 1000);

    isPaused = false;
    this.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;

    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
};

pauseButton.onclick = function () {
    clearInterval(timerInterval);
    isPaused = true;
    this.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
};

resetButton.onclick = function () {
    clearInterval(timerInterval);

    let hours = parseInt(hoursInput.value, 10);
    let minutes = parseInt(minutesInput.value, 10);
    let seconds = parseInt(secondsInput.value, 10);

    secondsRemaining = toSeconds(hours, minutes, seconds);
    timerDisplay.innerHTML = formatTime(secondsRemaining);

    this.disabled = true;
    startButton.disabled = false;
    pauseButton.disabled = true;

    // clear the status message
    timerStatus.innerHTML = "";

    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
};
