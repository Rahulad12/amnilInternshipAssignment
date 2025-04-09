//setInterval() epeats a task at a set time interval
function showTime() {
    const now = new Date().toLocaleTimeString();
    console.log("Current Time:", now);
}

setInterval(showTime, 1000); // Runs every 1 second

//illustration the coutndown using setInterval
let count = 5;

const timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Countdown complete!");
    }
}, 1000);
