// Configuración para la API
const apiKey = "af3ab63421ef0fd7158c3a2b0a12a002";
const city = "Piura";
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

// Función para cargar clima actual y pronóstico
async function loadWeather() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    // Verificar que los datos se hayan obtenido correctamente
    if (!data || !data.list || data.list.length === 0) {
      throw new Error("No weather data found.");
    }

    // Clima actual
    const currentTemp = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;

    // Actualizar DOM para el clima actual
    document.getElementById("weather-container").innerHTML = `
      <p><strong>Temperature:</strong> ${currentTemp}°C</p>
      <p><strong>Description:</strong> ${description}</p>
    `;

    // Pronóstico de 3 días
    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>"; // Encabezado

    // Filtrar pronóstico a las 12:00 PM para cada día
    const forecastDays = data.list.filter((item) => item.dt_txt.includes("12:00:00"));
    for (let i = 0; i < 3 && i < forecastDays.length; i++) {
      const forecast = forecastDays[i];
      forecastContainer.innerHTML += `
        <p><strong>Day ${i + 1}:</strong> ${forecast.main.temp}°C, ${forecast.weather[0].description}</p>
      `;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-container").innerHTML = `<p>Error loading weather data.</p>`;
  }
}

// Llamar la función para cargar el clima
loadWeather();

