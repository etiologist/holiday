const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `
          <h3>Temperature: ${kelvinToCelcius(currentDay.main.temp)}&deg;C</h3>
          <h3>Condition: ${currentDay.weather[0].description}</h3>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
  }
  
  const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
  const kelvinToCelcius = k => (k - 273.15).toFixed(0);