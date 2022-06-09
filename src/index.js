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

const changeLandscape = (event) => {
  const landscape = document.getElementById('landscape');
  let landscapeToDisplay = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  if (state.temperature >= 80) {
    landscapeToDisplay = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.temperature >= 70) {
    landscapeToDisplay = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.temperature >= 60) {
    landscapeToDisplay = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temperature <= 59) {
    landscapeToDisplay = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
  landscape.textContent = `${landscapeToDisplay}`;
};

// function to change city name

const changeCityName = (event) => {
  // let theText = myTextInput.value;
  const cityName = document.getElementById('city-name');
  let cityInput = cityName.value;
  const cityTitleName = document.getElementById('city-title-name');
  cityTitleName.textContent = `${cityInput}`;
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
  const cityInput = document.querySelector('#city-name');
  cityInput.addEventListener('input', changeCityName);
  upButton.addEventListener('click', increaseTemp);
  downButton.addEventListener('click', decreaseTemp);
  upButton.addEventListener('click', changeTempColor);
  downButton.addEventListener('click', changeTempColor);
  upButton.addEventListener('click', changeLandscape);
  downButton.addEventListener('click', changeLandscape);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
