// First, we take the data from the HTML file
// The data is stored in the IDs - days, hours, mins and seconds

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const days1El = document.getElementById("days1");
const hours1El = document.getElementById("hours1");
const mins1El = document.getElementById("mins1");
const seconds1El = document.getElementById("seconds1");

const days2El = document.getElementById("days2");
const hours2El = document.getElementById("hours2");
const mins2El = document.getElementById("mins2");
const seconds2El = document.getElementById("seconds2");

const daysEl3 = document.getElementById("days3");
const hoursEl3 = document.getElementById("hours3");
const minsEl3 = document.getElementById("mins3");
const secondsEl3 = document.getElementById("seconds3");

const daysEl4 = document.getElementById("days4");
const hoursEl4 = document.getElementById("hours4");
const minsEl4 = document.getElementById("mins4");
const secondsEl4 = document.getElementById("seconds4");

const daysEl5 = document.getElementById("days5");
const hoursEl5 = document.getElementById("hours5");
const minsEl5 = document.getElementById("mins5");
const secondsEl5 = document.getElementById("seconds5");

const daysEl6 = document.getElementById("days6");
const hoursEl6 = document.getElementById("hours6");
const minsEl6 = document.getElementById("mins6");
const secondsEl6 = document.getElementById("seconds6");




const cw_start = "4 Jul 2022";
const mid1 = "16 Aug 2022";
const mid2 = "26 Sept 2022";
const mid3 = "7 Nov 2022";
const cw_end = "15 Nov 2022";
const sem_start = "15 Nov 2022";
const sem_end = "28 Nov 2022";

function countdown() {
    const startDate = new Date(cw_start); //We will get the total number of seconds left by creating the ‘newdate’ instance

    const currentDate = new Date();

    const totalSeconds = (startDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); //math.floor returns the largest integer less than or equal to a given number
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function mid1_ct() {
    const startDate1 = new Date(mid1);
    const currentDate = new Date();

    const totalSeconds = (startDate1 - currentDate) / 1000;

    const days1 = Math.floor(totalSeconds / 3600 / 24);
    const hours1 = Math.floor(totalSeconds / 3600) % 24;
    const mins1 = Math.floor(totalSeconds / 60) % 60;
    const seconds1 = Math.floor(totalSeconds) % 60;

    days1El.innerHTML = days1;
    hours1El.innerHTML = formatTime(hours1);
    mins1El.innerHTML = formatTime(mins1);
    seconds1El.innerHTML = formatTime(seconds1);
}

function mid2_ct() {
    const startDate2 = new Date(mid2);
    const currentDate = new Date();

    const totalSeconds = (startDate2 - currentDate) / 1000;

    const days2 = Math.floor(totalSeconds / 3600 / 24);
    const hours2 = Math.floor(totalSeconds / 3600) % 24;
    const mins2 = Math.floor(totalSeconds / 60) % 60;
    const seconds2 = Math.floor(totalSeconds) % 60;

    days2El.innerHTML = days2;
    hours2El.innerHTML = formatTime(hours2);
    mins2El.innerHTML = formatTime(mins2);
    seconds2El.innerHTML = formatTime(seconds2);
}

function mid3_ct() {
    const startDate3 = new Date(mid3);
    const currentDate = new Date();

    const totalSeconds = (startDate3 - currentDate) / 1000;

    const days3 = Math.floor(totalSeconds / 3600 / 24);
    const hours3 = Math.floor(totalSeconds / 3600) % 24;
    const mins3 = Math.floor(totalSeconds / 60) % 60;
    const seconds3 = Math.floor(totalSeconds) % 60;

    daysEl3.innerHTML = days3;
    hoursEl3.innerHTML = formatTime(hours3);
    minsEl3.innerHTML = formatTime(mins3);
    secondsEl3.innerHTML = formatTime(seconds3);
}

function cwEnd_ct() {
    const startDate4 = new Date(cw_end);
    const currentDate = new Date();

    const totalSeconds = (startDate4 - currentDate) / 1000;

    const days4 = Math.floor(totalSeconds / 3600 / 24);
    const hours4 = Math.floor(totalSeconds / 3600) % 24;
    const mins4 = Math.floor(totalSeconds / 60) % 60;
    const seconds4 = Math.floor(totalSeconds) % 60;

    daysEl4.innerHTML = days4;
    hoursEl4.innerHTML = formatTime(hours4);
    minsEl4.innerHTML = formatTime(mins4);
    secondsEl4.innerHTML = formatTime(seconds4);
}

function semExamStart() {
    const startDate5 = new Date(sem_start);
    const currentDate = new Date();

    const totalSeconds = (startDate5 - currentDate) / 1000;

    const days5 = Math.floor(totalSeconds / 3600 / 24);
    const hours5 = Math.floor(totalSeconds / 3600) % 24;
    const mins5 = Math.floor(totalSeconds / 60) % 60;
    const seconds5 = Math.floor(totalSeconds) % 60;

    daysEl5.innerHTML = days5;
    hoursEl5.innerHTML = formatTime(hours5);
    minsEl5.innerHTML = formatTime(mins5);
    secondsEl5.innerHTML = formatTime(seconds5);
}

function semExamEnd() {
    const startDate6 = new Date(sem_end);
    const currentDate = new Date();

    const totalSeconds = (startDate6 - currentDate) / 1000;

    const days6 = Math.floor(totalSeconds / 3600 / 24);
    const hours6 = Math.floor(totalSeconds / 3600) % 24;
    const mins6 = Math.floor(totalSeconds / 60) % 60;
    const seconds6 = Math.floor(totalSeconds) % 60;

    daysEl6.innerHTML = days6;
    hoursEl6.innerHTML = formatTime(hours6);
    minsEl6.innerHTML = formatTime(mins6);
    secondsEl6.innerHTML = formatTime(seconds6);
}



function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}




// initial call

countdown();
mid1_ct()
mid2_ct()
mid3_ct()
cwEnd_ct()
semExamStart()
semExamEnd()


// The setInterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// 1 second = 1000 milliseconds.

setInterval(countdown, 1000);
setInterval(mid1_ct,1000)
setInterval(mid2_ct,1000);
setInterval(mid3_ct,1000);
setInterval(cwEnd_ct,1000);
setInterval(semExamStart,1000);
setInterval(semExamEnd,1000);
