let clickValue = 1;
let count = 0;
let passive = 0;
let clicks = 0;
const counter = document.getElementById("counter");
const passiveCount = document.getElementById("passiveCounter");
function clickButton(){
    clicks++;
    count += clickValue;
    counter.innerHTML = `${count}`;
    passive = Math.floor(clicks/10);
    passiveCount.innerHTML = `Clicks per sec: ${passive}`
}
function passiveIncome(){
    count += passive;
    counter.innerHTML = `${count}`;
}
setInterval(passiveIncome, 1000);