const formWeather = document.getElementById('weather-form');
const formHeadlines = document.getElementById('headlines-form');
const formGiphy = document.getElementById('giphy-form');

const weather = new Weather(formWeather);
const nasa = new Nasa();
const greeting = new Greeting();
const newDate = new NewDate();
const clock = new Clock();
const news = new News(formHeadlines);
const stocks = new Stocks();
const giphy = new Giphy(formGiphy);
const quotes = new Quotes();
const app = new App(weather, nasa, greeting, newDate, clock, news, stocks, giphy, quotes);

app.start();
