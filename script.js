$(document).ready(function(){

var

//API Key for this assignment
var APIkey = "f8b4a60e42d38963b06b2a13ee652e2a"

//Creating URL to search database
var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + APIkey

//Calling Ajax call to the Weather API
$.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    
    // Convert the temp to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    // add temp content to html
    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);
  });

})



