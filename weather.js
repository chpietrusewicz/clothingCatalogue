const API_KEY = "5d17e4ca235a2738ddaeb14a9f414fa9";
const CITY = "Worcester";

let TEMP = 0;
let WEATHER = "";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        TEMP = Math.round(Number(data.main.temp));
        WEATHER = capitalizeFirstLetter(data.weather[0].description);
        const weatherDiv = document.getElementById('weatherDiv');
        weatherDiv.innerHTML = `<h1>${TEMP}°F</h1><p>${WEATHER}</p>`;
    }
)
    .catch(error => console.error('Error fetching weather data:', error));