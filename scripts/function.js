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

// Update the button's position
function myPosition() {  
    // get the viewport width and height
    const windWidth = window.innerWidth;
    const winHeigth = window.innerHeight;

    //get the buttons width and height
    const buttonWidth = btn.offsetWidth;
    const buttonHeight = btn.offsetHeight;

    // get the frame window that the button can be inside so it doesn't scroll
    const maxWidth = windWidth - buttonWidth;
    const maxHeight = winHeigth - buttonHeight;

    // Define a random number
    let x = getRandomNumber(0, maxWidth);
    let y = getRandomNumber(0, maxHeight);

    // change the button's position
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }
