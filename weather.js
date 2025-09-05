const API_KEY = "5d17e4ca235a2738ddaeb14a9f414fa9";
const CITY = "Worcester";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        const TEMP = data.main.temp;
        const WEATHER = data.weather[0].description;
        const weatherDiv = document.getElementById('weatherDiv');
        weatherDiv.innerHTML = `<p>The current temperature in ${CITY} is ${TEMP}°F with ${WEATHER}.</p>`;
    }
)
    .catch(error => console.error('Error fetching weather data:', error));