'use strict';

const state2 = {
  temperature: 0,
  soccer: 0,
};

// Add function to increaseTemp
const increaseTemp = (event) => {
  state2.temperature += 1;
  const temperatureContainer = document.querySelector('#temperature-number');
  temperatureContainer.textContent = `${state2.temperature}`;
};

// Register the event listener
const registerEventHandlers2 = (event) => {
  const upButton = document.querySelector('#up-button');
  upButton.addEventListener('click', increaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers2);

// Add function to decrease temp
const decreaseTemp = (event) => {
  state2.temperature -= 1;
  const temperatureContainer = document.querySelector('#temperature-number');
  temperatureContainer.textContent = `${state2.temperature}`;
};

// Register the event listener
const registerEventHandlers3 = (event) => {
  const upButton = document.querySelector('#down-button');
  upButton.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers3);

// We leave this here as a reminder for how to do stuff in Javascript
const state = {
  soccerCount: 0,
};

// Add a soccer ball
const addSoccer = (event) => {
  const newSoccer = document.createElement('span');
  const soccerContainer = document.querySelector('#soccerContainer');
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
