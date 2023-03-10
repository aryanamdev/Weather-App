let city = document.getElementById("input");
let searchBtn = document.getElementById("button");

function getWeather() {
  let cityValue = city.value;
  let result = document.querySelector(".result");
  console.log(cityValue);
  if (cityValue.length == 0) {
    text.innerHTML = "Mention a city";
  } else {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dc1eaf787cmshaba2b970c98388ep160517jsnf08d472ee583",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    result.innerHTML = `<h1>Loading ${cityValue}'s Weather...</h1>`;
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityValue}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `<h1>${cityValue}'s Weather</h1>
        <div class="weather">
        <h2 class="values ">Temperature</h2>
        <i class="fa-solid fa-temperature-three-quarters"></i>
        <span class="values temp">${data.temp}°</span>
        </div>
        <div class="weather">
            <h2 class="values humidity">Humidity </h2>
            <i class="fa-solid fa-droplet"></i>
            <span class="values ">${data.humidity}</span>
        </div>
        <div class="weather">
            <h2 class="values Wind Speed">Wind Speed</h2>
            <i class="fa-sharp fa-solid fa-wind"></i>
            <span>${data.wind_speed}</span>
        </div>`;
      })
      .catch(() => {
        result.innerHTML = `<h2 class="msg">City not found</h2>`;
      });
  }
}

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
