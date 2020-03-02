const formWeather = document.getElementById('weather-form');
const formGiphy = document.getElementById('giphy-form');

const weather = new Weather(formWeather);
const nasa = new Nasa();
const greeting = new Greeting();
const newDate = new NewDate();
const clock = new Clock();
const stocks = new Stocks();
const giphy = new Giphy(formGiphy);
const quotes = new Quotes();
const appTodo = new AppTodo(weather, nasa, greeting, newDate, clock, stocks, giphy, quotes);

appTodo.start();
