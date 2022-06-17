const hours_neddle = document.querySelector('.hours-neddle');
const minutes_neddle = document.querySelector('.minutes-neddle');
const seconds_neddle = document.querySelector('.seconds-neddle');

const digital = document.querySelector('.digital');

setInterval(() => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours_neddle.style.transform = `translate(-50%, -100%) rotate(${(360 * hours) / 12}deg)`
    minutes_neddle.style.transform = `translate(-50%, -100%) rotate(${(360 * minutes) / 60}deg)`
    seconds_neddle.style.transform = `translate(-50%, -100%) rotate(${(360 * seconds) / 60}deg)`

    //analog
    if (hours < 10) hours = `0${hours}`; 
    if (minutes < 10) minutes = '0${minutes}';
    if (seconds < 10) seconds = '0${seconds}';
    digital.innerHTML = `<span class="hours">${hours}</span> :
                        <span class="minutes">${minutes}</span> :
                        <span class="seconds">${seconds}</span>`

}, 1000)
