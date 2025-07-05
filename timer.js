var timerDisplay = document.getElementById("timerDisplay");

// variables that will eventually be input by user
var minutes = 1;
var seconds = 60;

// convert minutesLeft and secondsLeft to seconds
var secondsLeft = toSeconds(minutes, seconds);

// display time left
timerDisplay.innerHTML = formatTime(secondsLeft);

// start interval
var timerInterval = setInterval(countDown, 1000);

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
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = secondsLeft % 60;

    var minutesStr = minutes < 10 ? "0" + minutes : minutes;
    var secondsStr = seconds < 10 ? "0" + seconds : seconds;

    return minutesStr + ":" + secondsStr;
}

function toSeconds(minutes, seconds) {
    return minutes * 60 + seconds;
}
