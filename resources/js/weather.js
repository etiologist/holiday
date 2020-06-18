
const key = "f36ba1594b72fe5561b3ef7a7485c206"
const url = "https://api.openweathermap.org/data/2.5/weather"

const cities = ["Madrid","Seville","Toledo","Granada"]
let randomCity = Math.floor(Math.random() * cities.length)

const input = (cities[randomCity]);
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(`${url}?&q=${input}&APPID=${key}`)

const getForecast = async () => {
    const urlToFetch = `${url}?&q=${input}&APPID=${key}`
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



const renderForecast = (day) => {  
    
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
    $destination.append(`<h3>${input}</h3>`)
}



const executeSearch = () => {
    $weatherDiv.empty();
    $destination.empty()
    getForecast()
      .then(forecast => {
        renderForecast(forecast)
      })
    return false;   
  }

  $(document).ready(executeSearch)

