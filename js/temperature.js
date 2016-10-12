var apiKey = require('./../.env').apiKey;

Temperature = function(){
}

Temperature.prototype.getTemperatureKelvin = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&apiKey=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('#showTemperatureKelvin').text(error.responseJSON.message)
  });
}

Temperature.prototype.getTemperatureCelsius = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&apiKey=' + apiKey).then(function(response) {
    displayFunction(city, Math.round((response.main.temp)-273.15));
  }).fail(function(error) {
    $('#showTemperatureCelsius').text(error.responseJSON.message)
  });
}

exports.weatherModule = Temperature;
