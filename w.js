window.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit-btn');
    var cityInput = document.getElementById('city-input');
    var weatherInfo = document.getElementById('weather-info');
  
    submitBtn.addEventListener('click', function() {
      var cityName = cityInput.value;
  
      // Make an API request to fetch weather data
      fetchWeather(cityName);
    });
  
    function fetchWeather(city) {
      var apiKey = 'e9e64a76e3af4133a76115906230606'; // Replace with your own API key
      var apiUrl = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;
  
      fetch(apiUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data.error) {
            displayError(data.error.message);
          } else {
            displayWeather(data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  
    function displayWeather(data) {
      var weather = data.current;
  
      var html = '<h2>' + data.location.name + ', ' + data.location.country + '</h2>';
      html += '<p>Temperature: ' + weather.temp_c + '°C</p>';
      html += '<p>Condition: ' + weather.condition.text + '</p>';
  
      weatherInfo.innerHTML = html;
    }
  
    function displayError(message) {
      weatherInfo.innerHTML = '<p>Error: ' + message + '</p>';
    }
  });