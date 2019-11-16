// because of "scope", these variables cannot be declared here. Rather, they must be set = to within the "on.("click")" function.

var apiKey;
var cityName;
var units;
var todaysWeather;

$(document).ready(function () {

    $("#submitButton").on("click", function () {

        event.preventDefault();

        cityName = document.getElementById("cityInput").value;
        units = "&units=imperial";
        apiKey = "&apikey=b1bc0656fb35a29b0ccab444b48995bd";
        console.log(cityName);
        todaysWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + units + apiKey;

        var searchInput = $("#cityInput")

        $.ajax({
            url: todaysWeather,
            method: 'GET'
        }).then(function (response) {

            var currentDate = moment().format('(L)');
            console.log(response);
            var iconCode = response.weather[0].icon;
            var iconURL = 'https://openweathermap.org/img/wn/' + iconCode + '.png';

            $("#contentForWeather").append(`
                <h2 id="cityName">${response.name + '<small>' + " " + currentDate + '</small>' + '<img src="" id="icon">'}<h2>
                <p>${"Wind Speed = " + response.wind.speed + " MPH"}</p>
                <p>${"Temperature = " + response.main.temp + " Degrees"}</p>
                <p>${"Humidity = " + response.main.humidity}</p>
            `)

        $('#icon').attr('src', iconURL);

        })
    })
})
