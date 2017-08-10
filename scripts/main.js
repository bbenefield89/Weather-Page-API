// API KEY f92c1f4990b0574d4a4e4d3dd556f388
var a = {"coord":
{"lon":145.77,"lat":-16.92},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
"base":"cmc stations",
"main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
"wind":{"speed":5.1,"deg":150},
"clouds":{"all":75},
"rain":{"3h":3},
"dt":1435658272,
"sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
"id":2172797,
"name":"Cairns",
"cod":200}


$('form').submit(function(event) {
  event.preventDefault();

  let weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#search').val() + '&appid=f92c1f4990b0574d4a4e4d3dd556f388';
  let weatherOptions = {
  	units: 'imperial',
  	type: 'accurate'
  };

  function displayWeather(weather) {
    let weatherHTML = '<h2>' + weather.name + ', ' + weather.sys.country + '</h2>';
    weatherHTML += '<h3>' + weather.main.temp + '</h3>';
    weatherHTML += '<p>' + weather.weather[0].description + '</p>';
    console.log(weather);
    
    $('#weather').html(weatherHTML);
  } // displayWeather function

  $.getJSON(weatherAPI, weatherOptions, displayWeather).fail(function() {
  	alert('woops');
  });

}); // form submit