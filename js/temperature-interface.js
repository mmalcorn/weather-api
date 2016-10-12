var apiKey = require('./../.env');
var Temperature = require('./../js/temperature.js').weatherModule;

var displayTemperatureKelvin = function(city, tempData) {
  $('#showTemperatureKelvin').text("The temperature in " + city + " is " + tempData + " degrees Kelvin.");
};

var displayTemperatureCelsius = function(city, tempData) {
  $('#showTemperatureCelsius').text("The temperature in " + city + " is " + Math.round(tempData-273.15) + " degrees celsius.");
};

var displayTemperatureFahrenheit = function(city, tempData) {
  $('#showTemperatureCelsius').text("The temperature in " + city + " is " + Math.round(((9/5)*tempData)-459.67) + " degrees fahrenheit.");
};


$(document).ready(function() {
  var currentWeatherObject = new Temperature();
  $('#kelvin').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city, displayTemperatureKelvin);
  });
  $('#celsius').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city, displayTemperatureCelsius);
  });
  $('#fahrenheit').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city, displayTemperatureFahrenheit);
  });
});
