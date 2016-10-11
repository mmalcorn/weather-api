$(document).ready(function(){
  $('#location').submit(function(event){
    event.preventDefault();
    var city = $('#location').val();
    $('.showWeather').text("The city you have chosen is " + city + ".");
  });
});
