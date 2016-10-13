var apiKey = require('./../.env');
var Temperature = require('./../js/temperature.js').weatherModule;

var displayTemperatureKelvin = function(city, tempData) {
  $('#showTemperatureKelvin').text("The temperature in " + city + " is " + tempData + " degrees Kelvin.");
};

var displayTemperatureCelsius = function(city, tempData) {
  $('#showTemperatureCelsius').text("The temperature in " + city + " is " + tempData + " degrees Celsius.");
};

var displayTemperatureFahrenheit = function(city, tempData) {
  $('#showTemperatureFahrenheit').text("The temperature in " + city + " is " + tempData + " degrees Fahrenheit.");
};


$(document).ready(function() {
  var currentWeatherObject = new Temperature();
  $('#kelvin').click(function() {
    var city = $('#location').val();
    currentWeatherObject.getTemperatureKelvin(city, displayTemperatureKelvin);
  });
  $('#celsius').click(function() {
    var city = $('#location').val();
    currentWeatherObject.getTemperatureCelsius(city, displayTemperatureCelsius);
  });
  $('#fahrenheit').click(function() {
    var city = $('#location').val();
    currentWeatherObject.getTemperatureFahrenheit(city, displayTemperatureFahrenheit);
  });
});
