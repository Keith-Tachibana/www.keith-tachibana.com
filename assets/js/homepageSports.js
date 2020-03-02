const formWeather = document.getElementById('weather-form');
const formSports = document.getElementById('sports-form');
const formGiphy = document.getElementById('giphy-form');

const weather = new Weather(formWeather);
const nasa = new Nasa();
const greeting = new Greeting();
const newDate = new NewDate();
const clock = new Clock();
const sports = new Sports(formSports)
const stocks = new Stocks();
const giphy = new Giphy(formGiphy);
const quotes = new Quotes();
const appSports = new AppSports(weather, nasa, greeting, newDate, clock, sports, stocks, giphy, quotes);

appSports.start();
