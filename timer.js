const SECONDS_IN_MINUTE = 60;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startButton");

let timerInterval;
let secondsRemaining;

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
        // startButton.disabled = true;
        // pauseButton.disabled = true;
        // resetButton.disabled = false;

        // set timer statusMessage
        statusMessage.innerHTML = "DONE!";
    }
}

function formatTime(secondsRemaining) {
    // let hours = Math.floor(secondsRemaining / SECONDS_IN_HOUR);
    // let secondsWithoutHours = secondsRemaining - hours * SECONDS_IN_HOUR;
    // let minutes = Math.floor(secondsWithoutHours / 60);
    // let seconds = secondsWithoutHours % 60;
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    //let hoursStr = hours < 10 ? "0" + hours : hours;
    //const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const minutesStr = minutes.toString();
    const secondsStr = seconds < 10 ? "0" + seconds : seconds.toString();

    return /*hoursStr + ":" +*/ minutesStr + ":" + secondsStr;
}

function toSeconds(/*hours, */ minutes, seconds) {
    return /*hours * SECONDS_IN_HOUR +*/ minutes * SECONDS_IN_MINUTE + seconds;
}

startButton.onclick = function () {
    // get timerDisplay text
    const timerDisplayText = timerDisplay.innerHTML;
    console.log(typeof timerDisplayText);

    // parse the text using ':' as delimeter
    const timeArray = timerDisplayText.split(":");

    timeArray.forEach((time) => {
        console.log(time);
    });

    // set minutes
    const minutes = parseInt(timeArray[0], 10);

    // set seconds
    const seconds = parseInt(timeArray[1], 10);

    console.log(minutes + " " + seconds);

    // convert minutes and seconds to seconds to count down from
    secondsRemaining = toSeconds(minutes, seconds);

    // start counting down
    timerInterval = setInterval(countDown, 1000);
};
