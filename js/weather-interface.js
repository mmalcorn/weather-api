var apiKey = require('./../.env');
var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('#showHumidity').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherHumidityLocation').click(function() {
    var city = $('#location').val();
    currentWeatherObject.getWeather(city, displayHumidity);
  });

  // $("#text-form").submit(function(event) {
  //   event.preventDefault();
  //   var text = $('#text-input').val();
  //   currentWeatherObject.getTone(text);
  // })
});
