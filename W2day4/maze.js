// Your code here
let sign = false;
let startClick = false;
let curser = false;

function start() {
    curser = true;
    startClick = true;
    ondiv = true;
    let x = document.getElementsByClassName("boundary");
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#eeeeee";
    }
    if (sign === true) {
        window.sign = false;

    }
    document.getElementById("status").innerHTML = "you have started"

    setInterval(function () {
        document.getElementById("status").innerHTML = "your time is up! Try again";
    }, 10000);

    let timeleft = 10;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);

}
function end() {

    if (startClick && curser && !setInterval) {
        document.getElementById("status").innerHTML = "you are the winner";
    }
    else if (startClick && !setInterval) {
        document.getElementById("status").innerHTML = "No cheating, You moved cursor from outside maze";
    }
    else {
        document.getElementById("status").innerHTML = "Please, Don't Cheat!! Or Start It Again";
    }


}

function changecolor() {
    startClick = false;
    let x = document.getElementsByClassName("boundary");
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";

    }

    if (!window.sign) {
        window.document.getElementById("status").innerHTML = ("you lose!! Try Again");
        window.sign = true;
        clearInterval(downloadTimer);

    }
}
function outofdiv() {
    curser = false;
}
