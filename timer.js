let timerDisplay = document.getElementById("timerDisplay");

let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");

let timerInterval;
let secondsLeft;

// display time left
timerDisplay.innerHTML = formatTime(0);

function countDown() {
    // decrease timer
    secondsLeft--;

    if (secondsLeft >= 0) {
        // display time left
        timerDisplay.innerHTML = formatTime(secondsLeft);
    } else {
        // clear interval
        clearInterval(timerInterval);
    }
}

function formatTime(secondsLeft) {
    var hours = Math.floor(secondsLeft / 3600);
    var secondsRemaining = secondsLeft - hours * 3600;
    var minutes = Math.floor(secondsRemaining / 60);
    var seconds = secondsRemaining % 60;

    var hoursStr = hours < 10 ? "0" + hours : hours;
    var minutesStr = minutes < 10 ? "0" + minutes : minutes;
    var secondsStr = seconds < 10 ? "0" + seconds : seconds;

    return hoursStr + ":" + minutesStr + ":" + secondsStr;
}

function toSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

document.getElementById("startButton").onclick = function () {
    let hours = parseInt(hoursInput.value, 10);
    let minutes = parseInt(minutesInput.value, 10);
    let seconds = parseInt(secondsInput.value, 10);

    secondsLeft = toSeconds(hours, minutes, seconds);
    timerDisplay.innerHTML = formatTime(secondsLeft);

    timerInterval = setInterval(countDown, 1000);
};
