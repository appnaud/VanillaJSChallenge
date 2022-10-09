const weather = document.querySelector("#weather");

const API_KEY = "7ec9af0104c81f4b546809c40571994f";

function getWeather(pos) {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} (${data.name})`;
    });
}

navigator.geolocation.getCurrentPosition(getWeather, () =>
  alert("Can't find you. No weather for you.")
);
