var apiKey = require('./../.env').apiKey;

Temperature = function(){
}

Temperature.prototype.getTemperature = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&apiKey=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('#showTemperatureKelvin').text(error.responseJSON.message)
  });
}

exports.weatherModule = Temperature;
