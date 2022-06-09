'use strict';

const state = {
  temperature: 40,
  soccer: 0,
};

// function to display the realtime temperature and update the color/landscape with the new temperature
const getLiveTemp = (event) => {
  //get the city name we want to search
  const cityTitleName = document.getElementById('city-title-name');
  // get the actual string of the city name
  const city = cityTitleName.textContent;
  //get the temperature we want to change
  const tempNumber = document.getElementById('temperature-number');
  // run the location API to get lat long, then run the weather API using lat long, then reassign the temp
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
      axios
        .get('http://127.0.0.1:5000/weather', {
          params: {
            lat: latitude,
            lon: longitude,
          },
        })
        .then((response) => {
          const tempKelvin = response.data.current.temp;
          const tempFahr = Math.round((tempKelvin - 273.15) * 1.8 + 32);
          console.log(`${tempKelvin}`);
          console.log(`${tempFahr}`);
          tempNumber.textContent = `${tempFahr}`;
          state.temperature = tempFahr;
          //re-running the temp color and landscape function with our new temp
          changeTempColor();
          changeLandscape();
        })
        .catch((error) => {
          console.log('error with weather API!', error.response.data);
        });
    })
    .catch((error) => {
      console.log('error with location API!', error.response.data);
    });
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

// function to change landscape emojis
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
