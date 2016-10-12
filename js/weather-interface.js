var apiKey = require('./../.env');
var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('#showHumidity').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherHumidityLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
