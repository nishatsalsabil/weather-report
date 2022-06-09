'use strict';

const state = {
  temperature: 40,
  soccer: 0,
};

// function to change temp color
const changeTempColor = (event) => {
  const tempNumber = document.getElementById('temperature-number');
  let tempColor = 'black';
  if (state.temperature >= 80) {
    tempColor = 'red';
  } else if (state.temperature >= 70) {
    tempColor = 'orange';
  } else if (state.temperature >= 60) {
    tempColor = 'yellow';
  } else if (state.temperature >= 50) {
    tempColor = 'green';
  } else if (state.temperature <= 49) {
    tempColor = 'teal';
  }
  tempNumber.className = tempColor;
  // tempNumber.setAttribute(color, tempColor); can't get this to work, will use class instead
};

//  function to decrease temp
const decreaseTemp = (event) => {
  state.temperature -= 1;
  const temperatureContainer = document.querySelector('#temperature-number');
  temperatureContainer.textContent = `${state.temperature}`;
};

//  function to increase temp
const increaseTemp = (event) => {
  state.temperature += 1;
  const temperatureContainer = document.querySelector('#temperature-number');
  temperatureContainer.textContent = `${state.temperature}`;
};

// Register the event listener
const registerEventHandlers = (event) => {
  const upButton = document.querySelector('#up-button');
  const downButton = document.querySelector('#down-button');
  upButton.addEventListener('click', increaseTemp);
  downButton.addEventListener('click', decreaseTemp);
  upButton.addEventListener('click', changeTempColor);
  downButton.addEventListener('click', changeTempColor);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);



