const apiKey = 'f0a3263ad56623877e07814bc905e67c';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('#it input');
const searchBtn = document.querySelector('#it button');
const weatherIcon = document.querySelector('.iw');
const now = new Date();

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector('#weather').style.display = 'block';
    document.querySelector('#city').innerHTML = 'Not Found';
    document.querySelector('#city').style.color = 'red';
    document.querySelector('#details').style.display = 'none';
    document.querySelector('#WI').style.display = 'none';
    document.querySelector('#bd').style.display = 'block';
    let cho = document.querySelector('#cho');
    cho.style.fontSize = '30px';
    cho.innerHTML = 'Does That Place Even Exist';
  } else {
    var data = await response.json();

    console.log(data);
    document.querySelector('#city').style.color = 'white';
    document.querySelector('#details').style.display = 'grid';
    document.querySelector('#WI').style.display = 'grid';
    document.querySelector('#weather').style.display = 'grid';
    document.querySelector('#bd').style.display = 'none';

    document.querySelector('#city').innerHTML =
      data.name + ', ' + data.sys.country;
    document.querySelector('#temp').innerHTML =
      Math.round(data.main.temp) + '°c';
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('#wind').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('#tempId').innerHTML = data.weather[0].main;
    document.querySelector('#fl').innerHTML =
      Math.round(data.main.feels_like) + '°c';
    document.querySelector('#ps').innerHTML = data.main.pressure + ' mbar';
    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src =
        'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src =
        'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src =
        'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src =
        'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src =
        'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg';
    } else {
      console.log(data.weather[0].main);
    }
  }
}

let tarik;
switch (now.getDay()) {
  case 0:
    tarik = 'Sunday';
    break;
  case 1:
    tarik = 'Monday';
    break;
  case 2:
    tarik = 'Tuesday';
    break;
  case 3:
    tarik = 'Wednesday';
    break;
  case 4:
    tarik = 'Thursday';
    break;
  case 5:
    tarik = 'Friday';
    break;
  case 6:
    tarik = 'Saturday';
}
let mahina;
switch (now.getDay()) {
  case 0:
    mahina = 'Jan';
    break;
  case 1:
    mahina = 'Feb';
    break;
  case 2:
    mahina = 'Mar';
    break;
  case 3:
    mahina = 'Apr';
    break;
  case 4:
    mahina = 'May';
    break;
  case 5:
    mahina = 'Jun';
    break;
  case 7:
    mahina = 'Jul';
  case 8:
    mahina = 'Aug';
  case 9:
    mahina = 'Sep';
  case 10:
    mahina = 'Oct';
  case 11:
    mahina = 'Dec';
}
document.querySelector('#doot').innerHTML =
  tarik + ', ' + mahina + ' ' + now.getDate();

let te;
const hours = now.getHours();
if (hours < 10) {
  te = '0' + hours;
} else {
  te = hours;
}

let mi;
const min = now.getMinutes();
if (min < 10) {
  mi = '0' + min;
} else {
  mi = min;
}

let somoy;
if (hours < 12) {
  somoy = 'am';
} else {
  somoy = 'pm';
}

document.querySelector('#h').innerHTML = te + ':' + mi + somoy;

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    checkWeather(searchBox.value);
  }
});
