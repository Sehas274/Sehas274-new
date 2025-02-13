"use strict";

// DOM Elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const backgroundMusic = document.getElementById("background-music");

// Constants
const MAX_IMAGES = 5;

// Variables
let play = true;
let noCount = 0;

// Event Listeners
yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

// Play background music when the page loads
window.addEventListener("load", () => {
  backgroundMusic.play().catch(error => {
    console.log("Autoplay was prevented. Please interact with the page to play music.");
  });
});

// Functions
function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  backgroundMusic.volume = 0.5; // Lower the volume for a softer effect
}

function handleNoClick() {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.fontSize);
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "please  baby",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry now...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
/* Add this JavaScript to create dynamic hearts */
document.addEventListener('DOMContentLoaded', function() {
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.width = Math.random() * 30 + 20 + 'px';
    heart.style.height = heart.style.width;
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    document.querySelector('.hearts').appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => heart.remove(), 8000);
  }

  // Create hearts periodically
  setInterval(createHeart, 300);
});
// Heart animation script
document.addEventListener('DOMContentLoaded', function() {
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.width = Math.random() * 30 + 20 + 'px';
    heart.style.height = heart.style.width;
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 8000);
  }

  setInterval(createHeart, 300);
});