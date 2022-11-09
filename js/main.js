// ToDo: Basketball Scoreboard 

// * Global Variables 
const homeScore = document.getElementById("home-score"); 
const guestScore = document.getElementById("guest-score"); 

let homePoints = 0; 
let guestPoints = 0; 


// * Plus Points Functions 
// Home Points Functions 
function plus1PointHome() {
    homePoints += 1 
    homeScore.textContent = homePoints 
} 

function plus2PointsHome() {
    homePoints += 2 
    homeScore.textContent = homePoints 
} 

function plus3PointsHome() {
    homePoints += 3 
    homeScore.textContent = homePoints 
} 

// Guest Points Functions 
function plus1PointGuest() {
    guestPoints += 1 
    guestScore.textContent = guestPoints 
} 

function plus2PointsGuest() {
    guestPoints += 2 
    guestScore.textContent = guestPoints 
} 

function plus3PointsGuest() {
    guestPoints += 3 
    guestScore.textContent = guestPoints 
} 


// * New Game Function 
function newGame() {
    // clears scoreboard to display 0 
    homeScore.textContent = 0 
    guestScore.textContent = 0 

    // begins new count from 0 
    homePoints = 0 
    guestPoints = 0 
} 