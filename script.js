

// document.getElementById('getWeather').addEventListener('click', () => {
//   const city = document.getElementById('city').value;
//   const apiKey = '96239b3105eb2449668aa33ab71cf8ef'; // Replace with your OpenWeatherMap API key
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       return response.json();
//     })
//     .then(data => {
//       const result = `
//         <h2>${data.name}, ${data.sys.country}</h2>
//         <p>Temperature: ${data.main.temp}°C</p>
//         <p>Weather: ${data.weather[0].main}</p>
//         <p>Humidity: ${data.main.humidity}%</p>
//       `;
//       document.getElementById('weatherResult').innerHTML = result;
//     })
//     .catch(error => {
//       document.getElementById('weatherResult').innerHTML = <p>${error.message}</p>;
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "96239b3105eb2449668aa33ab71cf8ef";

  getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("City Not Found");
    return await response.json();
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});



    



