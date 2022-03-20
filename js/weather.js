// env를 써서 보호해야 하나? api?
const weatherContainer = document.querySelector("#weather");
const city = weatherContainer.querySelector("span:first-child");
const weather = weatherContainer.querySelector("span:last-child");

const WEATHER_API_KEY = "f088b745ca3511f6cb9cd83460b25134";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `@${data.name} `;
      weather.innerText = `/ ${data.weather[0].main}, ${data.main.temp}℃`;
    });
}

function geoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
