let city = document.getElementById("input");
let searchBtn = document.getElementById("button");
let text = document.querySelector(".result>h2");
let result = document.querySelector(".result");

function getWeather() {
  let cityValue = city.value;
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

    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityValue}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `<h1>${cityValue}'s Temperature</h1>
        <div class="weather">
            <h2 class="weather">Temperature <i class="fa-solid fa-temperature-three-quarters"></i></h2>
            <span class="values temp">${data.temp} Degrees</span>
        </div>
        <div class="weather">
            <h2 class="values humidity">Humidity</h2>
            <span class="values ">${data.humidity}</span>
        </div>
        <div class="weather">
            <h2 class="values Wind Speed">Wind Speed</h2>
            <span>${data.wind_speed}</span>
        </div>`;
      })
      .catch((err) => console.error(err));
  }
}

searchBtn.addEventListener("click", getWeather);
