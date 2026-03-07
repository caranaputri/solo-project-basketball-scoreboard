let homePlus1 = document.getElementById("home-plus-1");
let homePlus2 = document.getElementById("home-plus-2");
let homePlus3 = document.getElementById("home-plus-3");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

function addOneToHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addTwoToHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addThreeToHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

let guestPlus1 = document.getElementById("guest-plus-1");
let guestPlus2 = document.getElementById("guest-plus-2");
let guestPlus3 = document.getElementById("guest-plus-3");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function addOneToGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function addTwoToGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function addThreeToGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

let resetBtn = document.getElementById("reset-btn");

function reset() {
    homeScoreEl.textContent = 0;
    homeScore = 0;
    guestScoreEl.textContent = 0;
    guestScore = 0;
}