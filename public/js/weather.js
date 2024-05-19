const ApiURL = "http://api.weatherapi.com/v1/current.json";
const ApiKey = "1db7ec3d8f644ecba34142738242903";
const headers =  {
  method: "GET",
}

const getGeolocation = () => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(resolve);
  } else {
    reject(new Error("Este navegador no soporta geolocalización"));
  }
});

const fixedVal = 3;
const geolocationPath = (lat, lon) => `?lat=${lat.toFixed(fixedVal)}&lon=${lon.toFixed(fixedVal)}&key=${ApiKey}&lang=es&include=minutely`;

const getWeather = async () => {
  const { coords: { latitude, longitude } } = await getGeolocation();
  return await (await fetch(ApiURL + geolocationPath(latitude, longitude), { ...headers, mode: 'cors' })).json();
}

const weatherDiv = document.querySelector('#weather');

const setCity = (city) => {
  const span = document.createElement('span');
  span.classList.add("city");
  span.innerText = city;
  weatherDiv.appendChild(span);
}
const setCountry = (country) => {
  const span = document.createElement('span');
  span.classList.add("country");
  span.innerText = country;
  weatherDiv.appendChild(span);
}
const setTemp = (temp) => {
  const span = document.createElement('span');
  span.classList.add("temp");
  span.innerText = temp + '°';
  weatherDiv.appendChild(span);
}
const setVisuals = (weather) => {
  const icon = document.createElement('img');
  icon.classList.add("icon");
  icon.setAttribute("src", `http://api.weatherapi.com/v1/static/img/icons/${weather.icon}.png`);
  weatherDiv.appendChild(icon);
  const description = document.createElement('span');
  description.classList.add("description");
  description.innerText = weather.description;
  weatherDiv.appendChild(description);
}

const testWeatherAPI = async () => {
  const response = await getWeather();
  console.log(response);
}

testWeatherAPI();

const showWeather = async () => {
  const data = (await getWeather()).data[0];
  setCity(data.city_name);
  setCountry(data.country_code);
  setTemp(data.app_temp);
  setVisuals(data.weather);
  weatherDiv.classList.add("weather");
}

showWeather();