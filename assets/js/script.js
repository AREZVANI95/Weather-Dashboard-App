//Variable for the Search button
var searchBtn = document.getElementById("search-button");
//Variable for the Input field
var searchBar = document.getElementById("input-form");
//Variables for each category to be displayed
var city = document.querySelector('.location')
var temp = document.querySelector('.temperature')
var wind = document.querySelector('.wind')
var hum = document.querySelector('.humidity')
var desc = document.querySelector('.description')
var img = document.querySelector('.image')

//Function for the search button to find the information for which the user inputted.
searchBtn.addEventListener('click', function () {
    //Fetch city from the weather api
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchBar.value + '&appid=fabd207c617e8fbed311e9e8c0946ea9')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var windValue = data['wind']['speed'];
            var humValue = data['main']['humidity'];
            var descValue = data['weather'][0]['description'];
            var imgValue = data['weather'][0]['icon'];

            //Will display to the user in form of a list.
            city.innerHTML = "City: " + nameValue;
            temp.innerHTML = "Degree in Kelvin: " + tempValue;
            wind.innerHTML = "Wind Speeds: " + windValue;
            hum.innerHTML = "Humidity: " + humValue;
            desc.innerHTML = "Weather Condition: " + descValue;
            img.innerHTML = imgValue;
        })
//Catch if user inputs something invalid.
    .catch(err => alert("Wrong city name!"))
})