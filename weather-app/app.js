const cityName = document.getElementById('city-name');
const searchBtn = document.getElementById('btn')
const cityTemp = document.getElementById('city-temp')

const apiKey = "82e71a1225983ae61c992b337e2b79b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&uits=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

   console.log(data);
    cityTemp.innerText = data.name;
}



checkWeather();