let timerDisplay = document.getElementById("timerDisplay");

let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");

let timerInterval;

document.getElementById("startButton").onclick = function () {
    startInterval();
};

// variables that will eventually be input by user
var hours = 0;
var minutes = 1;
var seconds = 30;

//loadSelects();

// convert minutesLeft and secondsLeft to seconds
var secondsLeft = toSeconds(hours, minutes, seconds);

// display time left
timerDisplay.innerHTML = formatTime(secondsLeft);

timerInterval = setInterval(countDown, 1000);

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

// function loadSelects() {
//     for (var i = 0; i < 60; ++i) {
//         hoursSelect[i] = new Option(i, i);
//         minutesSelect[i] = new Option(i, i);
//         secondsSelect[i] = new Option(i, i);
//     }
// }

// TODO: get values from inputs, then start the timer
function startInterval() {
    // start interval
    hours = parseInt(hoursInput.value, 10);
    minutes = parseInt(minutesInput.value, 10);
    seconds = parseInt(secondsInput.value, 10);

    console.log(hours + " " + minutes + " " + seconds);

    var timerInterval = setInterval(countDown, 1000);
}
