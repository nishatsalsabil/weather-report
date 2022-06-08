'use strict';

// Write functionality to increase temp by 1 on click
// Write functionality to decrease temp by 1 on click

const state = {
  soccerCount: 0,
};

// Add a soccer ball
const addSoccer = (event) => {
  const newSoccer = document.createElement('span');
  const soccerContainer = document.querySelector('#SoccerContainer');
  newSoccer.textContent = '⚽';
  soccerContainer.appendChild(newSoccer);

  // Soccer Count Behavior
  state.soccerCount += 1;
  const soccerCountContainer = document.querySelector('#soccerCount');
  soccerCountContainer.textContent = `Soccer Count: ${state.soccerCount}`;
};

// Register the event listener
const registerEventHandlers = (event) => {
  const soccerButton = document.querySelector('#addSoccerButton');
  soccerButton.addEventListener('click', addSoccer);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
