import api from './api.js'

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.result .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.result .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let highlow = document.querySelector('.high-low');
  highlow.innerHTML = `
  <div class="row">
    <div class="col-md-6">
      <h5>Min temperature</h5>
      <p>${Math.round(weather.main.temp_min)}°c</p>
    </div>
    <div class="col-md-6">
      <h5>Max temperature</h5>
      <p>${Math.round(weather.main.temp_max)}°c</p>
    </div>
  </div>
  <style>
  h5{
        color: #FFF;
        font-size: 20px;
        font-weight: 500;
        text-shadow: 0px 4px rgba(0, 0, 0, 0.4);
      }
      p{
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
        text-shadow: 0px 4px rgba(0, 0, 0, 0.4);
      }
  </style>
  `;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}