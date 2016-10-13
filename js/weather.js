// var watson = require('watson-developer-cloud');

var apiKey = require('./../.env').apiKey;

// var tone_analyzer = watson.tone_analyzer({
//   username: "KzVCZqpDcOjr",
//   password: "f57f0a69-d384-4a7c-bceb-80bfc6838d41",
//   version: 'v3',
//   version_date: '2016-05-19'
// });


  // "url": "https://gateway.watsonplatform.net/tone-analyzer/api",

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&apiKey=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('#showHumidity').text(error.responseJSON.message)
  });
}

// Weather.prototype.getTone = function(textInput) {
//
//   var ajaxRequest = new XMLHttpRequest();
//
//   ajaxRequest.onreadystatechange = function()
//   {
//     if (ajaxRequest.readyState === 4)
//     {
//       if (ajaxRequest.status === 200)
//       {
//         $("#ajax-response-text").append("<p>Here is the response text: " + ajaxRequest.responseText + "</p>");
//       }
//       else if (ajaxRequest.satus === 404)
//       {
//         console.log("requested file not found");
//       }
//       else
//       {
//         console.log("ERROR");
//       }
//     }
//   }

  // ajaxRequest.open("GET", "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=" + textInput);
  //
  // ajaxRequest.send();

  // tone_analyzer.tone({ text: textInput,  headers : {
  //      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  //  } },
  // function(err, tone) {
  //   if (err)
  //   console.log(err);
  //   else
  //   console.log(JSON.stringify(tone, null, 2));
  // });

//   $.get("https://gateway.watsonplatform.net/tone-analyzer/api") {
    // headers : {
    //     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    // }
// });
}

exports.weatherModule = Weather;
