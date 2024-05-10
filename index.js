/** @format */

// Selector variables
let inputVal = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let cityOutput = document.querySelector("#cityoutput");
let descriptionOutput = document.querySelector("#description");
let tempOutput = document.querySelector("#temp");
let windOutput = document.querySelector("#wind");

const apiKey = "75482a82ca12174a8ba4306ef31377e9";

// Convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
}

// Fetch weather data from API
btn.addEventListener("click", function () {
  // Make sure the API link is correct and includes the necessary parameters
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let nameValue = data["name"];
      let weatherDescription = data["weather"][0]["description"];
      let temperature = data["main"]["temp"];
      let windSpeed = data["wind"]["speed"];

      cityOutput.innerHTML = `City: ${nameValue}`;
      tempOutput.innerHTML = `Temperature: ${kelvinToFahrenheit(
        temperature
      )} °F`;
      descriptionOutput.innerHTML = `Conditions: ${weatherDescription}`;
      windOutput.innerHTML = `Wind Speed: ${windSpeed} km/h`;
    })
    .catch(err => alert("You entered an incorrect city name"));
});
