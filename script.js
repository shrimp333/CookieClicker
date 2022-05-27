let clickValue = 1;
let count = 0;
let passiveFromClick = 0;
let passive = 0;
let clicks = 0;
let factIncome = 0;
let autoClickerPrice = 100;
let autoClickers = 0;
let autoClickerMult = 1;
let factoryPrice = 1000;
let factorys = 0;
let factoryMult = 12;
const counter = document.getElementById("counter");
const passiveCount = document.getElementById("passiveCounter");
function clickButton(){
    clicks++;
    count += clickValue;
    counter.innerHTML = `${count} Cookies`;
    passiveFromClick = Math.floor(clicks/10);
    calculatePassive();
}

function passiveIncome(){
    count += passive;
    showCount();
}
setInterval(passiveIncome, 1000);

calculatePassive = () => {
    passive = passiveFromClick + autoClickers*autoClickerMult + factorys*factoryMult;
}

function showCPS(){
    passiveCount.innerHTML = `per sec: ${passive}`
}
setInterval(showCPS, 100);

function showCount(){
    counter.innerHTML = `${count} Cookies`;
}



const purchaseAutoClicker = document.getElementById("autoClicker");
function buyAutoClicker(){
    if (count < autoClickerPrice)
    return;
    count -= autoClickerPrice;
    autoClickers++;
    calculatePassive();
    autoClickerPrice += Math.floor((autoClickerPrice*2)/50)
    purchaseAutoClicker.innerHTML = `Buy AutoClicker 🍪${autoClickerPrice}`
    showCount();
}

const purchaseFactory = document.getElementById("factory");
function buyFactory(){
    if (count < factoryPrice)
        return;
    count -= factoryPrice;
    factorys++;
    calculatePassive();
    factoryPrice += Math.floor((factoryPrice*2)/50);
    purchaseFactory.innerHTML = `Buy Factory 🍪${factoryPrice}`
    showCount();
}