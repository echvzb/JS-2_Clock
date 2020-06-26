const seconds = document.querySelector('.seconds')
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

const setTime = () => {
    let time = new Date();
    let s = (time.getSeconds()/60)*360+90;
    let m = (time.getMinutes()/60)*360+90;
    let h = ((time.getHours()-12)/12)*360+90;
    seconds.style.transform = `rotate(${s}deg)`;
    hours.style.transform = `rotate(${h}deg)`;
    minutes.style.transform = `rotate(${m}deg)`;
}

setInterval(() => {
    setTime();
}, 1000);