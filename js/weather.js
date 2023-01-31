const API_KEY = "49c095443b27b0c1df1c338ebe8a9051";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${parseFloat(data.main.temp).toFixed(1)}`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for tou.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
