const home = document.getElementById('home-index');
home.addEventListener('click', (e)=>{
    e.preventDefault();

    window.location.href = '/index.html'
})

const cityName = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');
const cityTemp = document.getElementById('city-temp');
const temp = document.getElementById('temp');
const humid = document.getElementById('humidity');
const air = document.querySelector('.wind');

const apiKey = "82e71a1225983ae61c992b337e2b79b0";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';



searchBtn.addEventListener('click', function(){
    const cityname = cityName.value.trim();

    if(!cityname){
        alert('Please Enter Correct City')
    } else{
        async function checkWeather(){
            const response = await fetch(apiUrl +`${cityname}` + `&appid=${apiKey}&units=metric`);
            let data = await response.json();
        
           console.log(data);
            cityTemp.innerText = data.name;
            temp.innerText = data.main.temp + ' °C';
            humid.innerText = data.main.humidity + '%';
            air.innerText = data.wind.speed + ' km/h'

        }
        checkWeather();
        
    }
    console.log(cityname);
});