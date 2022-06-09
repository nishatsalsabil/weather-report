'use strict';

const state = {
  temperature: 40,
  soccer: 0,
};

//// pseudocode to call APIs ////
// set up flask server with API keys
// write function to set the temperature
const getLiveTemp = (event) => {
  //get the city name we want to search
  const cityTitleName = document.getElementById('city-title-name');
  // get the actual string of the city name
  const city = cityTitleName.textContent;
  //get the temperature we want to change
  const tempNumber = document.getElementById('temperature-number');
  //get a sample place to display lat and long
  const latLongSpot = document.getElementById('latandlong');
  // run the location API to get lat long, then run the weather API using lat long
  axios
    .get('http://127.0.0.1:5000/location', {
      params: {
        q: city,
      },
    })
    .then((response) => {
      const searchResult = response.data[0];
      const latitude = searchResult.lat;
      const longitude = searchResult.lon;
      console.log(`lat: ${latitude} lon: ${longitude}`);
      latLongSpot.textContent = `lat: ${latitude} lon: ${longitude}`;
    })
    .catch((error) => {
      console.log('error!', error.response.data);
    });
};
// inside the function get the lat/lon of the input city and get its weather (nest the api's)
// reassign the temp variable to match the weather
// register the function to make all this happen when button is clicked

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
  const realCityButton = document.querySelector('#realtimeTemp');
  realCityButton.addEventListener('click', getLiveTemp);
  cityInput.addEventListener('input', changeCityName);
  upButton.addEventListener('click', increaseTemp);
  downButton.addEventListener('click', decreaseTemp);
  upButton.addEventListener('click', changeTempColor);
  downButton.addEventListener('click', changeTempColor);
  upButton.addEventListener('click', changeLandscape);
  downButton.addEventListener('click', changeLandscape);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
