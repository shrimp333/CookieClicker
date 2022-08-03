let clickValue = 1;
let count = 0;
let totalCount = 0;
let passiveFromClick = 0;
let passive = 0;
let clicks = 0;
let autoClickerPrice = 100;
let autoClickers = 0;
let autoClickerMult = 1;
let factoryPrice = 1000;
let factorys = 0;
let factoryMult = 8;
function saveCookies() {
    const date = new Date();
    date.setTime(date.getTime() + (7 * 86400000));
    document.cookie = `cookieData=${count},${totalCount},${clicks},${autoClickers},${autoClickerMult},${factorys},${factoryMult}; expires=${date.toUTCString()}; path=/; Secure`;
}
setInterval(saveCookies, 60000)
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var cookie = getCookie(cname);
    if (cookie != "")
    return true;
    return false;
}

window.onload = function loadCookies() {
    if (checkCookie("cookieData") == false)
    return;
    let cookie = getCookie("cookieData").split(',');
    count = parseInt(cookie[0]) - 1;
    totalCount = parseInt(cookie[1]) - 1;
    clicks = parseInt(cookie[2]) - 1;
    clickButton();
    autoClickers = parseInt(cookie[3]);
    autoClickerMult = parseInt(cookie[4]);
    factorys = parseInt(cookie[5]);
    factoryMult = parseInt(cookie[6]);
}


const counter = document.getElementById("counter");
const statClicks = document.getElementById("statClicks")
const totalCookies = document.getElementById("totalCookies")
clickButton = () => {
    clicks++;
    count += clickValue;
    totalCount += clickValue;
    counter.innerHTML = `${count} Cookies`;
    statClicks.innerHTML = `Clicks: ${clicks}`
    totalCookies.innerHTML = `Total Cookies: ${totalCount}`
    passiveFromClick = Math.floor(clicks / 10);
    calculatePassive();
}

function passiveIncome() {
    count += passive;
    totalCount += passive;
    showCount();
}
setInterval(passiveIncome, 1000);

calculatePassive = () => {
    passive = passiveFromClick + autoClickers * autoClickerMult + factorys * factoryMult;
    showCPS();
}

const passiveCount = document.getElementById("passiveCounter");
function showCPS() {
    passiveCount.innerHTML = `per sec: ${passive}`
}

function showCount() {
    counter.innerHTML = `${count} Cookies`;
    totalCookies.innerHTML = `Total Cookies: ${totalCount}`
}



const purchaseAutoClicker = document.getElementById("autoClicker");
let temp = 0;
function buyAutoClicker() {
    temp += autoClickerPrice;
    console.log(temp);
    if (count < autoClickerPrice)
        return;
    count -= autoClickerPrice;
    autoClickers++;
    calculatePassive();
    autoClickerPrice += Math.floor((autoClickerPrice * 2) / 50)
    purchaseAutoClicker.innerHTML = `Buy AutoClicker 🍪${autoClickerPrice}`
    showCount();
}

const purchaseFactory = document.getElementById("factory");
function buyFactory() {
    if (count < factoryPrice)
        return;
    count -= factoryPrice;
    factorys++;
    calculatePassive();
    factoryPrice += Math.floor((factoryPrice * 2) / 50);
    purchaseFactory.innerHTML = `Buy Factory 🍪${factoryPrice}`
    showCount();
}