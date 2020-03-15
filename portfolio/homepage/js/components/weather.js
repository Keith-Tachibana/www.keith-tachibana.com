class Weather {
  constructor(formElement) {
    this.formElement = formElement;
    this.loadWeather = this.loadWeather.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleGetWeatherSuccess = this.handleGetWeatherSuccess.bind(this);
    this.handleGetWeatherError = this.handleGetWeatherError.bind(this);
    this.handleSubmitWeather = this.handleSubmitWeather.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmitWeather);
  }

  getWeather(input) {
    $.ajax({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?',
      data: {
        'q': `${input}`,
        'appid': '6c5f85cd849157317aabc35a4f47b9d5'
      },
      success: this.handleGetWeatherSuccess,
      error: this.handleGetWeatherError
    })
  }

  handleGetWeatherSuccess(data) {
    let spanWeather1 = document.createElement('span');
    let spanWeather2 = document.createElement('span');
    let spanWeather3 = document.createElement('span');
    let spanWeather4 = document.createElement('span');
    let spanWeather5 = document.createElement('span');
    let spanWeather6 = document.createElement('span');
    let weatherIMG = document.createElement('img');
    let src = null;
    switch (data.weather[0].description.toLowerCase()) {
      case 'clear sky':
        src = 'https://www.metaweather.com/static/img/weather/ico/c.ico';
        break;
      case 'few clouds':
        src = 'https://www.metaweather.com/static/img/weather/ico/lc.ico';
        break;
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        src = 'https://www.metaweather.com/static/img/weather/ico/hc.ico';
        break;
      case 'shower rain':
      case 'heavy intensity rain':
      case 'very heavy rain':
      case 'extreme rain':
      case 'freezing rain':
      case 'light intensity shower rain':
      case 'heavy intensity shower rain':
      case 'ragged shower rain':
      case 'shower rain and drizzle':
      case 'shower drizzle':
      case 'heavy shower rain and drizzle':
        src = 'https://www.metaweather.com/static/img/weather/ico/s.ico';
        break;
      case 'rain':
      case 'light rain':
      case 'moderate rain':
      case 'light intensity drizzle':
      case 'drizzle':
      case 'heavy intensity drizzle':
      case 'light intensity drizzle':
      case 'drizzle rain':
      case 'heavy intensity drizzle rain':
        src = 'https://www.metaweather.com/static/img/weather/ico/hr.ico';
        break;
      case 'thunderstorm':
      case 'thunderstorm with light rain':
      case 'thunderstorm with rain':
      case 'thunderstorm with heavy rain':
      case 'light thunderstorm':
      case 'heavy thunderstorm':
      case 'ragged thunderstorm':
      case 'thunderstorm with light drizzle':
      case 'thunderstorm with drizle':
      case 'thunderstorm with heavy drizzle':
        src = 'https://www.metaweather.com/static/img/weather/ico/t.ico';
        break;
      case 'snow':
      case 'light snow':
      case 'heavy snow':
      case 'sleet':
      case 'light shower sleet':
      case 'shower sleet':
      case 'light rain and snow':
      case 'rain and snow':
      case 'light shower snow':
      case 'shower snow':
      case 'heavy shower snow':
        src = 'https://www.metaweather.com/static/img/weather/ico/sn.ico';
        break;
      case 'mist':
      case 'fog':
      case 'smoke':
      case 'haze':
      case 'sand/ dust whirls':
      case 'sand':
      case 'dust':
      case 'volcanic ash':
      case 'squalls':
      case 'tornado':
        src = 'http://openweathermap.org/img/wn/50d@2x.png';
        break;
    }
    weatherIMG.src = src;
    let tempK = data.main.temp;
    let tempF = ((tempK - 273.15) * (9/5) + 32).toFixed(1);
    let minTempK = data.main.temp_min;
    let minTempF = ((minTempK - 273.15) * (9 / 5) + 32).toFixed(1);
    let maxTempK = data.main.temp_max;
    let maxTempF = ((maxTempK - 273.15) * (9 / 5) + 32).toFixed(1);
    let windMS = data.wind.speed;
    let windMPH = (windMS*2.237).toFixed(2);
    let sunrise = new Date(data.sys.sunrise * 1000);
    let sunriseHours = sunrise.getHours();
    let sunriseMinutes = '0' + sunrise.getMinutes();
    let sunriseSeconds = '0' + sunrise.getSeconds();
    let sunriseTime = `${sunriseHours}:${sunriseMinutes.substr(-2)}:${sunriseSeconds.substr(-2)} AM`
    let sunset = new Date(data.sys.sunset * 1000);
    let sunsetHours = sunset.getHours();
    let sunsetMinutes = '0' + sunset.getMinutes();
    let sunsetSeconds = '0' + sunset.getSeconds();
    let sunsetTime = `${sunsetHours - 12}:${sunsetMinutes.substr(-2)}:${sunsetSeconds.substr(-2)} PM`
    spanWeather1.innerHTML = `City: ${data.name}`;
    spanWeather2.innerHTML = `Temp: ${tempF}` + '&deg;F,' + ` Min: ${minTempF}` + '&deg;F,' + ` Max: ${maxTempF}` + '&deg;F';
    spanWeather3.innerHTML = `Conditions: ${data.weather[0].main} (${data.weather[0].description})`;
    spanWeather4.innerHTML = `Wind: ${windMPH} mph`;
    spanWeather5.innerHTML = `Sunrise: ${sunriseTime}`;
    spanWeather6.innerHTML = `Sunset: ${sunsetTime}`;
    $('#city, #temps, #condition, #wind, #sunrise, #sunset, #weatherIMG').removeClass('d-none');
    $('#city').append(spanWeather1);
    $('#temps').append(spanWeather2);
    $('#condition').append(spanWeather3);
    $('#wind').append(spanWeather4);
    $('#sunrise').append(spanWeather5);
    $('#sunset').append(spanWeather6);
    $('#weatherIMG').append(weatherIMG);
  }

  handleGetWeatherError(error) {
    console.log(error);
  }

  handleSubmitWeather(event) {
    event.preventDefault();
    $('#city, #temps, #condition, #wind, #sunrise, #sunset, #weatherIMG').text('');
    let formData = new FormData(event.target);
    let city = formData.get('weather');
    this.getWeather(city);
    localStorage.setItem('weather', city);
    event.target.reset();
  }

  loadWeather() {
    const currentCity = localStorage.getItem('weather');
    if (currentCity === undefined) {
      return;
    } else {
      this.getWeather(currentCity);
    }
  }
}
