const key = "f36ba1594b72fe5561b3ef7a7485c206"
const url = "api.openweathermap.org/data/2.5/weather"

const cities = ["madrid","seville","tolado","granada"]
const randomCity = Math.floor(Math.random * cities.length)


const $input = $(cities[randomCity]);
// const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getForecast = async () => {
    const urlToFetch = `${url}?&q=${$input.val()}&APPID=${key}`
    try {
        const response = await fetch(urlToFetch)
        if (response.ok) {
        const jsonResponse = response.json()
        return jsonResponse
        }
    }
    catch (error) {
        console.log(error)
    }
}

const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
  }
  
const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

const renderForecast = (day) => {  
    
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $weatherDiv.empty();
    $destination.empty();
    getForecast()
      .then(forecast => {
        renderForecast(forecast)
      })
    return false;
  }

window.onload = executeSearch

