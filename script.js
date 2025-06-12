// ee5c3b35a94b5db4e504980c46217fac

const date = document.getElementById('date')
const city = document.getElementById('city')
const temperature = document.getElementById('temperature')
const tempImg = document.getElementById('tempImg');

const description = document.getElementById('description')

const tempMax = document.getElementById('tempMax')
const tempMin  = document.getElementById('tempMin')
const feelsLike = document.getElementById('feelsLike')

const windSpeed = document.getElementById('windSpeed')
const degree = document.getElementById('degree')
const gust = document.getElementById('gust');

const months = ["january", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;


const app = document.getElementById('app');
const searchInput = document.getElementById('searchBarInput');
const searchBtn = document.getElementById('searchIcon');

const getWeather = async (cityName) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee5c3b35a94b5db4e504980c46217fac&units=metric`, {
            headers: {
                Accept: "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        city.innerText = data.name;
        description.innerText = data.weather[0].description;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
        temperature.innerText = `${data.main.temp} °C`;
        tempMax.innerText = `${data.main.temp_max} °C`;
        tempMin.innerText = `${data.main.temp_min} °C`;
        feelsLike.innerText = `${data.main.feels_like}°C`;
        windSpeed.innerText = `${data.wind.speed} m/s`;
        degree.innerText    =   `${data.wind.deg}°`;
        gust.innerText = `${data.wind.gust} m/s`;


    } catch (error) {
        console.log(error);
    }
};

searchBtn.addEventListener('click', () => {
    const cityName = searchInput.value.trim();
    if (cityName) {
        getWeather(cityName);
        searchInput.value= '';
    }
});

window.addEventListener('DOMContentLoaded',()=>{
    getWeather('Delhi');
    
})