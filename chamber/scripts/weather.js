const apiKey = "eb78482bd1a6860099dbc7ee9495183e";
const lat = 27.75979;
const lon = -98.06880;

// Current weather
async function getCurrentWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  );

  const data = await response.json();

  document.getElementById("current-temp").textContent =
    `${Math.round(data.main.temp)}°F`;

  document.getElementById("current-description").textContent =
    data.weather[0].description;
}

// 3-day forecast
async function getForecast() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  );

  const data = await response.json();

  // Select one forecast per day (around noon)
  const dailyForecasts = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 3);

  const forecastContainer = document.getElementById("forecast");

  dailyForecasts.forEach(day => {
    const date = new Date(day.dt_txt);

    const forecastCard = document.createElement("div");

    forecastCard.innerHTML = `
      <h4>${date.toLocaleDateString('en-US', { weekday: 'long' })}</h4>
      <p>${Math.round(day.main.temp)}°F</p>
    `;

    forecastContainer.appendChild(forecastCard);
  });
}

getCurrentWeather();
getForecast();