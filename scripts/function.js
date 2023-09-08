// Define the variable
var btn = document.getElementById("buttonRandom");

document.addEventListener("DOMContentLoaded", myPosition())

// Initial score value
var score = 1;

// Listen to event click to update
btn.addEventListener("click", myScore);
btn.addEventListener("click", myPosition);

// Display score of the player
function myScore() {
    // Update the text
    document.getElementById('score').innerHTML = "Your score is : " + score;
    
    //Adds 1 point to the score 
    score = score + 1;    

    console.log("MyScore");
    console.log(score);
}

function myPosition() {  
    // variables
    const windWidth = window.innerWidth;
    const winHeigth = window.innerHeight;

    const buttonWidth = btn.offsetWidth;
    const buttonHeight = btn.offsetHeight;

    const maxWidth = windWidth - buttonWidth;
    const maxHeight = winHeigth - buttonHeight;

    let x = getRandomNumber(0, maxWidth);
    let y = getRandomNumber(0, maxHeight);
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    console.log(windWidth);
    console.log(winHeigth);
    console.log(x);
    console.log(y);
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }
