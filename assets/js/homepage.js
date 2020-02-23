const formWeather = document.getElementById('weather-form');
const formHeadlines = document.getElementById('headlines-form');
const formSports = document.getElementById('sports-form');

const weather = new Weather(formWeather);
const nasa = new Nasa();
const greeting = new Greeting();
const newDate = new NewDate();
const clock = new Clock();
const news = new News(formHeadlines);
const sports = new Sports(formSports)
const stocks = new Stocks();
const giphy = new Giphy();
const quotes = new Quotes();
const app = new App(weather, nasa, greeting, newDate, clock, news, sports, stocks, giphy, quotes);

app.start();
